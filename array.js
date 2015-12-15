/** @class Array **/
var ForteArray = function () {
    this.result = false;
}

module.exports = ForteArray;

var forte = require('./core');
var Forte = new forte();

ForteArray.prototype.item = function (values, recursive) {
    recursive = recursive || false;
    var result = values[Math.floor(Math.random() * values.length)];
    if(result instanceof Array && recursive){
        result = this.item(result);
    }
    return result;
}