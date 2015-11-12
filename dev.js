var number = require('./number');
var Number = new number;
var console = require('mag')('Number');

var seed = [
    ['15'],
    undefined,
    null,
    100,
    '100',
    [0],
    [],
    '',
    [10],
    [1, 100],
    [1, 100, 200],
    [-1, -100],
    [-240, -1000],
    ['-240', '-1000'],
    -200
];

for (var i = 0; i < seed.length; i++){
    //console.log(seed[i] + ' : ' + Number.decimal(seed[i]));
    console.log(seed[i] + ' : ' + Number.percent(seed[i]));
}