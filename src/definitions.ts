import { PluginListenerHandle } from '@capacitor/core';

export interface UsbSerialOptions {
  deviceId: number;
  portNum?: number;
  baudRate?: number;
  dataBits?: number;
  stopBits?: number;
  parity?: 'none' | 'odd' | 'even' | 'mark' | 'space';
  dtr?: boolean;
  rts?: boolean;
}

export interface UsbSerialDevice {
  deviceId: number;
  vendorId: number;
  productId: number;
  deviceName: string;
  manufacturerName?: string;
  serialNumber?: string;
}

export interface UsbSerialPlugin {
  /**
   * Get a list of currently connected USB serial devices.
   *
   * @returns Promise resolving to an object containing the connected devices
   * @returns.devices - An array of connected USB serial devices
   */
  connectedDevices(): Promise<{ devices: UsbSerialDevice[] }>;
  /**
   * Open a serial connection to a USB device.
   *
   * @param options - Serial connection options
   * @returns Promise that resolves when the connection is established
   */
  openSerial(options: UsbSerialOptions): Promise<void>;
  /**
   * Close the current serial connection.
   *
   * @returns Promise that resolves when the connection is closed
   */
  closeSerial(): Promise<void>;
  /**
   * Reads data from the serial port.
   *
   * @returns Promise resolving to an object containing the received data
   * @returns.data - The received data as a UTF-8 decoded string
   */
  readSerial(): Promise<{ data: string }>;
  /**
   * Writes data to the serial port.
   *
   * @param options - The write options
   * @param options.data - The data to write as a UTF-8 encoded string that will be converted to bytes
   */
  writeSerial(options: { data: string }): Promise<void>;

  /**
   * Listen for log messages from the plugin.
   *
   * @param eventName - Must be 'log'
   * @param listenerFunc - Callback function called when log messages are received
   * @param listenerFunc.data - Object containing the log data
   * @param listenerFunc.data.text - The log message text
   * @param listenerFunc.data.tag - The log tag/category
   *
   * @returns Promise resolving to a listener handle for removing the listener
   */
  addListener(
    eventName: 'log',
    listenerFunc: (data: { text: string; tag: string }) => void,
  ): Promise<PluginListenerHandle> & PluginListenerHandle;
  /**
   * Listen for device connection events.
   *
   * @param eventName - Must be 'connected'
   * @param listenerFunc - Callback function called when a device connects
   * @param listenerFunc.data - The connected device information
   *
   * @returns Promise resolving to a listener handle for removing the listener
   */
  addListener(
    eventName: 'connected',
    listenerFunc: (data: UsbSerialDevice) => void,
  ): Promise<PluginListenerHandle> & PluginListenerHandle;
  /**
   * Listen for device attachment events.
   *
   * @param eventName - Must be 'attached'
   * @param listenerFunc - Callback function called when a device is attached
   * @param listenerFunc.data - The attached device information
   *
   * @returns Promise resolving to a listener handle for removing the listener
   */
  addListener(
    eventName: 'attached',
    listenerFunc: (data: UsbSerialDevice) => void,
  ): Promise<PluginListenerHandle> & PluginListenerHandle;
  /**
   * Listen for device detachment events.
   *
   * @param eventName - Must be 'detached'
   * @param listenerFunc - Callback function called when a device is detached
   * @param listenerFunc.data - The detached device information
   *
   * @returns Promise resolving to a listener handle for removing the listener
   */
  addListener(
    eventName: 'detached',
    listenerFunc: (data: UsbSerialDevice) => void,
  ): Promise<PluginListenerHandle> & PluginListenerHandle;

  /**
   * Listen for incoming serial data.
   *
   * @param eventName - Must be 'data'
   * @param listenerFunc - Callback function called when data is received
   * @param listenerFunc.data - Object containing the received data
   * @param listenerFunc.data.data - The received data as a UTF-8 decoded string
   *
   * @returns Promise resolving to a listener handle for removing the listener
   */
  addListener(
    eventName: 'data',
    listenerFunc: (data: { data: string }) => void,
  ): Promise<PluginListenerHandle> & PluginListenerHandle;
  /**
   * Listen for error events from the serial communication.
   *
   * @param eventName - Must be 'error'
   * @param listenerFunc - Callback function called when errors occur
   * @param listenerFunc.data - Object containing the error information
   * @param listenerFunc.data.error - The error message
   *
   * @returns Promise resolving to a listener handle for removing the listener
   */
  addListener(
    eventName: 'error',
    listenerFunc: (data: { error: string }) => void,
  ): Promise<PluginListenerHandle> & PluginListenerHandle;

  /**
   * Remove all listeners for all events.
   *
   * @returns Promise that resolves when all listeners are removed
   */
  removeAllListeners(): Promise<void>;
}
