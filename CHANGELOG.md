#### 1.1.3 (2025-12-13)

##### Bug Fixes

*  Add package name to PendingIntent for USB permission intent to ensure compatibility with Android S+ ([862e0f75](https://github.com/sandyowlet/capacitor-plugin-usb-serial/commit/862e0f75ef87ffd4be7466917d3af948aee6da8f))

#### 1.1.2 (2025-12-09)

##### Documentation Changes

*  Update README.md to include Android setup instructions ([6c6f8627](https://github.com/sandyowlet/capacitor-plugin-usb-serial/commit/6c6f862713438e4f34c3689c20131087a6dce9da))

##### Bug Fixes

*  Update PendingIntent creation to comply with Android S+ requirements for USB permission handling ([e19a84ba](https://github.com/sandyowlet/capacitor-plugin-usb-serial/commit/e19a84ba878b325eb6c8ea4356d1f6f9ac024ab0))

#### 1.1.1 (2025-11-10)

##### Bug Fixes

*  Fix the issue that openSerial method resolves the promise before the permission is granted. ([52d48d86](https://github.com/sandyowlet/capacitor-plugin-usb-serial/commit/52d48d86753c81e6362b05d4c5bcd0c129ae1107))
*  Fix the issue that updateReceivedData method doesn't work correctly. ([19538a11](https://github.com/sandyowlet/capacitor-plugin-usb-serial/commit/19538a115b6bb54e4d1574f1a8d09b12ed81c50a))

##### Refactors

*  Replace Error with Exception to let the caller handle the exception instead of crashing the app. ([2af13675](https://github.com/sandyowlet/capacitor-plugin-usb-serial/commit/2af13675f08455157e43391914450b3325ef20be))

#### 1.1.0 (2025-11-09)

##### New Features

- Add getDataEncoding method to UsbSerialPlugin for retrieving current data encoding configuration ([8d7c6131](https://github.com/sandyowlet/capacitor-plugin-usb-serial/commit/8d7c61312805432acf4d279aac408423dc72722f))

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
