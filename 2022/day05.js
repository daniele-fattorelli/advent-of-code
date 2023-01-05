
var Cargo = ParseInput(LoadInput('./input05.txt').split(/\r?\n/));

console.log(Cargo);

function Arrange(move, reverse) {
	let Crates = Stacks[move.From-1].substring(0, move.Number);
	Stacks[move.From-1] = Stacks[move.From-1].substring(move.Number);
	Stacks[move.To-1] = (reverse ? [...Crates].reverse().join('') : Crates) + Stacks[move.To-1];
}

var Stacks = structuredClone(Cargo.Stacks);
Cargo.Moves.forEach(move => Arrange(move, true));
console.log(Stacks);

var Result = '';
Stacks.forEach(stack => {
	Result += stack[0];
});

console.log('Part 1 answer: ' + Result);

Stacks = structuredClone(Cargo.Stacks);
Cargo.Moves.forEach(move => Arrange(move, false));
console.log(Stacks);

Result = '';
Stacks.forEach(stack => {
	Result += stack[0];
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

	let stackHeight = input.findIndex(row => row == '') - 1;
	let stackNumber = Math.max(...input[stackHeight].split(' ').filter(stack => stack != '').map(stack => parseInt(stack)));

	let Stacks = [];

	for (let i = 0; i < stackNumber; i++) {
		Stacks[i] = '';
		for (let j = 0; j < stackHeight; j++) {
			Stacks[i] += input[j].length > i*4 ? input[j][i*4+1].trim() : '';
		}
	}

	let Moves = input.slice(stackHeight + 2).map(move => {
		let m = move.replace('move ', '').replace(' from ', ' ').replace(' to ', ' ').split(' ');
		return { "Number": parseInt(m[0]), "From": parseInt(m[1]), "To": parseInt(m[2]) };
	});

	return { Stacks, Moves };

}
