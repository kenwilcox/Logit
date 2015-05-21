/*global console, document, alert*/
var app = (function () {
    'use strict';

    return {
        logit: function (msg, logType) {
            //debugger;
            msg = (typeof msg !== "string") ? JSON.stringify(msg) : msg;
            logType = (typeof logType !== "object") ? {} : logType;
            logType.object = (typeof logType.object !== "object") ? "" : " " + JSON.stringify(logType.object);
            logType.console = logType.console || true;
            logType.document = logType.document || false;
            logType.alert = logType.alert || false;
            if (logType.console) {
                console.log(msg + logType.object);
            }
            if (logType.document) {
                document.writeln(msg + logType.object + "<br>");
            }
            if (logType.alert) {
                alert(msg + logType.object);
            }
        }
    };
})();

