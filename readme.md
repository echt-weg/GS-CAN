# GS-CAN
GS-CAN is a simple and basic implementation for adding features to a CANaerospace-bus in coexistence with [Kanardia-Devices](https://www.kanardia.eu) on the bus.
GS-CAN is still under development and will offer different features in 3 Sub-Projects
- GS-CAN-2WIFI: Hardware + software for sending received canbus-frames via websocket
- GS-CAN-MULTI: Hardware + software for sending data, based on analog-measurements + I2S-data, to the bus
- GS-CAN-VIZ: Web-based visualization for (via GS-CAN-2WIFI) received data (from Kanardia-Devices and from GS-CAN-MULTI)
- GS-CAN-SPEC: Specification for non-conflicting sending data to the bus

The Hardware uses ordinary and cheap components for easy building devices on your own.

# Demonstration
[![Test](https://www.youtube.com/watch?v=mjUq1N3KQ6M "Test")

# Warning
When using GS-CAN (on a shared bus) you can produce unexpected erros. A missworking device (in Software or Hardware) can damage devices as well as showing wrong data. GS-CAN will never be certified and is only allowed to use on your own risk on your own responsibility. Please take notice of the applicable regulations.

# Development State
Sub-Project | Software-State | Hardware-State| Documentation
-------- | -------- | --------| --------
GS-CAN-2WIFI   | Beta / Working   | Beta / Working | not yet
GS-CAN-MULTI   | Early Alpha / Not Working | Alpha / Unknown | not yet
GS-CAN-WIZ   | Beta / Working   | - | not yet
GS-CAN-SPEC   | -  | - | not yet


## Hardware
The hardware is based on popular dev-boards. In common all you need for the GS-CAN-2WIFI as well as for the GS-CAN-MULTI is a 2x19pin ESP32-Devoard like a ESP32 NodeMCU-32S and a CAN-Transceiver with a SN65HVD230-Chip (I'm using CJMCU-230-boards). Caution: There are a lot of "Fake-CAN-Transceiver" which will receive data but aren't able to send! Additional to these components you only need some wires, resistors and perhaps a DC-DC-Stepdown like a LM2596-board. The total-costs will be about 8-25 EUR. The layout is simple and you can produce a perfboard on your own. I will publish PCB-Layouts later.
If you are interested in a pcb you can also contact me. I have some testing-pcbs in spare. The GS-CAN-MULTI-Hardware can also run the GS-CAN-2WIFI-Code.

## 1st Steps
Get some ESP32s-boards, CAN-Transceiver, wire them together and start playing with the code!

## Built With / 3rd Party Tools, Libs and Docs
* [Arduino](https://www.arduino.cc) - Arduino-Studio
* [gauge.js](https://bernii.github.io/gauge.js/) - Gauge-Visualization in WebGUI
* [ESP32-CAN Driver](https://github.com/ThomasBarth/ESP32-CAN-Driver) - ESP32-CAN Driver
* [KanCan](https://www.kanardia.eu/wp-content/uploads/2020/03/KanCanBus.pdf) - Kanardia Can Bus Specification

## Authors
* **Gunnar Schröder** - *Initial work*

## License
This project is licensed under the MIT License