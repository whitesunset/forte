require('babel-core/register');
var _ = require('underscore');
var core = require('./core');
var Core = new core();

/** @class Number **/
module.exports = function () {
    var self = this;

    /**
     * Binary
     * @memberof Number
     * @alias binary
     * @param {*} limit
     * @returns {(number|boolean)}
     */
    self.binary = function (limit) {
        var num = self.decimal(limit);
        return num.toString(2);
    }

    /**
     * Octal
     * @memberof Number
     * @alias octal
     * @param {*} limit
     * @returns {(number|boolean)}
     */
    self.octal = function (limit) {
        var num = self.decimal(limit);
        return num.toString(8);
    }

    /**
     * Hexadecimal
     * @memberof Number
     * @alias hex
     * @param {*} limit
     * @returns {(number|boolean)}
     */
    self.hex = function (limit) {
        var num = self.decimal(limit);
        return num.toString(16);
    }

    /**
     * Decimal
     * @memberof Number
     * @alias decimal
     * @param {*} limit
     * @returns {(number|boolean)}
     */
    self.decimal = function (limit) {
        var result = false;
        try {
            var min, max;
            if (typeof limit === 'number' ||
                typeof limit == 'string' ||
                (!!limit && typeof limit == 'object' && limit.length === 1)
            ) {
                min = 0;
                max = limit;
            }
            if (!!limit && typeof limit == 'object' && limit.length === 2) {
                min = +limit[0];
                max = limit[1];
            }
            if (!limit) {
                throw new Core.error('Empty param, null or undefined: (' + limit + ')');
            } else if (!!limit && typeof limit == 'object' && (limit.length > 2 || limit.length === 0)) {
                throw new Core.error('Wrong limit length: (' + limit.length + ')');
            } else {
                result = Core.range([min, max]);
            }
        } catch (e) {
            e.toConsole();
        }
        return result;
    }

    /**
     * Alias for decimal
     * @memberof Number
     * @alias integer
     * @param {*} limit
     * @returns {(number|boolean)}
     */
    self.integer = function (limit) {
        return self.decimal(limit);
    }

    /**
     * Float
     * @memberof Number
     * @alias float
     * @param {*} limit
     * @returns {(number|boolean)}
     */
    self.float = function (limit) {
        return false;
    }

    /**
     * Percent
     * @memberof Number
     * @alias percent
     * @param {(string|number|Array)} limit Array[min, max], min = 0 by default
     * @param {string} sign adds to end of string
     * @returns {string|boolean} percent
     */
    self.percent = function (limit, sign) {
        sign = sign ? '' + sign : '';
        if (!limit || (typeof limit === 'object' && limit.length === 0)) {
            return Core.range([0, 100]) + sign;
        } else {
            return self.decimal(limit) + sign;
        }
    }

    // TODO move to strings
    /**
     * Mixed
     */
    self.version = function () {

    }

    return self;
}