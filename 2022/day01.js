
var Calories = ParseInput(LoadInput('./input01.txt').split(/\r?\n/));

console.log(Calories);

var Result = [];

for (let i = 0; i < Calories.length; i++) {
	let Elf = 0;
	for (let j = 0; j < Calories[i].length; j++) Elf += Calories[i][j];
	Result.push(Elf);
}

Result.sort((a, b) => b - a);

console.log(Result);

console.log('Part 1 answer: ' + Result[0]);

console.log('Part 2 answer: ' + (Result[0] + Result[1] + Result[2]));

function LoadInput(fileName) {

	const fs = require('fs');

	try {
		return fs.readFileSync(fileName, 'utf8');
	} catch (error) {
		console.error(error);
	}

}

function ParseInput(input) {

	let i = 0;
	let Parsed = [];
	Parsed[i] = [];

	input.forEach(row => {
		if (row == '') {
			i++;
			Parsed[i] = [];
		} else Parsed[i].push(parseInt(row));
	});

	return Parsed;

}
