/** @class Array **/
var ForteObject = function () {
    this.result = false;
}

module.exports = ForteObject;

var forte = require('./core');
var Forte = new forte();

ForteObject.prototype.item = function (values) {
    var keys = Object.keys(values);
    if(values instanceof Object){
        var key = keys[keys.length * Math.random() << 0];
        this.result = this.item(values[key]);
    }else{
        this.result = values;
    }
    return this.result;
}