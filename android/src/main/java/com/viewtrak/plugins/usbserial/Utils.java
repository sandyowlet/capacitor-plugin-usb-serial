package com.viewtrak.plugins.usbserial;

import android.content.Context;
import android.hardware.usb.UsbDevice;
import android.hardware.usb.UsbManager;
import android.os.Build;
import android.util.Log;

import com.getcapacitor.JSObject;
import com.hoho.android.usbserial.driver.UsbSerialDriver;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.List;

public class Utils {

    static class DeviceItem {
        UsbDevice device;
        int port;
        UsbSerialDriver driver;

        DeviceItem(UsbDevice device, int port, UsbSerialDriver driver) {
            this.device = device;
            this.port = port;
            this.driver = driver;
        }
    }

    public static JSONArray deviceListToJsonConvert(List<DeviceItem> list, UsbManager usbManager) {
        JSONArray jsonArray = new JSONArray();

        for (int i = 0; i < list.size(); i++) {
            JSObject deviceObj = createDeviceInfoObject(list.get(i).device, usbManager);
            jsonArray.put(deviceObj);
        }
        return jsonArray;
    }

    public static JSObject createDeviceInfoObject(UsbDevice device, UsbManager usbManager) {
        JSObject deviceObj = new JSObject();

        deviceObj.put("deviceId", device.getDeviceId());
        deviceObj.put("vendorId", device.getVendorId());
        deviceObj.put("productId", device.getProductId());
        deviceObj.put("deviceName", device.getDeviceName());

        // Only access privileged properties if we have permission
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
            try {
                if (usbManager.hasPermission(device)) {
                    deviceObj.put("manufacturerName", device.getManufacturerName());
                    deviceObj.put("serialNumber", device.getSerialNumber());
                } else {
                    deviceObj.put("manufacturerName", null);
                    deviceObj.put("serialNumber", null);
                }
            } catch (SecurityException e) {
                Log.w("UsbSerial",
                        "Cannot access device properties without permission for device " + device.getDeviceId(), e);
                deviceObj.put("manufacturerName", null);
                deviceObj.put("serialNumber", null);
            }
        }

        return deviceObj;
    }

}
