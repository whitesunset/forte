var random_array = require('./array');
var random_number = require('./number');
var RandomArray = new random_array;
var RandomNumber = new random_number;

var Random = function () {
    this.module;
}

module.exports = Random;

/**
 * Error wrapper — throw error to console
 * @param message
 */
Random.prototype.error = function (message) {
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
Random.prototype.key = function (input) {
    return _.shuffle(_.keys(input))[0];
}

/**
 * Parse values from object
 * @param input
 * @returns {{}}
 */
Random.prototype.parse = function (input) {
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
Random.prototype.roll = function (input) {
    var submodule = input.type.substr(0, input.type.indexOf('/')),
        method = input.type.substr(input.type.indexOf('/')+1);
    if (typeof this[submodule][method] !== 'function') {
        console.log('Incorrect input type: ' + input.type);
        return;
    }
    return this[submodule][method](input.values);
}
Random.prototype.array = RandomArray;
Random.prototype.number = RandomNumber;