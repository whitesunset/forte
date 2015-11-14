var core = require('./core');
//var Core = new core();

/** @class Number **/
var RandomNumber = function () {
    this.result;
}

module.exports = RandomNumber;

/**
 * Get random number within range
 * @memberof Number
 * @alias range
 * @param {*} limit
 * @param {boolean} int
 * @returns {(number|boolean)}
 */
RandomNumber.prototype.range = function (limit, int) {
    this.result = false;
    var min = 0,
        max = 0;
    try {
        var min, max;
        if (typeof limit === 'number' ||
            typeof limit == 'string' ||
            (!!limit && typeof limit == 'object' && limit.length === 1 && +limit !== 0)
        ) {
            min = 0;
            max = +limit;
        }
        if (!!limit && typeof limit == 'object' && limit.length === 2) {
            min = +limit[0];
            max = +limit[1];
        }
        if (!limit) {
            throw new Core.error('Empty param, null or undefined: (' + limit + ')');
        } else if (!!limit && typeof limit == 'object' && (limit.length > 2 || limit.length === 0)) {
            throw new Core.error('Wrong limit length: (' + limit.length + ')');
        } else {
            if (int) {
                this.result = Math.floor(Math.random() * (max - min + 1) + min);
            } else {
                this.result = Math.random() * (max - min) + min;
            }
        }
    } catch (e) {
        e.toConsole();
    }
    return this.result;
}

/**
 * Binary
 * @memberof Number
 * @alias binary
 * @param {*} limit
 * @returns {(number|boolean)}
 */
RandomNumber.prototype.binary = function (limit) {
    this.result = this.decimal(limit).toString(2);
    return this.result;
}

/**
 * Octal
 * @memberof Number
 * @alias octal
 * @param {*} limit
 * @returns {(number|boolean)}
 */
RandomNumber.prototype.octal = function (limit) {
    this.result = this.decimal(limit).toString(8);
    return this.result;
}

/**
 * Hexadecimal
 * @memberof Number
 * @alias hex
 * @param {*} limit
 * @returns {(number|boolean)}
 */
RandomNumber.prototype.hex = function (limit) {
    this.result = this.decimal(limit).toString(16);
    return this.result;
}

/**
 * Decimal
 * @memberof Number
 * @alias decimal
 * @param {*} limit
 * @returns {(number|boolean)}
 */
RandomNumber.prototype.decimal = function (limit) {
    this.result = this.range(limit, true);
    return this.result;
}

/**
 * Alias for decimal
 * @memberof Number
 * @alias integer
 * @param {*} limit
 * @returns {(number|boolean)}
 */
RandomNumber.prototype.integer = function (limit) {
    this.result = this.decimal(limit);
    return this.result;
}

/**
 * Float
 * @memberof Number
 * @alias float
 * @param {*} limit
 * @returns {(number|boolean)}
 */
RandomNumber.prototype.float = function (limit, precision) {
    precision = precision || 2;
    this.result = this.range(limit, false);
    if (this.result) {
        this.result = this.result.toFixed(precision);
    }
    return this.result;
}

/**
 * Percent
 * @memberof Number
 * @alias percent
 * @param {(string|number|Array)} limit Array[min, max], min = 0 by default
 * @param {string} sign adds to end of string
 * @returns {string|boolean} percent
 */
RandomNumber.prototype.percent = function (limit, sign) {
    sign = sign ? '' + sign : '';
    if (!limit || (typeof limit === 'object' && limit.length === 0)) {
        this.result = this.range([0, 100]) + sign;
    } else {
        this.result = this.decimal(limit) + sign;
    }
    return this.result;
}

// TODO move to String submodule
/*
String.prototype.version = function () {}
 */