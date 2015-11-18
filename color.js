/** @class Color **/
var ForteColor = function () {
    this.result = false;
}

module.exports = ForteColor;

var forte = require('./core');
var Forte = new forte();

ForteColor.prototype.hex = function () {
    var r = '' + Forte.number.hex([0, 255]),
        g = '' + Forte.number.hex([0, 255]),
        b = '' + Forte.number.hex([0, 255]);
    this.result = r + g+ b;
    return this.result;
}