
const Signals = [ 20, 60, 100, 140, 180, 220 ];

var Instructions = ParseInput(LoadInput('./input10.txt').split(/\r?\n/));

console.log(Instructions);

function DoCycle() {

	if (Signals.includes(Cycle)) Result += Cycle * X;

	CRT += Math.abs((Cycle - 1) % 40 - X) < 2 ? '#' : '.';

	Cycle++;

}

var Result = 0;

var X = 1;
var Cycle = 1;
var CRT = '';

Instructions.forEach(instruction => {
	DoCycle();
	if (instruction.Command == 'addx') {
		DoCycle();
		X += instruction.Parameter;
	}
});

console.log('Part 1 answer: ' + Result);

console.log('Part 2 answer: ');
for (let i = 0; i < 6; i++) console.log(CRT.substring(i*40, (i+1)*40));

function LoadInput(fileName) {

	const fs = require('fs');

	try {
		return fs.readFileSync(fileName, 'utf8');
	} catch (error) {
		console.error(error);
	}

}

function ParseInput(input) {

	return input.map(row => {
		let Instruction = row.split(' ');
		ParsedInstruction = { "Command": Instruction[0] };
		if (Instruction.length > 1) ParsedInstruction.Parameter = parseInt(Instruction[1]);
		return ParsedInstruction;
	});

}
