
var EncryptedFile = ParseInput(LoadInput('./input20.txt').split(/\r?\n/));

console.log(EncryptedFile);


function Mix(File) {

	File.forEach(position => {
		let Direction = Math.sign(position.Number);
		let Movements = Math.abs(position.Number) % (Size-1);
		for (let i = 0; i < Movements; i++) {
			
			let Swap = position;
			if (Direction < 0) Swap = Swap.Previuos;
			
			Swap.Previuos.Next = Swap.Next;
			Swap.Next.Previuos = Swap.Previuos;
			Swap.Previuos = Swap.Next;
			Swap.Next = Swap.Previuos.Next;
			Swap.Previuos.Next = Swap;
			Swap.Next.Previuos = Swap;

		}
	});

}

function CalculateResult(File) {

	let Cursor = File.find(position => position.Number == 0);
	for (let i = 1; i <= 3; i++) {
		for (let j = 1; j <= 1000 % Size; j++) Cursor = Cursor.Next;
		Result += Cursor.Number;
		console.log((i*1000) + 'th number: ' + Cursor.Number);
	}

}

var Size = EncryptedFile.length;
Mix(EncryptedFile);

var Result = 0;
CalculateResult(EncryptedFile);

console.log('Part 1 answer: ' + Result);

EncryptedFile = ParseInput(LoadInput('./input20.txt').split(/\r?\n/));
EncryptedFile.forEach(position => { position.Number *= 811589153 });
for (let i = 0; i < 10; i++) Mix(EncryptedFile);

Result = 0;
CalculateResult(EncryptedFile);

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

	let Parsed = input.map((number, index) => ({ "Number": parseInt(number) }));
	Parsed.forEach((position, index) => {
		position.Next     = Parsed[index == Parsed.length-1 ? 0 : index+1];
		position.Previuos = Parsed[index == 0 ? Parsed.length-1 : index-1];
	});
	return Parsed;

}

/*
var Size = EncryptedFile.length;
EncryptedFile.forEach((position, index) => {
console.log(index);
	let Movement = position.Number;
	while (Math.abs(Movement) >= Size) Movement -= (Size-1)*Math.sign(Movement);
	Movement += position.Index;
	if (Movement < 1 || Movement > Size) Movement -= (Size-1)*Math.sign(Movement);
	Movement -= position.Index;

	let Direction = Math.sign(Movement);
	for (let i = 1; i <= Math.abs(Movement); i++) {
		let movePosition = EncryptedFile.find(p => p.Index == position.Index + i*Direction);
		movePosition.Index = movePosition.Index - Direction;
	}
	position.Index = position.Index + Movement;

});

EncryptedFile.forEach(position => { position.Index-- });
let Zero = EncryptedFile.find(p => p.Number == 0).Index;
var Result =	EncryptedFile.find(p => p.Index == (Zero + 1000) % Size).Number
			+	EncryptedFile.find(p => p.Index == (Zero + 2000) % Size).Number
			+	EncryptedFile.find(p => p.Index == (Zero + 3000) % Size).Number;
*/