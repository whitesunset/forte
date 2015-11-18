/** @class Color **/
var ForteColor = function () {
    this.result = false;
}

module.exports = ForteColor;

var number = require('./number');
var Number = new number();

/**
 * Hex - roll random hex color with number sign # (optional)
 * @param sign
 * @returns {boolean|string|*|Array}
 */
ForteColor.prototype.hex = function (sign) {
    var color = '';
    if(sign === true){
        color += '#';
    }
    for(var i = 0; i < 3; i++){
        color += '' + Number.hex([0, 255]);
    }
    this.result = color;
    return this.result;
}
/**
 * RGB(A) - roll random RGB with alpha channel (optional)
 * @param alpha
 * @returns {boolean|string|*|Array}
 */
ForteColor.prototype.rgb = function (alpha) {
    var color = [];
    for(var i = 0; i < 3; i++){
        color.push(Number.decimal(255));
    }
    if(alpha === true){
        color.push(Number.float(1, 2));
    }
    this.result = color;
    return this.result;
}