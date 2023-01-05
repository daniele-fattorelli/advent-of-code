
var Notes = ParseInput(LoadInput('./input11.txt').split(/\r?\n/));

console.log(Notes);

function Round(ReduceWorryLevel) {

	Monkeys.forEach(monkey => {
		while (monkey.Items.length > 0) {
	
			monkey.Inspections++;
			let Item = monkey.Items.shift();
	
			let A = monkey.Operation.A == 'old' ? Item : parseInt(monkey.Operation.A);
			let B = monkey.Operation.B == 'old' ? Item : parseInt(monkey.Operation.B);
	
			switch (monkey.Operation.Operator) {
				case '+': Item = A + B; break;
				case '-': Item = A - B; break;
				case '*': Item = A * B; break;
				case '/': Item = A / B; break;
			}
			if (ReduceWorryLevel) Item = Math.floor(Item / 3);
			Item = Item % WorryLevelLimiter;
	
			Monkeys[Item % monkey.Test.Check == 0 ? monkey.Test.ifTrue : monkey.Test.ifFalse].Items.push(Item);
	
		}
	});

}

function MonkeyBusiness() {

	Monkeys.sort((A, B) => B.Inspections - A.Inspections);
	return Monkeys[0].Inspections * Monkeys[1].Inspections;

}

var WorryLevelLimiter = 1;
Notes.forEach(monkey => {
	WorryLevelLimiter *= monkey.Test.Check;
});

var Monkeys = structuredClone(Notes);
for (let i = 0; i < 20; i++) Round(true);
console.log(Monkeys);

var Result = MonkeyBusiness();

console.log('Part 1 answer: ' + Result);

Monkeys = structuredClone(Notes);
for (let i = 0; i < 10000; i++) Round(false);
console.log(Monkeys);

Result = MonkeyBusiness();

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

	let Parsed = [];

	for (let i = 0; i < (input.length + 1) / 7; i++) {
		Parsed.push({
			"Items": input[i*7+1].substring(18).split(',').map(item => parseInt(item.trim())),
			"Operation": {},
			"Test": {
				"Check":   parseInt(input[i*7+3].substring(21)),
				"ifTrue":  parseInt(input[i*7+4].substring(29)),
				"ifFalse": parseInt(input[i*7+5].substring(30))
			},
			"Inspections": 0
		});
		[ Parsed[i].Operation.A, Parsed[i].Operation.Operator, Parsed[i].Operation.B ] = input[i*7+2].substring(19).split(' ');

	}

	return Parsed;

}
