# usb-serial-plugin

This plugin can be used for reading data from other device over the usb channel

> This project is forked from [capacitor-plugin-usb-serial](https://github.com/CoooWeee/capacitor-plugin-usb-serial.git)

## Install

```bash
npm install capacitor-serial-plugin
npx cap sync
```

## Configuration

<docgen-config>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

| Prop                 | Type                            | Description                                                                                                                                                                                                       | Default             | Since |
| -------------------- | ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- | ----- |
| **`dataEncoding`**   | <code>'utf8' \| 'base64'</code> | Encoding format for serial data. - 'utf8': Return data as UTF-8 decoded string (default) - 'base64': Return data as base64 encoded string                                                                         | <code>'utf8'</code> | 1.0.0 |
| **`dataThrottleMs`** | <code>number</code>             | Data throttle interval in milliseconds for aggregating received data. Multiple data packets received within this interval will be batched together. Helps improve performance when receiving high-frequency data. | <code>50</code>     | 1.0.0 |
| **`dataBufferSize`** | <code>number</code>             | Maximum buffer size in bytes before flushing data. When the buffer reaches this size, data is sent immediately without waiting for throttle interval.                                                             | <code>4096</code>   | 1.0.0 |

### Examples

In `capacitor.config.json`:

```json
{
  "plugins": {
    "UsbSerial": {
      "dataEncoding": "base64",
      "dataThrottleMs": 100,
      "dataBufferSize": 8192
    }
  }
}
```

In `capacitor.config.ts`:

```ts
/// <reference types="capacitor-serial-plugin" />

import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  plugins: {
    UsbSerial: {
      dataEncoding: "base64",
      dataThrottleMs: 100,
      dataBufferSize: 8192,
    },
  },
};

export default config;
```

</docgen-config>

## API

<docgen-index>

* [`connectedDevices()`](#connecteddevices)
* [`openSerial(...)`](#openserial)
* [`closeSerial()`](#closeserial)
* [`readSerial()`](#readserial)
* [`writeSerial(...)`](#writeserial)
* [`addListener('log', ...)`](#addlistenerlog-)
* [`addListener('connected', ...)`](#addlistenerconnected-)
* [`addListener('attached', ...)`](#addlistenerattached-)
* [`addListener('detached', ...)`](#addlistenerdetached-)
* [`addListener('data', ...)`](#addlistenerdata-)
* [`addListener('error', ...)`](#addlistenererror-)
* [`removeAllListeners()`](#removealllisteners)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### connectedDevices()

```typescript
connectedDevices() => Promise<{ devices: UsbSerialDevice[]; }>
```

Get a list of currently connected USB serial devices.

**Returns:** <code>Promise&lt;{ devices: UsbSerialDevice[]; }&gt;</code>

--------------------


### openSerial(...)

```typescript
openSerial(options: UsbSerialOptions) => Promise<void>
```

Open a serial connection to a USB device.

| Param         | Type                                                          | Description                 |
| ------------- | ------------------------------------------------------------- | --------------------------- |
| **`options`** | <code><a href="#usbserialoptions">UsbSerialOptions</a></code> | - Serial connection options |

--------------------


### closeSerial()

```typescript
closeSerial() => Promise<void>
```

Close the current serial connection.

--------------------


### readSerial()

```typescript
readSerial() => Promise<{ data: string; }>
```

Reads data from the serial port.

**Returns:** <code>Promise&lt;{ data: string; }&gt;</code>

--------------------


### writeSerial(...)

```typescript
writeSerial(options: { data: string; }) => Promise<void>
```

Writes data to the serial port.

| Param         | Type                           | Description         |
| ------------- | ------------------------------ | ------------------- |
| **`options`** | <code>{ data: string; }</code> | - The write options |

--------------------


### addListener('log', ...)

```typescript
addListener(eventName: 'log', listenerFunc: (data: { text: string; tag: string; }) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

Listen for log messages from the plugin.

| Param              | Type                                                           | Description                                               |
| ------------------ | -------------------------------------------------------------- | --------------------------------------------------------- |
| **`eventName`**    | <code>'log'</code>                                             | - Must be 'log'                                           |
| **`listenerFunc`** | <code>(data: { text: string; tag: string; }) =&gt; void</code> | - Callback function called when log messages are received |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

--------------------


### addListener('connected', ...)

```typescript
addListener(eventName: 'connected', listenerFunc: (data: UsbSerialDevice) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

Listen for device connection events.

| Param              | Type                                                                           | Description                                       |
| ------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------- |
| **`eventName`**    | <code>'connected'</code>                                                       | - Must be 'connected'                             |
| **`listenerFunc`** | <code>(data: <a href="#usbserialdevice">UsbSerialDevice</a>) =&gt; void</code> | - Callback function called when a device connects |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

--------------------


### addListener('attached', ...)

```typescript
addListener(eventName: 'attached', listenerFunc: (data: UsbSerialDevice) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

Listen for device attachment events.

| Param              | Type                                                                           | Description                                          |
| ------------------ | ------------------------------------------------------------------------------ | ---------------------------------------------------- |
| **`eventName`**    | <code>'attached'</code>                                                        | - Must be 'attached'                                 |
| **`listenerFunc`** | <code>(data: <a href="#usbserialdevice">UsbSerialDevice</a>) =&gt; void</code> | - Callback function called when a device is attached |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

--------------------


### addListener('detached', ...)

```typescript
addListener(eventName: 'detached', listenerFunc: (data: UsbSerialDevice) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

Listen for device detachment events.

| Param              | Type                                                                           | Description                                          |
| ------------------ | ------------------------------------------------------------------------------ | ---------------------------------------------------- |
| **`eventName`**    | <code>'detached'</code>                                                        | - Must be 'detached'                                 |
| **`listenerFunc`** | <code>(data: <a href="#usbserialdevice">UsbSerialDevice</a>) =&gt; void</code> | - Callback function called when a device is detached |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

--------------------


### addListener('data', ...)

```typescript
addListener(eventName: 'data', listenerFunc: (data: { data: string; }) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

Listen for incoming serial data.

| Param              | Type                                              | Description                                      |
| ------------------ | ------------------------------------------------- | ------------------------------------------------ |
| **`eventName`**    | <code>'data'</code>                               | - Must be 'data'                                 |
| **`listenerFunc`** | <code>(data: { data: string; }) =&gt; void</code> | - Callback function called when data is received |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

--------------------


### addListener('error', ...)

```typescript
addListener(eventName: 'error', listenerFunc: (data: { error: string; }) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

Listen for error events from the serial communication.

| Param              | Type                                               | Description                                  |
| ------------------ | -------------------------------------------------- | -------------------------------------------- |
| **`eventName`**    | <code>'error'</code>                               | - Must be 'error'                            |
| **`listenerFunc`** | <code>(data: { error: string; }) =&gt; void</code> | - Callback function called when errors occur |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

--------------------


### removeAllListeners()

```typescript
removeAllListeners() => Promise<void>
```

Remove all listeners for all events.

--------------------


### Interfaces


#### UsbSerialDevice

| Prop                   | Type                |
| ---------------------- | ------------------- |
| **`deviceId`**         | <code>number</code> |
| **`vendorId`**         | <code>number</code> |
| **`productId`**        | <code>number</code> |
| **`deviceName`**       | <code>string</code> |
| **`manufacturerName`** | <code>string</code> |
| **`serialNumber`**     | <code>string</code> |


#### UsbSerialOptions

| Prop           | Type                                                        |
| -------------- | ----------------------------------------------------------- |
| **`deviceId`** | <code>number</code>                                         |
| **`portNum`**  | <code>number</code>                                         |
| **`baudRate`** | <code>number</code>                                         |
| **`dataBits`** | <code>number</code>                                         |
| **`stopBits`** | <code>number</code>                                         |
| **`parity`**   | <code>'none' \| 'odd' \| 'even' \| 'mark' \| 'space'</code> |
| **`dtr`**      | <code>boolean</code>                                        |
| **`rts`**      | <code>boolean</code>                                        |


#### PluginListenerHandle

| Prop         | Type                                      |
| ------------ | ----------------------------------------- |
| **`remove`** | <code>() =&gt; Promise&lt;void&gt;</code> |

</docgen-api>
