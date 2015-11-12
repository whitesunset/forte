var _ = require('underscore');

module.exports = Random;

function Random() {
    var self = this;

    // wrap errors
    self.error = function (message) {
        this.message = message;
        this.name = 'ForteError';

        this.toConsole = function () {
            console.log('[' + this.name + '] ' + this.message);
        }
    }

    // get object random key
    self.key = function (input) {
        return _.shuffle(_.keys(input))[0];
    }

    // parse values from object
    self.parse = function (input) {
        var result = {}
        _.each(input, function (value, key) {
            result[key] = self.make(value);
        })
        return result;
    }

    self.make = function (input) {
        if (typeof self[input.type] !== 'function') {
            console.log('Incorrect input type: ' + input.type);
            return;
        }
        return self[input.type](input.values);
    }

    self.range = function (values) {
        var result = false;
        try {
            if (!!values && typeof values == 'object' && values.length == 2) {
                var min = values[0];
                var max = values[1];
                result = Math.floor(Math.random() * (max - min + 1) + min);
            } else {
                throw new self.error('Incorrect values array size');
            }
        } catch (e) {
            e.toConsole();
        }
        return result;
    }

    self.array = function (values) {
        return values[Math.floor(Math.random() * values.length)];
    }

    return self;
};
