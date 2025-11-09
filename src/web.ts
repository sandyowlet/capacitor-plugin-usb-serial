import { WebPlugin } from '@capacitor/core';

import type { UsbSerialDevice, UsbSerialOptions, UsbSerialPlugin } from './definitions';

export class UsbSerialWeb extends WebPlugin implements UsbSerialPlugin {
  connectedDevices(): Promise<{ devices: UsbSerialDevice[] }> {
    throw new Error('Method not implemented.');
  }
  openSerial(options: UsbSerialOptions): Promise<void> {
    throw new Error('Method not implemented: ' + JSON.stringify(options));
  }
  closeSerial(): Promise<void> {
    throw new Error('Method not implemented.');
  }
  readSerial(): Promise<{ data: string }> {
    throw new Error('Method not implemented.');
  }
  writeSerial(options: { data: string }): Promise<void> {
    throw new Error('Method not implemented: ' + JSON.stringify(options));
  }
  getDataEncoding(): Promise<{ encoding: 'utf8' | 'base64' }> {
    throw new Error('Method not implemented.');
  }
  addListener(
    eventName: 'log' | 'connected' | 'attached' | 'detached' | 'data' | 'error',
    listenerFunc: (data: any) => void,
  ) {
    listenerFunc({});
    return Promise.reject(`Method '${eventName}' not implemented.`) as any;
  }
}
