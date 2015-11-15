/** @class Array **/
var ForteArray = function () {
    this.result = false;
}

module.exports = ForteArray;

var forte = require('./core');
var Forte = new forte();

ForteArray.prototype.item = function (values) {
    if(values instanceof Array){
        this.result = values[Math.floor(Math.random() * values.length)];
    }else{
        var keys = Object.keys(values);
        var key = keys[Math.floor(Math.random() * keys.length)];
        this.result = this.item(values[key]);
    }
    return this.result;
}