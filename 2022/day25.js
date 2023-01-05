
var Fuel = LoadInput('./input25.txt').split(/\r?\n/);

console.log(Fuel);

const SNAFUtoDecimal = { "=": -2, "-": -1, "0": 0, "1": 1, "2": 2 };
const DecimalToSNAFU = [ '=', '-', '0', '1', '2' ];

var Converted = [];
Fuel.forEach(fuel => {
	let SNAFU = fuel.split('').reverse();
	let Decimal = 0;
	let Power = 0;
	while (SNAFU.length > 0) {
		Decimal += SNAFUtoDecimal[SNAFU.shift()] * 5 ** Power;
		Power++;
	}
	Converted.push(Decimal);
});

var DecimalResult = Converted.reduce((A, B) => A + B, 0);
var Result = '';

do {

	let Digit = (DecimalResult % 5 + 2) % 5 - 2;
	DecimalResult = (DecimalResult - Digit) / 5;
	Result = DecimalToSNAFU[Digit+2] + Result;

} while (DecimalResult);

console.log('Part 1 answer: ' + Result);

function LoadInput(fileName) {

	const fs = require('fs');

	try {
		return fs.readFileSync(fileName, 'utf8');
	} catch (error) {
		console.error(error);
	}

}

