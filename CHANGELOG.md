#### 1.0.0 (2025-11-08)

##### Build System / Dependencies

- Rename package to capacitor-serial-plugin and update version to 1.0.0 in package.json ([9eca1108](https://github.com/sandyowlet/capacitor-plugin-usb-serial/commit/9eca1108420a87e8ffa07e45c23ad9c9cb5ddb18))

##### New Features

- Enhance UsbSerial with data buffering and throttling capabilities for improved performance ([2849fc74](https://github.com/sandyowlet/capacitor-plugin-usb-serial/commit/2849fc74c1b83f6fd27d45cdfcb97876c4083041))
- Introduce UsbSerialConfig to support base64 encoding option for serial data ([19164117](https://github.com/sandyowlet/capacitor-plugin-usb-serial/commit/1916411728306ffa1008d3e99aa40e11b278d384))
- Add removeAllListeners method definition to UsbSerialPlugin. ([d6bfe390](https://github.com/sandyowlet/capacitor-plugin-usb-serial/commit/d6bfe39057d518c1528b32edb77292554c3246d8))

##### Bug Fixes

- Fixed the logic in openSerial method that attempted to connect to the device before requesting permission; now it requests permission first and then attempts to connect ([83a3c2f1](https://github.com/sandyowlet/capacitor-plugin-usb-serial/commit/83a3c2f16d07d9a5de0b2bdaf2ea41448e6f141e))
- fixed the return type of the connectedDevices method in the definitions.ts file ([98c7ae5a](https://github.com/sandyowlet/capacitor-plugin-usb-serial/commit/98c7ae5a2e7298346f2ded07a0694aa16b6ee889))
- Make UsbSerialOptions.portNum optional ([6011ff0b](https://github.com/sandyowlet/capacitor-plugin-usb-serial/commit/6011ff0be7fdbb35e6b50d4671fb24d4f893b7c4))
- trigger callback when new data is received, not waiting for line breaks ([5ed4820c](https://github.com/sandyowlet/capacitor-plugin-usb-serial/commit/5ed4820c0fda43eedd1e9750ec7808c05968f912))

##### Refactors

- Make readSerial/writeSerial/on("data") uniformly use utf-8 to encode serial messages ([eb724689](https://github.com/sandyowlet/capacitor-plugin-usb-serial/commit/eb724689242d436e54e9c86d1bd7f0bb55eb6310))
- Change UsbSerialOptions.parity from number to string literals ([46ece960](https://github.com/sandyowlet/capacitor-plugin-usb-serial/commit/46ece960551b9b1093739bdaa13abfbcb90b9035))
- Refactor USB device handling to include additional device information. ([5e7b75f0](https://github.com/sandyowlet/capacitor-plugin-usb-serial/commit/5e7b75f07432705fe85d08771d30a64d8be971b6))
