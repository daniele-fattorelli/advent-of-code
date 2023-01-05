
var Pairs = ParseInput(LoadInput('./input04.txt').split(/\r?\n/));

console.log(Pairs);

var Result = 0;
Pairs.forEach(pair => {
	if	(	(pair.A1 >= pair.B1 && pair.A2 <= pair.B2)
		||	(pair.A1 <= pair.B1 && pair.A2 >= pair.B2)) Result++;
});

console.log('Part 1 answer: ' + Result);

Result = 0;
Pairs.forEach(pair => {
	if	(	(pair.A1 >= pair.B1 && pair.A1 <= pair.B2)
		||	(pair.A2 >= pair.B1 && pair.A2 <= pair.B2)
		||	(pair.A1 <= pair.B1 && pair.A2 >= pair.B2)) Result++;
});

console.log('Part 2 answer: ' + Result);

function LoadInput(fileName) {

	const fs = require('fs');

	try {
		return fs.readFileSync(fileName, 'utf8');
	} catch (error) {
		console.error(error);
	}

}

function ParseInput(input) {

	return input.map(row => row.split(',').map(sections => sections.split('-'))).map(pair => ({	"A1": parseInt(pair[0][0]),
																								"A2": parseInt(pair[0][1]),
																								"B1": parseInt(pair[1][0]),
																								"B2": parseInt(pair[1][1]) }));

}
