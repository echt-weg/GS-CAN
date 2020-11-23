//
//    GS-CAN Can2Wifi-Receiver
//    Version 0.9a
//    Gunnar Schröder, 2020
//

#include <WiFi.h>
#include <WebSocketsServer.h>
#include<Arduino.h>
#include <ESP32CAN.h>
#include <CAN_config.h>

// Konfiguration CAN-Interface
CAN_device_t CAN_cfg;
unsigned long previousMillis = 0;
const int interval = 1000;
const int rx_queue_size = 10; 

// Handling von Websocket-Events
WebSocketsServer webSocket = WebSocketsServer(80);
void onWebSocketEvent(uint8_t num,
                      WStype_t type,
                      uint8_t * payload,
                      size_t length) {
  switch(type) {
    case WStype_DISCONNECTED:
      Serial.printf("[%u] Abbruch des Clients!\n", num);
      break;
    case WStype_CONNECTED:
      {
        IPAddress ip = webSocket.remoteIP(num);
        Serial.printf("[%u] Neuer GS-CAN-Client ", num);
        Serial.println(ip.toString());
      }
      break;
    case WStype_TEXT:
    case WStype_BIN:
    case WStype_ERROR:
    case WStype_FRAGMENT_TEXT_START:
    case WStype_FRAGMENT_BIN_START:
    case WStype_FRAGMENT:
    case WStype_FRAGMENT_FIN:
    default:
      break;
  }
}
void setup() {
  // Starten der seriellen Verbindung zur Debug-Ausgabe
  delay(200);
  Serial.begin(115200);
  delay(200);
  
  // Starten des AP
  WiFi.softAP("GS-CAN", "12345678");
  delay(200);

  // Konfigurationu und Initalisierung vom CAN-Interface
  CAN_cfg.speed = CAN_SPEED_500KBPS;
  CAN_cfg.tx_pin_id = GPIO_NUM_5;
  CAN_cfg.rx_pin_id = GPIO_NUM_4;
  CAN_cfg.rx_queue = xQueueCreate(rx_queue_size, sizeof(CAN_frame_t));
  ESP32Can.CANInit();

  // Starten vom Websocket
  webSocket.begin();
  webSocket.onEvent(onWebSocketEvent);
}

void loop() {
  webSocket.loop();
  char udptext[300];
  String sendtext;
  CAN_frame_t rx_frame;
  unsigned long currentMillis = millis();
  // Abgreifen und verarbeiten aller Nachrichten der Queue
  if (xQueueReceive(CAN_cfg.rx_queue, &rx_frame, 3 * portTICK_PERIOD_MS) == pdTRUE) {
    if (rx_frame.FIR.B.FF == CAN_frame_std) {
      sprintf(udptext,"<packet><type>std</type>"); 
    }
    else {
      sprintf(udptext,"<packet><type>ext</type>"); 
    }
    sendtext=udptext;
    if (rx_frame.FIR.B.RTR == CAN_RTR) {
      sprintf(udptext,"<header>0x%08X</header><dlc>%d</dlc>", rx_frame.MsgID, rx_frame.FIR.B.DLC); 
      sendtext=sendtext+udptext;
    }
    else {
      sprintf(udptext,"<header>0x%08X</header><dlc>%d</dlc><data>", rx_frame.MsgID, rx_frame.FIR.B.DLC);
      sendtext=sendtext+udptext;            
      for (int i = 0; i < rx_frame.FIR.B.DLC; i++) {
         sprintf(udptext,"<d%d>%02X</d%d>", i, rx_frame.data.u8[i], i);  
          sendtext=sendtext+udptext;
      }
      sprintf(udptext,"</data>");
      sendtext=sendtext+udptext;
    }
    sprintf(udptext,"</packet>");
    sendtext=sendtext+udptext;
    // Versand des Pakets per Websocket und RS232. Workaround mit dem Senden an 0-5 sollte optimiert werden
    webSocket.sendTXT(0,sendtext);
    webSocket.sendTXT(1,sendtext);
    webSocket.sendTXT(2,sendtext);
    webSocket.sendTXT(3,sendtext);
    webSocket.sendTXT(4,sendtext);
    webSocket.sendTXT(5,sendtext);
    Serial.println(sendtext);
  }
}
