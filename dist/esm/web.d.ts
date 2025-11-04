import { WebPlugin } from '@capacitor/core';
import type { UsbSerialDevice, UsbSerialOptions, UsbSerialPlugin } from './definitions';
export declare class UsbSerialWeb extends WebPlugin implements UsbSerialPlugin {
    connectedDevices(): Promise<UsbSerialDevice[]>;
    openSerial(options: UsbSerialOptions): Promise<void>;
    closeSerial(): Promise<void>;
    readSerial(): Promise<{
        data: string;
    }>;
    writeSerial(options: {
        data: string;
    }): Promise<void>;
    addListener(eventName: 'log' | 'connected' | 'attached' | 'detached' | 'data' | 'error', listenerFunc: (data: any) => void): any;
}
