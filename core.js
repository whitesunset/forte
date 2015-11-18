/** @class Forte */
function Forte () {
    this.array = array;
    this.object = object;
    this.number = number;
    this.color = color;
}

module.exports = Forte;

var Array = require('./array');
var Object = require('./object');
var Number = require('./number');
var Color = require('./color');
var array = new Array(Forte);
var object = new Object(Forte);
var number = new Number(Forte);
var color = new Color(Forte);

/**
 * Error wrapper — throw error to console
 * @param message
 */
Forte.prototype.error = function (message) {
    this.name = 'ForteError';
    this.message = message;

    this.toConsole = function () {
        console.log('[' + this.name + '] ' + this.message);
    }
}

/**
 * Get object random key
 * @param input
 * @returns {*}
 */
Forte.prototype.key = function (input) {
    return _.shuffle(_.keys(input))[0];
}

/**
 * Parse values from object
 * @param input
 * @returns {{}}
 */
Forte.prototype.parse = function (input) {
    var result = {}
    _.each(input, function (value, key) {
        result[key] = self.make(value);
    })
    return result;
}

/**
 * Class entry method — detect input data type and call appropriate submodule
 * @param input
 * @returns {*}
 */
Forte.prototype.roll = function (input) {
    var submodule = input.type.substr(0, input.type.indexOf('/')),
        method = input.type.substr(input.type.indexOf('/')+1);
    if (typeof this[submodule][method] !== 'function') {
        console.log('Incorrect input type: ' + input.type);
        return;
    }
    return this[submodule][method](input.values);
}