
const Conversion = { "A": 0, "B": 1, "C": 2, "X": 0, "Y": 1, "Z": 2 };
const Combinations = [	[ 1, 0, 2 ],
						[ 2, 1, 0 ],
						[ 0, 2, 1 ] ];

var StrategyGuide = ParseInput(LoadInput('./input02.txt').split(/\r?\n/));

console.log(StrategyGuide);

var Result = 0;
StrategyGuide.forEach(turn => {
	Result += turn.Player2 + 1 + Combinations[turn.Player2][turn.Player1] * 3;
});

console.log('Part 1 answer: ' + Result);

Result = 0;
StrategyGuide.forEach(turn => {
	Result += turn.Player2 * 3 + Combinations.findIndex(c => c[turn.Player1] == turn.Player2) + 1;
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

	return input.map(row => ({ "Player1": Conversion[row[0]], "Player2": Conversion[row[2]] }));

}
