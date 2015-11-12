var chai = require('chai');
chai.use(require('chai-string'));
var expect = chai.expect;
var number = require('../number');
var Number = new number();

"use strict";

describe('Number', function () {
    var fixture = {
        number: [
            {name: 'without params'},
            {name: 'with limit as null', value: null},
            {name: 'with limit as empty string', value: ''},
            {name: 'with limit as 0', value: 0},
            {name: 'with limit as integer 10', value: 10},
            {name: 'with limit as integer array item [10]', value: [10]},
            {name: 'with limit as string "10"', value: "10"},
            {name: 'with limit as string array item ["10"]', value: ["10"]},
            {name: 'with range as array of integers [0, 10]', value: [0, 10]},
            {name: 'with range as array of integers [0, 10, 100]', value: [0, 10, 100]},
            {name: 'with range as array of strings ["0", "10"]', value: ["0", "10"]},
            {name: 'with negative number -10', value: -10},
        ],
        percent: [
            {name: 'without params'},
            {name: 'with "%" sign', sign: '%'},
        ]
    };
    describe('get random decimal number', function () {
        it(fixture.number[0].name, function () {
            var num = Number.decimal();
            expect(num).to.be.false;
        });
        it(fixture.number[1].name, function () {
            var num = Number.decimal(fixture.number[1].value);
            expect(num).to.be.false;
        });
        it(fixture.number[2].name, function () {
            var num = Number.decimal(fixture.number[2].value);
            expect(num).to.be.false;
        });
        it(fixture.number[3].name, function () {
            var num = Number.decimal(fixture.number[3].value);
            expect(num).to.be.false;
        });
        it(fixture.number[4].name, function () {
            var num = Number.decimal(fixture.number[4].value);
            expect(num).to.be.within(0, 10);
            expect(num % 1).to.equal(0);
        });
        it(fixture.number[5].name, function () {
            var num = Number.decimal(fixture.number[5].value);
            expect(num).to.be.within(0, 10);
            expect(num % 1).to.equal(0);
        });
        it(fixture.number[6].name, function () {
            var num = Number.decimal(fixture.number[6].value);
            expect(num).to.be.within(0, 10);
            expect(num % 1).to.equal(0);
        });
        it(fixture.number[7].name, function () {
            var num = Number.decimal(fixture.number[7].value);
            expect(num).to.be.within(0, 10);
            expect(num % 1).to.equal(0);
        });
        it(fixture.number[8].name, function () {
            var num = Number.decimal(fixture.number[8].value);
            expect(num).to.be.within(0, 10);
            expect(num % 1).to.equal(0);
        });
        it(fixture.number[9].name, function () {
            var num = Number.decimal(fixture.number[9].value);
            expect(num).to.be.false;
        });
        it(fixture.number[10].name, function () {
            var num = Number.decimal(fixture.number[10].value);
            expect(num).to.be.within(0, 10);
            expect(num % 1).to.equal(0);
        });
        it(fixture.number[11].name, function () {
            var num = Number.decimal(fixture.number[11].value);
            expect(num).to.be.within(-10, 0);
            expect(num % 1).to.equal(0);
        });
    });

    describe('get random percent', function () {
        it(fixture.percent[0].name, function () {
            var percent = Number.percent();
            expect(percent).to.be.within(0, 100);
        });
        it(fixture.percent[1].name, function () {
            var percent = Number.percent(null, fixture.percent[1].sign);
            var integer = +percent.substr(0, percent.indexOf(fixture.percent[1].sign));

            expect(percent).to.be.a('string');
            expect(percent).to.endsWith(fixture.percent[1].sign);
            expect(integer).to.be.within(0, 100);
        });
    });
})