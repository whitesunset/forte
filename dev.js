var number = require('./number');
var Number = new number;
var console = require('mag')('Number');

var seed = [
    '100',
    100,
    ['15'],
    [10],
    [1, 100],
    [1, 100, 200],
    [-1, -100],
    [-240, -1000],
    ['-240', '-1000'],
    -200,
    undefined,
    null,
    0,
    [0],
    [],
    '',
];

for (var i = 0; i < seed.length; i++){
    //console.log('Binary: ' + seed[i] + ' : ' + Number.binary(seed[i]));
    //console.log('Octal: ' + seed[i] + ' : ' + Number.octal(seed[i]));
    //console.log('Decimal: ' + seed[i] + ' type: ' + typeof seed[i] + ' : ' + Number.decimal(seed[i]));
    //console.log('Hexadecimal: ' + seed[i] + ' : ' + Number.hex(seed[i]));
    //console.log('Percent: ' + seed[i] + ' : ' + Number.percent(seed[i]));
    console.log('Float: ' + seed[i] + ' type: ' + typeof seed[i] + ' : ' + Number.float(seed[i], 1));
}