# usb-serial-plugin

This plugin can be used for reading data from other device over the usb channel

## Install

```bash
npm install git+https://github.com/sandyowlet/capacitor-plugin-usb-serial.git
npx cap sync
```

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
connectedDevices() => Promise<UsbSerialDevice[]>
```

Get a list of currently connected USB serial devices.

**Returns:** <code>Promise&lt;UsbSerialDevice[]&gt;</code>

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
