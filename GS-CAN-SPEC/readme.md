
# Specification GS-CAN
When sending data on a shared bus Sender-ID and Message-ID has to be conflict-free to Kanardia-Devices. Conflict-freeness can be reached by using an unique sender-id and using own Message-IDs. When using Kanardia-Message-IDs, to be processed by any device, you have to be sure, that you don't have any Kanardia-Devices which sends Messages whith that Message-ID.

## Sender-ID for GS-CAN-MULTI
When sending data GS-CAN-MULTI will need a sender ID out of the range of Kanardia-Devices (lower than 129).
In coordination whith Kanardia GS-CAN-MULTI will use Sender-ID 127 (0x7F). You can only use one GS-CAN-MULTI (Software) on the bus at the same time, but you can use multiple GS-CAN-MULTI-Hardware on the bus (with GS-CAN-2WIFI-Software).

## Specific Message-IDs
In coordination whith Kanardia GS-CAN-MULTI will use the unused range of Message-IDs between 1250 and 1270, both inclusive.
At the moment the used IDs are:
Description | Id| Range |Unit
-------- | -------- | --------| --------
Outside Relative Air Humidity  | 1250   | 0-100 | %
Carbuator Relative Air Humidity   | 1251 | 0-100 | %

Messages will follow the Kanardia-Standard-Messages, wich follows the CANAerospace proposal.
That means, that the payload is separated in two registers. Register B (the second register) will be used with one Float32-value. Register A will not be used at the moment.