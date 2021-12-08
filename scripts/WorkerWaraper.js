function GetDataFromObject(object) {
    return JSON.parse(JSON.stringify(object))
}

function CopyDataToObject(source, dist) {
    for (var attr in source) {
        if (source.hasOwnProperty(attr))
            dist[attr] = source[attr];
    }
}

function CopyAndGetDir(data) {
    let controllerData = data.controller;
    let fullController = eval(data.controller.text);

    CopyDataToObject(controllerData, fullController);
    let result = {
        complete: true,
        controller: GetDataFromObject(fullController),
        dir: fullController.GetDirection(data.info)
    };
    return result;
}

function CopyAndInit(data) {
    let controllerData = data.controller;
    let fullController = eval(data.controller.text);

    CopyDataToObject(controllerData, fullController);

    fullController.Init(data.info);

    return {
        complete: true,
        controller: GetDataFromObject(fullController)
    };
}

function MakeWorker(workerCode, onmessageDelegate) {
    window.URL = window.URL || window.webkitURL;
    let blob;
    try {
        blob = new Blob([workerCode], {
            type: 'application/javascript'
        });
    } catch (e) {
        // Backwards-compatibility
        window.BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder;
        blob = new BlobBuilder();
        blob.append(workerCode);
        blob = blob.getBlob();
    }
    let worker = new Worker(URL.createObjectURL(blob));
    if (onmessageDelegate !== null && onmessageDelegate !== undefined)
        worker.onmessage = onmessageDelegate;

    return worker;
}

function MakeWorkerForInit(controller, mapInfo, timeout, timeOutDelegate) {
    let result = {
        complete: false,
        controller: null
    };

    let worker = MakeWorker(GetDataFromObject.toString() + '\n' +
        CopyDataToObject.toString() + '\n' +
        CopyAndInit.toString() + '\n' +
        "self.onmessage=function(e){CopyAndGetDir(e.data);}",
        function(e) {
            result.complete = e.data.complete;
            result.controller = e.data.controller;
        });

    worker.postMessage({
        controller: GetDataFromObject(controller),
        mapInfo: GetDataFromObject(mapInfo)
    });

    if (timeOutDelegate !== null && timeOutDelegate !== undefined) {
        setTimeout(timeOutDelegate, timeout, worker, result);
    }

    return worker;
}

function MakeWorkerForGetDirection(controller, dataInfo, timeout, timeOutDelegate) {
    let result = {
        complete: false,
        controller: null,
        dir: -1
    };

    let worker = MakeWorker(GetDataFromObject.toString() + '\n' +
        CopyDataToObject.toString() + '\n' +
        CopyAndGetDir.toString() + '\n' +
        "self.onmessage=function(e){postMessage(CopyAndGetDir(e.data));}",
        function(e) {
            result.complete = e.data.complete;
            result.controller = e.data.controller;
            result.dir = e.data.dir;
        });

    worker.postMessage({
        controller: GetDataFromObject(controller),
        info: GetDataFromObject(dataInfo)
    });

    if (timeOutDelegate !== null && timeOutDelegate !== undefined) {
        setTimeout(timeOutDelegate, timeout, worker, result);
    }

    return worker;
}