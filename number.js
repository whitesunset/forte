require('babel-core/register');
var _ = require('underscore');
var core = require('./core');
var Core = new core();

module.exports = Number;

function Number() {
    var self = this;

    /* Binary */
    self.binary = function () {

    }

    /* Octal */
    self.octal = function () {

    }

    /* Decimal*/
    self.decimal = function (args) {
        var result = false;
        try {
            var min, max;
            if (typeof args === 'number' ||
                typeof args == 'string' ||
                (!!args && typeof args == 'object' && args.length === 1)
            ) {
                min = 0;
                max = args;
            }
            if (!!args && typeof args == 'object' && args.length === 2) {
                min = +args[0];
                max = args[1];
            }
            if (!args) {
                throw new Core.error('Empty param, null or undefined: (' + args + ')');
            } else if (!!args && typeof args == 'object' && (args.length > 2 || args.length === 0)) {
                throw new Core.error('Wrong limit length: (' + args.length + ')');
            } else {
                result = Core.range([min, max]);
            }
        } catch (e) {
            e.toConsole();
        }
        return result;
    }

    //
    self.integer = function (args) {
        self.decimal(args);
    }

    self.float = function () {

    }

    self.percent = function (limit, sign) {
        sign = sign ? '' + sign : '';
        if (!limit || (typeof limit === 'object' && limit.length === 0)) {
            return Core.range([0, 100]) + sign;
        } else {
            return self.decimal(limit) + sign;
        }
    };

    /* Hexadecimal */
    self.hex = function () {

    }

    // TODO move to strings
    /* Mixed */
    self.version = function () {

    }

    return self;
}