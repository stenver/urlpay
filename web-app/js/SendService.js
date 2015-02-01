app.service('SendService', function ($resource) {
    var TransferResource = $resource('/transfer');

    this.transfer = function (data, successFn, errorFn) {
        return TransferResource.save(data, successFn, errorFn);
    };
});