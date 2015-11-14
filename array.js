var core = require('./core');
//var Core = new core();

/** @class Array **/
var RandomArray = function () {
    this.result;
}

module.exports = RandomArray;

RandomArray.prototype.item = function (values) {
    if(values instanceof Array){
        this.result = values[Math.floor(Math.random() * values.length)];
    }else{
        var keys = Object.keys(values);
        var key = keys[Math.floor(Math.random() * keys.length)];
        this.result = this.item(values[key]);
    }
    return this.result;
}
