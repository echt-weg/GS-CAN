// Konfigurationsparameter
var ws_protocol ="ws";
var ws_hostname = "192.168.4.1";
var ws_port     = "80";
var ws_endpoint = "";
var language	= "lang-de";


// Definition von bekannten Kanardia-Meldungen bzw. Sensoren
var midmap = new Map();
midmap.set(300,"<data><source>KanCan Spec Rev 0.0</source><spec-name>Acceleration in x (longitudinal)</spec-name><unit>m/s2</unit><lang-de>Beschleunigung X</lang-de><lang-en>Acceleration in x (longitudinal)</lang-en></data>");
midmap.set(301,"<data><source>KanCan Spec Rev 0.0</source><spec-name>Acceleration in y (lateral)</spec-name><unit>m/s2</unit><lang-de>Beschleunigung Y</lang-de><lang-en>Acceleration in y (lateral)</lang-en></data>");
midmap.set(302,"<data><source>KanCan Spec Rev 0.0</source><spec-name>Acceleration in z (normal)</spec-name><unit>m/s2</unit><lang-de>Beschleunigung Z</lang-de><lang-en>Acceleration in z (normal)</lang-en></data>");
midmap.set(303,"<data><source>KanCan Spec Rev 0.0</source><spec-name>Pitch rate</spec-name><unit>rad/s</unit><lang-de>Pitch</lang-de><lang-en>Pitch rate</lang-en></data>");
midmap.set(304,"<data><source>KanCan Spec Rev 0.0</source><spec-name>Roll rate</spec-name><unit>rad/s</unit><lang-de>Rollen</lang-de><lang-en>Roll rate</lang-en></data>");
midmap.set(305,"<data><source>KanCan Spec Rev 0.0</source><spec-name>Yaw rate</spec-name><unit>rad/s</unit><lang-de>Gieren</lang-de><lang-en>Yaw rate</lang-en></data>");
midmap.set(311,"<data><source>KanCan Spec Rev 0.0</source><spec-name>Pitch angle (up is positive)</spec-name><unit>rad</unit><lang-de>Pitchwinkel</lang-de><lang-en>Pitch angle (up is positive)</lang-en></data>");
midmap.set(312,"<data><source>KanCan Spec Rev 0.0</source><spec-name>Roll angle (right roll is positive)</spec-name><unit>rad</unit><lang-de>Rollwinkel</lang-de><lang-en>Roll angle (right roll is positive)</lang-en></data>");
midmap.set(314,"<data><source>KanCan Spec Rev 0.0</source><spec-name>Vertical speed</spec-name><unit>m/s</unit><lang-de>Vario</lang-de><lang-en>Vertical speed</lang-en></data>");
midmap.set(315,"<data><source>KanCan Spec Rev 0.0</source><spec-name>Indicated airspeed</spec-name><unit>kts</unit><lang-de>IAS</lang-de><lang-en>Indicated airspeed</lang-en></data>");
midmap.set(316,"<data><source>KanCan Spec Rev 0.0</source><spec-name>True airspeed</spec-name><unit>kts</unit><lang-de>TAS</lang-de><lang-en>True airspeed</lang-en></data>");
midmap.set(319,"<data><source>KanCan Spec Rev 0.0</source><spec-name>Barometric correction (QNH)</spec-name><unit>hPa</unit><lang-de>QNH</lang-de><lang-en>Barometric correction (QNH)</lang-en></data>");
midmap.set(320,"<data><source>KanCan Spec Rev 0.0</source><spec-name>Baro corrected altitude</spec-name><unit>m</unit><lang-de>Höhe kompensiert</lang-de><lang-en>Baro corrected altitude</lang-en></data>");
midmap.set(321,"<data><source>KanCan Spec Rev 0.0</source><spec-name>Heading angle</spec-name><unit>rad</unit><lang-de>Kurs</lang-de><lang-en>Heading angle</lang-en></data>");
midmap.set(322,"<data><source>KanCan Spec Rev 0.0</source><spec-name>Standard altitude</spec-name><unit>m</unit><lang-de>Höhe</lang-de><lang-en>Standard altitude</lang-en></data>");
midmap.set(325,"<data><source>KanCan Spec Rev 0.0</source><spec-name>Differential pressure</spec-name><unit>hPa</unit><lang-de>Differenzdruck</lang-de><lang-en>Differential pressure</lang-en></data>");
midmap.set(326,"<data><source>KanCan Spec Rev 0.0</source><spec-name>Static pressure</spec-name><unit>hPa</unit><lang-de>Statischer Druck</lang-de><lang-en>Static pressure</lang-en></data>");
midmap.set(327,"<data><source>KanCan Spec Rev 0.0</source><spec-name>Heading rate</spec-name><unit>rad/s</unit><lang-de>Kursdrehrate</lang-de><lang-en>Heading rate</lang-en></data>");
midmap.set(333,"<data><source>KanCan Spec Rev 0.0</source><spec-name>Wind speed</spec-name><unit>m/s</unit><lang-de>Wind</lang-de><lang-en>Wind speed</lang-en></data>");
midmap.set(334,"<data><source>KanCan Spec Rev 0.0</source><spec-name>Wind into direction</spec-name><unit>rad</unit><lang-de>Windrichtung</lang-de><lang-en>Wind into direction</lang-en></data>");
midmap.set(335,"<data><source>KanCan Spec Rev 0.0</source><spec-name>Outside air temperature</spec-name><unit>°C</unit><lang-de>Aussentemperatur</lang-de><lang-en>Outside air temperature</lang-en></data>");
midmap.set(402,"<data><source>KanCan Spec Rev 0.0</source><spec-name>Roll trim position (-1 nose down)</spec-name><lang-de>Roll trim position (-1 nose down)</lang-de><lang-en>Roll trim position (-1 nose down)</lang-en></data>");
midmap.set(405,"<data><source>KanCan Spec Rev 0.0</source><spec-name>Pitch trim position (-1 left)</spec-name><lang-de>Pitch trim position (-1 left)</lang-de><lang-en>Pitch trim position (-1 left)</lang-en></data>");
midmap.set(409,"<data><source>KanCan Spec Rev 0.0</source><spec-name>Roll trim speed</spec-name><lang-de>Roll trim speed</lang-de><lang-en>Roll trim speed</lang-en></data>");
midmap.set(410,"<data><source>KanCan Spec Rev 0.0</source><spec-name>Pitch trim speed</spec-name><lang-de>Pitch trim speed</lang-de><lang-en>Pitch trim speed</lang-en></data>");
midmap.set(414,"<data><source>KanCan Spec Rev 0.0</source><spec-name>Throttle position (0 back)</spec-name><lang-de>Throttle position (0 back)</lang-de><lang-en>Throttle position (0 back)</lang-en></data>");
midmap.set(430,"<data><source>KanCan Spec Rev 0.0</source><spec-name>Flap position (0 retracted)</spec-name><lang-de>Flap position (0 retracted)</lang-de><lang-en>Flap position (0 retracted)</lang-en></data>");
midmap.set(443,"<data><source>KanCan Spec Rev 0.0</source><spec-name>Flap movement speed</spec-name><lang-de>Flap movement speed</lang-de><lang-en>Flap movement speed</lang-en></data>");
midmap.set(500,"<data><source>KanCan Spec Rev 0.0</source><spec-name>Engine RPM 1</spec-name><unit>rpm</unit><lang-de>Drehzahl</lang-de><lang-en>Engine RPM 1</lang-en></data>");
midmap.set(501,"<data><source>KanCan Spec Rev 0.0</source><spec-name>Engine RPM 2</spec-name><unit>rpm</unit><lang-de>Drehzahl 2</lang-de><lang-en>Engine RPM 2</lang-en></data>");
midmap.set(508,"<data><source>KanCan Spec Rev 0.0</source><spec-name>Engine torque</spec-name><unit>Nm</unit><lang-de>Engine torque</lang-de><lang-en>Engine torque</lang-en></data>");
midmap.set(524,"<data><source>KanCan Spec Rev 0.0</source><spec-name>Engine fuel flow rate</spec-name><unit>l/h</unit><lang-de>Engine fuel flow rate</lang-de><lang-en>Engine fuel flow rate</lang-en></data>");
midmap.set(528,"<data><source>KanCan Spec Rev 0.0</source><spec-name>Manifold pressure 1</spec-name><unit>bar</unit><lang-de>Manifold pressure 1</lang-de><lang-en>Manifold pressure 1</lang-en></data>");
midmap.set(529,"<data><source>KanCan Spec Rev 0.0</source><spec-name>Manifold pressure 2</spec-name><unit>bar</unit><lang-de>Manifold pressure 2</lang-de><lang-en>Manifold pressure 2</lang-en></data>");
midmap.set(532,"<data><source>KanCan Spec Rev 0.0</source><spec-name>Engine oil pressure 1</spec-name><unit>bar</unit><lang-de>Engine oil pressure 1</lang-de><lang-en>Engine oil pressure 1</lang-en></data>");
midmap.set(533,"<data><source>KanCan Spec Rev 0.0</source><spec-name>Engine oil pressure 2</spec-name><unit>bar</unit><lang-de>Engine oil pressure 2</lang-de><lang-en>Engine oil pressure 2</lang-en></data>");
midmap.set(536,"<data><source>KanCan Spec Rev 0.0</source><spec-name>Engine oil temperature 1</spec-name><unit>°C</unit><lang-de>Engine oil temperature 1</lang-de><lang-en>Engine oil temperature 1</lang-en></data>");
midmap.set(537,"<data><source>KanCan Spec Rev 0.0</source><spec-name>Engine oil temperature 2</spec-name><unit>°C</unit><lang-de>Engine oil temperature 2</lang-de><lang-en>Engine oil temperature 2</lang-en></data>");
midmap.set(548,"<data><source>KanCan Spec Rev 0.0</source><spec-name>Engine coolant temperature 1</spec-name><unit>°C</unit><lang-de>Engine coolant temperature 1</lang-de><lang-en>Engine coolant temperature 1</lang-en></data>");
midmap.set(549,"<data><source>KanCan Spec Rev 0.0</source><spec-name>Engine coolant temperature 2</spec-name><unit>°C</unit><lang-de>Engine coolant temperature 2</lang-de><lang-en>Engine coolant temperature 2</lang-en></data>");
midmap.set(552,"<data><source>KanCan Spec Rev 0.0</source><spec-name>Engine power</spec-name><unit>kW</unit><lang-de>Engine power</lang-de><lang-en>Engine power</lang-en></data>");
midmap.set(564,"<data><source>KanCan Spec Rev 0.0</source><spec-name>Engine ambient (compartment) pressure</spec-name><unit>bar</unit><lang-de>Engine ambient (compartment) pressure</lang-de><lang-en>Engine ambient (compartment) pressure</lang-en></data>");
midmap.set(565,"<data><source>KanCan Spec Rev 0.0</source><spec-name>Engine ignition timing</spec-name><unit>bar</unit><lang-de>Engine ignition timing</lang-de><lang-en>Engine ignition timing</lang-en></data>");
midmap.set(654,"<data><source>KanCan Spec Rev 0.0</source><spec-name>Engine compartment temperature</spec-name><unit>°C</unit><lang-de>Engine compartment temperature</lang-de><lang-en>Engine compartment temperature</lang-en></data>");
midmap.set(655,"<data><source>KanCan Spec Rev 0.0</source><spec-name>Fuel line temperature</spec-name><unit>°C</unit><lang-de>Fuel line temperature</lang-de><lang-en>Fuel line temperature</lang-en></data>");
midmap.set(668,"<data><source>KanCan Spec Rev 0.0</source><spec-name>Fuel level 1</spec-name><unit>l</unit><lang-de>Fuel level 1</lang-de><lang-en>Fuel level 1</lang-en></data>");
midmap.set(669,"<data><source>KanCan Spec Rev 0.0</source><spec-name>Fuel level 2</spec-name><unit>l</unit><lang-de>Fuel level 2</lang-de><lang-en>Fuel level 2</lang-en></data>");
midmap.set(670,"<data><source>KanCan Spec Rev 0.0</source><spec-name>Fuel level 3</spec-name><unit>l</unit><lang-de>Fuel level 3</lang-de><lang-en>Fuel level 3</lang-en></data>");
midmap.set(671,"<data><source>KanCan Spec Rev 0.0</source><spec-name>Fuel level 4</spec-name><unit>l</unit><lang-de>Fuel level 4</lang-de><lang-en>Fuel level 4</lang-en></data>");
midmap.set(684,"<data><source>KanCan Spec Rev 0.0</source><spec-name>Fuel system pressure 1</spec-name><unit>bar</unit><lang-de>Fuel system pressure 1</lang-de><lang-en>Fuel system pressure 1</lang-en></data>");
midmap.set(685,"<data><source>KanCan Spec Rev 0.0</source><spec-name>Fuel system pressure 2</spec-name><unit>bar</unit><lang-de>Fuel system pressure 2</lang-de><lang-en>Fuel system pressure 2</lang-en></data>");
midmap.set(692,"<data><source>KanCan Spec Rev 0.0</source><spec-name>Lambda (exhaust gases)</spec-name><lang-de>Lambda (exhaust gases)</lang-de><lang-en>Lambda (exhaust gases)</lang-en></data>");
midmap.set(700,"<data><source>KanCan Spec Rev 0.0</source><spec-name>Rotor RPM</spec-name><unit>rpm</unit><lang-de>Rotor RPM</lang-de><lang-en>Rotor RPM</lang-en></data>");
midmap.set(712,"<data><source>KanCan Spec Rev 0.0</source><spec-name>Gearbox oil pressure</spec-name><unit>bar</unit><lang-de>Gearbox oil pressure</lang-de><lang-en>Gearbox oil pressure</lang-en></data>");
midmap.set(720,"<data><source>KanCan Spec Rev 0.0</source><spec-name>Gearbox oil temperature 1</spec-name><unit>°C</unit><lang-de>Gearbox oil temperature 1</lang-de><lang-en>Gearbox oil temperature 1</lang-en></data>");
midmap.set(721,"<data><source>KanCan Spec Rev 0.0</source><spec-name>Gearbox oil temperature 2</spec-name><unit>°C</unit><lang-de>Gearbox oil temperature 2</lang-de><lang-en>Gearbox oil temperature 2</lang-en></data>");
midmap.set(722,"<data><source>KanCan Spec Rev 0.0</source><spec-name>Gearbox oil temperature 3</spec-name><unit>°C</unit><lang-de>Gearbox oil temperature 3</lang-de><lang-en>Gearbox oil temperature 3</lang-en></data>");
midmap.set(723,"<data><source>KanCan Spec Rev 0.0</source><spec-name>Gearbox oil temperature 4</spec-name><unit>°C</unit><lang-de>Gearbox oil temperature 4</lang-de><lang-en>Gearbox oil temperature 4</lang-en></data>");
midmap.set(724,"<data><source>KanCan Spec Rev 0.0</source><spec-name>Gearbox oil temperature 5</spec-name><unit>°C</unit><lang-de>Gearbox oil temperature 5</lang-de><lang-en>Gearbox oil temperature 5</lang-en></data>");
midmap.set(725,"<data><source>KanCan Spec Rev 0.0</source><spec-name>Gearbox oil temperature 6</spec-name><unit>°C</unit><lang-de>Gearbox oil temperature 6</lang-de><lang-en>Gearbox oil temperature 6</lang-en></data>");
midmap.set(726,"<data><source>KanCan Spec Rev 0.0</source><spec-name>Gearbox oil temperature 7</spec-name><unit>°C</unit><lang-de>Gearbox oil temperature 7</lang-de><lang-en>Gearbox oil temperature 7</lang-en></data>");
midmap.set(727,"<data><source>KanCan Spec Rev 0.0</source><spec-name>Gearbox oil temperature 8</spec-name><unit>°C</unit><lang-de>Gearbox oil temperature 8</lang-de><lang-en>Gearbox oil temperature 8</lang-en></data>");
midmap.set(920,"<data><source>KanCan Spec Rev 0.0</source><spec-name>Voltage (DC) 1</spec-name><unit>V</unit><lang-de>Voltage (DC) 1</lang-de><lang-en>Voltage (DC) 1</lang-en></data>");
midmap.set(921,"<data><source>KanCan Spec Rev 0.0</source><spec-name>Voltage (DC) 2</spec-name><unit>V</unit><lang-de>Voltage (DC) 2</lang-de><lang-en>Voltage (DC) 2</lang-en></data>");
midmap.set(922,"<data><source>KanCan Spec Rev 0.0</source><spec-name>Voltage (DC) 3</spec-name><unit>V</unit><lang-de>Voltage (DC) 3</lang-de><lang-en>Voltage (DC) 3</lang-en></data>");
midmap.set(923,"<data><source>KanCan Spec Rev 0.0</source><spec-name>Voltage (DC) 4</spec-name><unit>V</unit><lang-de>Voltage (DC) 4</lang-de><lang-en>Voltage (DC) 4</lang-en></data>");
midmap.set(924,"<data><source>KanCan Spec Rev 0.0</source><spec-name>Battery cell voltage + index in register A</spec-name><unit>V</unit><lang-de>Battery cell voltage + index in register A</lang-de><lang-en>Battery cell voltage + index in register A</lang-en></data>");
midmap.set(930,"<data><source>KanCan Spec Rev 0.0</source><spec-name>Electrical current 1</spec-name><unit>A</unit><lang-de>Electrical current 1</lang-de><lang-en>Electrical current 1</lang-en></data>");
midmap.set(931,"<data><source>KanCan Spec Rev 0.0</source><spec-name>Electrical current 2</spec-name><unit>A</unit><lang-de>Electrical current 2</lang-de><lang-en>Electrical current 2</lang-en></data>");
midmap.set(1036,"<data><source>KanCan Spec Rev 0.0</source><spec-name>Latitude from GPS</spec-name><unit>rad</unit><lang-de>Latitude from GPS</lang-de><lang-en>Latitude from GPS</lang-en></data>");
midmap.set(1037,"<data><source>KanCan Spec Rev 0.0</source><spec-name>Longitude from GPS</spec-name><unit>rad</unit><lang-de>Longitude from GPS</lang-de><lang-en>Longitude from GPS</lang-en></data>");
midmap.set(1038,"<data><source>KanCan Spec Rev 0.0</source><spec-name>Height above WGS84 ellipsoid from GPS</spec-name><lang-de>GPS-Höhe</lang-de><lang-en>Height above WGS84 ellipsoid from GPS</lang-en></data>");
midmap.set(1039,"<data><source>KanCan Spec Rev 0.0</source><spec-name>Ground speed from GPS</spec-name><unit>kts</unit><lang-de>Ground speed from GPS</lang-de><lang-en>Ground speed from GPS</lang-en></data>");
midmap.set(1040,"<data><source>KanCan Spec Rev 0.0</source><spec-name>Tracking direction from GPS</spec-name><unit>rad</unit><lang-de>Tracking direction from GPS</lang-de><lang-en>Tracking direction from GPS</lang-en></data>");
midmap.set(1045,"<data><source>KanCan Spec Rev 0.0</source><spec-name>PDOP from GPS</spec-name><lang-de>PDOP from GPS</lang-de><lang-en>PDOP from GPS</lang-en></data>");
midmap.set(1046,"<data><source>KanCan Spec Rev 0.0</source><spec-name>VDOP from GPS</spec-name><lang-de>VDOP from GPS</lang-de><lang-en>VDOP from GPS</lang-en></data>");
midmap.set(1047,"<data><source>KanCan Spec Rev 0.0</source><spec-name>HDOP from GPS</spec-name><lang-de>HDOP from GPS</lang-de><lang-en>HDOP from GPS</lang-en></data>");
midmap.set(1049,"<data><source>KanCan Spec Rev 0.0</source><spec-name>Latitude from KF</spec-name><unit>rad</unit><lang-de>Latitude from KF</lang-de><lang-en>Latitude from KF</lang-en></data>");
midmap.set(1050,"<data><source>KanCan Spec Rev 0.0</source><spec-name>Longitude from KF</spec-name><unit>rad</unit><lang-de>Longitude from KF</lang-de><lang-en>Longitude from KF</lang-en></data>");
midmap.set(1121,"<data><source>KanCan Spec Rev 0.0</source><spec-name>Magnetic declination</spec-name><unit>rad</unit><lang-de>Magnetic declination</lang-de><lang-en>Magnetic declination</lang-en></data>");
midmap.set(1250,"<data><source>GS-CAN Spec Rev 0.9a</source><spec-name>Outside Relative Air Humidity</spec-name><unit>%</unit><lang-de>Outside Relative Air Humidity</lang-de><lang-en>Outside Relative Air Humidity</lang-en></data>");
midmap.set(1251,"<data><source>GS-CAN Spec Rev 0.9a</source><spec-name>Carbuator Relative Air Humidity</spec-name><unit>%</unit><lang-de>Carbuator Relative Air Humidity</lang-de><lang-en>Carbuator Relative Air Humidity</lang-en></data>");
midmap.set(1500,"<data><source>KanCan Spec Rev 0.0</source><spec-name>CHT + index in register A</spec-name><unit>°C</unit><lang-de>CHT + index in register A</lang-de><lang-en>CHT + index in register A</lang-en></data>");
midmap.set(1501,"<data><source>KanCan Spec Rev 0.0</source><spec-name>EGT + index in register A</spec-name><unit>°C</unit><lang-de>EGT + index in register A</lang-de><lang-en>EGT + index in register A</lang-en></data>");
midmap.set(1502,"<data><source>KanCan Spec Rev 0.0</source><spec-name>Date – in juliand day representation</spec-name><lang-de>Datum</lang-de><lang-en>Date – in juliand day representation</lang-en></data>");
midmap.set(1503,"<data><source>KanCan Spec Rev 0.0</source><spec-name>Time – seconds after UTC midnight</spec-name><unit>UTC</unit><lang-de>Zeit</lang-de><lang-en>Time – seconds after UTC midnight</lang-en></data>");
midmap.set(1513,"<data><source>KanCan Spec Rev 0.0</source><spec-name>Roll gyro bias</spec-name><unit>rad/s</unit><lang-de>Roll gyro bias</lang-de><lang-en>Roll gyro bias</lang-en></data>");
midmap.set(1514,"<data><source>KanCan Spec Rev 0.0</source><spec-name>Pitch gyro bias</spec-name><unit>rad/s</unit><lang-de>Pitch gyro bias</lang-de><lang-en>Pitch gyro bias</lang-en></data>");
midmap.set(1515,"<data><source>KanCan Spec Rev 0.0</source><spec-name>Yaw gyro bias</spec-name><unit>rad/s</unit><lang-de>Yaw gyro bias</lang-de><lang-en>Yaw gyro bias</lang-en></data>");
midmap.set(1516,"<data><source>KanCan Spec Rev 0.0</source><spec-name>Carburetor temperature</spec-name><unit>°C</unit><lang-de>Carburetor temperature</lang-de><lang-en>Carburetor temperature</lang-en></data>");
midmap.set(1517,"<data><source>KanCan Spec Rev 0.0</source><spec-name>User pitch correction</spec-name><unit>rad</unit><lang-de>User pitch correction</lang-de><lang-en>User pitch correction</lang-en></data>");
midmap.set(1519,"<data><source>KanCan Spec Rev 0.0</source><spec-name>Carbon monoxide level</spec-name><lang-de>Carbon monoxide level</lang-de><lang-en>Carbon monoxide level</lang-en></data>");
midmap.set(1521,"<data><source>KanCan Spec Rev 0.0</source><spec-name>Airbox temperature</spec-name><unit>°C</unit><lang-de>Airbox temperature</lang-de><lang-en>Airbox temperature</lang-en></data>");

// Map zum speichern der Daten
var valuemap = new Map();

// Umdrehen von little Endian
function flipHexString(hexValue, hexDigits) {
  var h = hexValue.substr(0, 2);
  for (var i = 0; i < hexDigits; ++i) {
    h += hexValue.substr(2 + (hexDigits - 1 - i) * 2, 2);
  }
  return h;
}

// Umwandeln von Hex in Float für Std-Meldungen
function hexToFloat(hex) {
  var s = hex >> 31 ? -1 : 1;
  var e = (hex >> 23) & 0xFF;
  return s * (hex & 0x7fffff | 0x800000) * 1.0 / Math.pow(2, 23) * Math.pow(2, (e - 127))
}

// Umwandeln JD in Tage
function julianIntToDate(JD){
   var y = 4716;
   var v = 3;
   var j = 1401;
   var u =  5;
   var m =  2;
   var s =  153;
   var n = 12;
   var w =  2;
   var r =  4;
   var B =  274277;
   var p =  1461;
   var C =  -38;
   var f = JD + j + Math.floor((Math.floor((4 * JD + B) / 146097) * 3) / 4) + C;
   var e = r * f + v;
   var g = Math.floor((e % p) / r);
   var h = u * g + w;
   var D = Math.floor((h % s) / u) + 1;
   var M = ((Math.floor(h / s) + m) % n) + 1;
   var Y = Math.floor(e / p) - y + Math.floor((n + m - M) / n) ;
   return(D+'.'+M+'.'+Y);
}

// Verbindungsparaeter Websocket
function connectws() {
    openWSConnection(ws_protocol, ws_hostname, ws_port, ws_endpoint);
}


// Öffnen der Websocket-Verbindung
function openWSConnection(protocol, hostname, port, endpoint) {
	var webSocketURL = null;
    webSocketURL = protocol + "://" + hostname + ":" + port + endpoint;
    console.log("openWSConnection::Connecting to: " + webSocketURL);
    try {
        webSocket = new WebSocket(webSocketURL);
        webSocket.onopen = function(openEvent) {
            console.log("WebSocket OPEN: " + JSON.stringify(openEvent, null, 4));
        };
        webSocket.onclose = function (closeEvent) {
            console.log("WebSocket CLOSE: " + JSON.stringify(closeEvent, null, 4));
			// Deaktivieren des Ladesymbols
			if (document.getElementById("loading")!=null)
			{
				document.getElementById("loading").style.display="none";
			}
        };
        webSocket.onerror = function (errorEvent) {
            console.log("WebSocket ERROR: " + JSON.stringify(errorEvent, null, 4));
			// Deaktivieren des Ladesymbols
			if (document.getElementById("loading")!=null)
			{
				document.getElementById("loading").style.display="block";
			}
        };
			webSocket.onmessage = function (messageEvent) {
					// Anzeige des Ladesymbols
					if (document.getElementById("loading")!=null)
					{
						document.getElementById("loading").style.display="block";
					}
            var wsMsg = messageEvent.data;
            console.log("WebSocket MESSAGE: " + wsMsg); // Ausgabe jeder eingehenden Nachricht auf der Console
            if (wsMsg.indexOf("error") > 0) {
                document.getElementById("incomingMsgOutput").value += "error: " + wsMsg.error + "\r\n";
            } else {
				parser = new DOMParser();
				xmlDoc = parser.parseFromString(wsMsg,"text/xml");
				mid=parseInt(xmlDoc.getElementsByTagName("header")[0].childNodes[0].nodeValue.substring(3,6),16);
				if ((mid>128)&&(mid<1799)) // Verarbeitung von Std-KANARDIA-Meldungen laut Beschreibung zwischen 128 und 1799
				{
					wert=xmlDoc.getElementsByTagName("d4")[0].childNodes[0].nodeValue+xmlDoc.getElementsByTagName("d5")[0].childNodes[0].nodeValue+xmlDoc.getElementsByTagName("d6")[0].childNodes[0].nodeValue+xmlDoc.getElementsByTagName("d7")[0].childNodes[0].nodeValue
					wertdecoded=hexToFloat(flipHexString("0x"+wert, 8)).toFixed(); 	
					// Umrechnen von Sekunden nach Mitternacht beim Wert 1503 und verwenden dieses Wertes
					if (mid==1503)
					{
						wertdecoded=Math.floor(wertdecoded / 3600 )+':'+("00" + Math.floor( (wertdecoded % 3600) / 60 )).slice(-2)+' UTC';
					}
					// Umrechnen in Knoten bei 314-316 und 1039
					if (((mid>313)&&(mid<317))||(mid==1039))
					{
						wertdecoded=wertdecoded*1,94384;
					}
					// Umrechnen in Datum bei 1502
					if (mid==1502)
					{
						wertdecoded=parseInt((flipHexString("0x"+wert, 8)),16);
						wertdecoded=julianIntToDate(wertdecoded);
					}
					saveval="<data><mid>"+mid+"</mid><header>"+xmlDoc.getElementsByTagName("header")[0].childNodes[0].nodeValue+"</header><value>"+wertdecoded+"</value><valueoriginal>0x"+xmlDoc.getElementsByTagName("d0")[0].childNodes[0].nodeValue+xmlDoc.getElementsByTagName("d1")[0].childNodes[0].nodeValue+xmlDoc.getElementsByTagName("d2")[0].childNodes[0].nodeValue+xmlDoc.getElementsByTagName("d3")[0].childNodes[0].nodeValue+xmlDoc.getElementsByTagName("d4")[0].childNodes[0].nodeValue+xmlDoc.getElementsByTagName("d5")[0].childNodes[0].nodeValue+xmlDoc.getElementsByTagName("d6")[0].childNodes[0].nodeValue+xmlDoc.getElementsByTagName("d7")[0].childNodes[0].nodeValue+"</valueoriginal></data>";
					valuemap.set(mid,saveval);
					// Füllen der DIVs auf der Seite mit entsprechenden Daten, wenn diese auf der Ausgabeseite existieren
					xmlDocshow = parser.parseFromString(valuemap.get(mid),"text/xml");
					xmlDocshow2 = parser.parseFromString(midmap.get(mid),"text/xml");
					if (document.getElementById(mid)!=null)
					{
						// Anpassungen am DIV, wenn sinnvoll und nötig
						//document.getElementById(mid).style.display="block";
						document.getElementById(mid).style.opacity=1;
					}
					if (document.getElementById(mid+"d")!=null)
					{
							document.getElementById(mid+"d").innerHTML=xmlDocshow2.getElementsByTagName(language)[0].childNodes[0].nodeValue+mid;
					}
					if (document.getElementById(mid+"v")!=null)
					{
						document.getElementById(mid+"v").innerHTML=xmlDocshow.getElementsByTagName("value")[0].childNodes[0].nodeValue +" "+ xmlDocshow2.getElementsByTagName("unit")[0].childNodes[0].nodeValue;
					}
					//Dynamisches füllen der JS-Variablen zur Verwendug in Gauges
					varname="gauge"+mid;
					if(window[varname])
					{
						window[varname].set(wertdecoded);
					}
				}
				else
				{
					saveval="<data><mid>"+mid+"</mid><header>"+xmlDoc.getElementsByTagName("header")[0].childNodes[0].nodeValue+"</header><value>SKIPPED</value><valueoriginal>0x"+xmlDoc.getElementsByTagName("d0")[0].childNodes[0].nodeValue+xmlDoc.getElementsByTagName("d1")[0].childNodes[0].nodeValue+xmlDoc.getElementsByTagName("d2")[0].childNodes[0].nodeValue+xmlDoc.getElementsByTagName("d3")[0].childNodes[0].nodeValue+xmlDoc.getElementsByTagName("d4")[0].childNodes[0].nodeValue+xmlDoc.getElementsByTagName("d5")[0].childNodes[0].nodeValue+xmlDoc.getElementsByTagName("d6")[0].childNodes[0].nodeValue+xmlDoc.getElementsByTagName("d7")[0].childNodes[0].nodeValue+"</valueoriginal></data>";
					valuemap.set(mid,saveval);
				}
            }
        };
    } catch (exception) {
        console.error(exception);
    }
}
