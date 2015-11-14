var _ = require('underscore');

module.exports = Random;

function Random() {
    var self = this;

    // wrap errors
    self.error = function (message) {
        this.name = 'ForteError';
        this.message = message;

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

    self.array = function (values) {
        return values[Math.floor(Math.random() * values.length)];
    }

    return self;
};
