import { WebPlugin } from '@capacitor/core';
export class UsbSerialWeb extends WebPlugin {
    connectedDevices() {
        throw new Error('Method not implemented.');
    }
    openSerial(options) {
        throw new Error('Method not implemented: ' + JSON.stringify(options));
    }
    closeSerial() {
        throw new Error('Method not implemented.');
    }
    readSerial() {
        throw new Error('Method not implemented.');
    }
    writeSerial(options) {
        throw new Error('Method not implemented: ' + JSON.stringify(options));
    }
    getDataEncoding() {
        throw new Error('Method not implemented.');
    }
    addListener(eventName, listenerFunc) {
        listenerFunc({});
        return Promise.reject(`Method '${eventName}' not implemented.`);
    }
}
//# sourceMappingURL=web.js.map