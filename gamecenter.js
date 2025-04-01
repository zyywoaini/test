    function callGetUserInfo() {
            var clazz = "com.hihonor.gamecenter.bu_h5.manager.JSMethodImp";
            var operationName = "getUserInfo";
            var params = JSON.stringify({ key: "key1" });
            var requestId = "12345";
            var callback = "handleScreenShotCallback";

            if (window.Native && typeof window.Native.nativeMethod === "function") {
                window.Native.nativeMethod(clazz, operationName, params, requestId, callback);
            } else {
                alert("Native interface is not available.");
            }
        }
        function handleScreenShotCallback(callbackId, eventType, data, d, e) {
            alert("Callback ID: " + JSON.stringify(callbackId) + "\nEvent Type: " + eventType + "\nData: " + JSON.stringify(data));
        }

        function callRegisterScreenShotListener() {
            var eventTypes = ["onScreenShot"];
            var callbackInfo = {
                callbackMethod: "handleScreenShotCallback",
                callbackId: "12345"
            };
            var params = {
                eventTypes: eventTypes,
                callbackInfo: callbackInfo
            };

            if (window.Native && typeof window.Native.nativeMethod === "function") {
                window.Native.nativeMethod("com.hihonor.hm.h5.container.js.method.OtherMethods", "registerListener", JSON.stringify(params), "12345", "handleScreenShotCallback");
            } else {
                alert("Native interface is not available.");
            }
        }
