#include<Arduino.h>
#include <ESP32CAN.h>
#include <CAN_config.h>

CAN_device_t CAN_cfg;               // CAN Config
const int interval = 300;          // interval at which send CAN Messages (milliseconds)
int zaehler=1;

int resistor = 681;     //Wir verwenden 681 Ohm Widerstände zum messen
float refvoltage = 3.3; //Referenzspannung des ESP32
float otemp = 0;
float chttemp = 0;
float opress = 0;
#define OTEMPPIN 32
#define CHTTEMPPIN 35
#define OPRESSPIN 34


typedef union
{
 float number;
 uint8_t bytes[4];
} FLOATUNION_t;


void setup() {
  Serial.begin(115200);
  delay(200);

  CAN_cfg.speed = CAN_SPEED_500KBPS;
  CAN_cfg.tx_pin_id = GPIO_NUM_5;
  CAN_cfg.rx_pin_id = GPIO_NUM_4;
  ESP32Can.CANInit();
}


float resistortotemp(float resistor, int mode)
{
  int NOMINAL_RESISTANCE;
  int NOMINAL_TEMPERATURE;
  int BCOEFFICIENT;

  if (mode == 1) // Standardwerte für VDO-Sensor bis 150°
  {
    NOMINAL_RESISTANCE = 36;
    NOMINAL_TEMPERATURE = 120;
    BCOEFFICIENT = 3950;
  }
  if (mode == 2) // Standardwerte für VDO-Sensor bis 120°
  {
    NOMINAL_RESISTANCE = 51;
    NOMINAL_TEMPERATURE = 90;
    BCOEFFICIENT = 3950;
  }

  float steinhart;
  steinhart = resistor / NOMINAL_RESISTANCE;
  steinhart = log(steinhart); // ln(R/Ro)
  steinhart /= BCOEFFICIENT; // 1/B * ln(R/Ro)
  steinhart += 1.0 / (NOMINAL_TEMPERATURE + 273.15); // + (1/To)
  steinhart = 1.0 / steinhart; // Invert
  steinhart -= 273.15; // convert to C
  return steinhart;
}



float resistortopress(float resistor)
{
  // Umrechnen in Öldruck bei VDO 0-10bar Sensor
  float a = 8.37e-8;
  float b = 0.000054058;
  float c = 0.0439893708;
  float d = -0.4453831665;
  float opresscalc = a * resistor * resistor * resistor + b * resistor * resistor + c * resistor + d;
  return opresscalc;
}


// Messen vom übergebenem Widerstand
float measureresistor(int PIN)
{
  //8 Messungen machen und Mittelwert bilden
  int Messwert = 0;
  for (int i = 0; i < 8; i++) {
    Messwert += analogRead(PIN);
  }
  Messwert = trunc(Messwert / 8);
  float SpannungR2 = (refvoltage / 4095) * Messwert;
  //Serial.print(SpannungR2);
  if (SpannungR2 > 0.01)
  {
    SpannungR2 = SpannungR2 + 0.10; // 0.10 V addieren
  }

  //Serial.print(" auf ");

 // Serial.println(SpannungR2);
  float Widerstand = resistor * (SpannungR2 / (refvoltage - SpannungR2));
 // Serial.println(Widerstand);
 // Serial.println("----");
  if (Widerstand < 0)
  {
    Widerstand == 0;
  }
  return Widerstand;
}
// Ende Messen vom übergebenem Widerstand



void loop() {  
    float tmpresistor;
    float tmptemp;
    float tmppress;




      Serial.print("oiltemp:");
      Serial.println(otemp);
      Serial.print("chttemp:");
      Serial.println(chttemp);
      Serial.print("oilpress:");
      Serial.println(opress);
      
      CAN_frame_t my_frame;   
      my_frame.FIR.B.FF = CAN_frame_ext;
      my_frame.FIR.B.DLC = 8;

    if (zaehler==1)
    {

      
    // Messen der Kopftemperatur
    tmpresistor = measureresistor(CHTTEMPPIN);
    tmptemp = resistortotemp(tmpresistor, 2);
    if (tmptemp != chttemp)
    {
      // Setzen der neuen Öltemperatur
      chttemp = tmptemp;
    }
    // Ende messen der Öltemperatur

    
      delay(1000);
      my_frame.MsgID = 0x02247F00; //CHT-Temperatur 1
      FLOATUNION_t myFloat;
      myFloat.number = chttemp; // Assign a number to the float 
      my_frame.data.u8[0] = 0x00;
      my_frame.data.u8[1] = 0x00;
      my_frame.data.u8[2] = 0x00;
      my_frame.data.u8[3] = 0x00;
      my_frame.data.u8[4] = myFloat.bytes[0];
      my_frame.data.u8[5] = myFloat.bytes[1];
      my_frame.data.u8[6] = myFloat.bytes[2];
      my_frame.data.u8[7] = myFloat.bytes[3];
      ESP32Can.CANWriteFrame(&my_frame);
    }

    if (zaehler==2)
    {

              // Messen der Öltemperatur
        tmpresistor = measureresistor(OTEMPPIN);
        tmptemp = resistortotemp(tmpresistor, 1);
        if (tmptemp != otemp)
        {
          // Setzen der neuen Öltemperatur
          otemp = tmptemp;
        }
        // Ende messen der Öltemperatur
      delay(1000);
      my_frame.MsgID = 0x02187F00; //OIL-Temperatur 1  
      FLOATUNION_t myFloat;
      myFloat.number = otemp; // Assign a number to the float 
      my_frame.data.u8[0] = 0x00;
      my_frame.data.u8[1] = 0x00;
      my_frame.data.u8[2] = 0x00;
      my_frame.data.u8[3] = 0x00;
      my_frame.data.u8[4] = myFloat.bytes[0];
      my_frame.data.u8[5] = myFloat.bytes[1];
      my_frame.data.u8[6] = myFloat.bytes[2];
      my_frame.data.u8[7] = myFloat.bytes[3];
      ESP32Can.CANWriteFrame(&my_frame);
    }

    if (zaehler==3)
    {

          // Messen des Öldrucks
    tmpresistor = measureresistor(OPRESSPIN);
    tmppress = resistortopress(tmpresistor);
    if (tmppress != opress)
    {
      // Setzen der neuen Öltemperatur
      opress = tmppress;
    }
    // Ende messen des Öldrucks



      delay(1000);
      my_frame.MsgID = 0x02147F00; //OIL-Press 1
      FLOATUNION_t myFloat;
      myFloat.number = opress; // Assign a number to the float 
      my_frame.data.u8[0] = 0x00;
      my_frame.data.u8[1] = 0x00;
      my_frame.data.u8[2] = 0x00;
      my_frame.data.u8[3] = 0x00;
      my_frame.data.u8[4] = myFloat.bytes[0];
      my_frame.data.u8[5] = myFloat.bytes[1];
      my_frame.data.u8[6] = myFloat.bytes[2];
      my_frame.data.u8[7] = myFloat.bytes[3];
      ESP32Can.CANWriteFrame(&my_frame);   
    }

    if (zaehler==4)
    {
      zaehler=0;
    }
    zaehler=zaehler+1;
    
    
}
