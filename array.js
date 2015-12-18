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
        result = this.item(result, recursive);
    }
    return result;
}

ForteArray.prototype.index = function (values, recursive) {
    recursive = recursive || false;
    var index = Math.floor(Math.random() * values.length),
        result = [];
    result.push(index);
    if(values[index] instanceof Array && recursive){
        result.push(this.index(values[index], recursive));
    }
    return result;
}