
var Buffer = LoadInput('./input06.txt');

console.log(Buffer);

function FindMarker(MarkerLength) {

	let Position = MarkerLength;
	let Sequence = [...Buffer.substring(0, MarkerLength)];

	while (Sequence.filter((letter, index) => Sequence.indexOf(letter) == index).length < MarkerLength) {
		Position++;
		Sequence.shift();
		Sequence.push(Buffer[Position-1]);
	}

	return Position;

}

var Result = FindMarker(4);

console.log('Part 1 answer: ' + Result);

Result = FindMarker(14);

console.log('Part 2 answer: ' + Result);

function LoadInput(fileName) {

	const fs = require('fs');

	try {
		return fs.readFileSync(fileName, 'utf8');
	} catch (error) {
		console.error(error);
	}

}
