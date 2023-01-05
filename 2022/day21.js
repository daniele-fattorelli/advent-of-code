
var Monkeys = ParseInput(LoadInput('./input21.txt').split(/\r?\n/));

console.log(Monkeys);

var Root = Monkeys.find(monkey => monkey.Name == 'root');
while (Root.Result1 == undefined) {

	Monkeys	.filter(monkey => monkey.Result1 == undefined && monkey.Operation.Monkey1.Result1 != undefined && monkey.Operation.Monkey2.Result1 != undefined)
			.forEach(monkey => {
				switch (monkey.Operation.Operator) {
					case '+': monkey.Result1 = monkey.Operation.Monkey1.Result1 + monkey.Operation.Monkey2.Result1; break;
					case '-': monkey.Result1 = monkey.Operation.Monkey1.Result1 - monkey.Operation.Monkey2.Result1; break;
					case '*': monkey.Result1 = monkey.Operation.Monkey1.Result1 * monkey.Operation.Monkey2.Result1; break;
					case '/': monkey.Result1 = monkey.Operation.Monkey1.Result1 / monkey.Operation.Monkey2.Result1; break;
				}
			});

}

var Result = Root.Result1;

console.log('Part 1 answer: ' + Result);

var ReadyToYell = Monkeys.filter(monkey => monkey.Name != 'humn' && monkey.Result2 == undefined && monkey.Operation.Monkey1.Result2 != undefined && monkey.Operation.Monkey2.Result2 != undefined);
while (ReadyToYell.length > 0) {

	ReadyToYell.forEach(monkey => {
		switch (monkey.Operation.Operator) {
			case '+': monkey.Result2 = monkey.Operation.Monkey1.Result2 + monkey.Operation.Monkey2.Result2; break;
			case '-': monkey.Result2 = monkey.Operation.Monkey1.Result2 - monkey.Operation.Monkey2.Result2; break;
			case '*': monkey.Result2 = monkey.Operation.Monkey1.Result2 * monkey.Operation.Monkey2.Result2; break;
			case '/': monkey.Result2 = monkey.Operation.Monkey1.Result2 / monkey.Operation.Monkey2.Result2; break;
		}
	});

	ReadyToYell = Monkeys.filter(monkey => monkey.Name != 'humn' && monkey.Result2 == undefined && monkey.Operation.Monkey1.Result2 != undefined && monkey.Operation.Monkey2.Result2 != undefined);
}

var CurrentMonkey = Root.Operation.Monkey1.Result2 != undefined ? Root.Operation.Monkey2 : Root.Operation.Monkey1;
CurrentMonkey.Result2 = Root.Operation.Monkey1.Result2 != undefined ? Root.Operation.Monkey1.Result2 : Root.Operation.Monkey2.Result2;

while (CurrentMonkey.Name != 'humn') {

	let NextMonkey;
	if (CurrentMonkey.Operation.Monkey1.Result2 != undefined) {
		NextMonkey = CurrentMonkey.Operation.Monkey2;
		switch (CurrentMonkey.Operation.Operator) {
			case '+': NextMonkey.Result2 = CurrentMonkey.Result2 - CurrentMonkey.Operation.Monkey1.Result2; break;
			case '-': NextMonkey.Result2 = CurrentMonkey.Operation.Monkey1.Result2 - CurrentMonkey.Result2; break;
			case '*': NextMonkey.Result2 = CurrentMonkey.Result2 / CurrentMonkey.Operation.Monkey1.Result2; break;
			case '/': NextMonkey.Result2 = CurrentMonkey.Operation.Monkey1.Result2 / CurrentMonkey.Result2; break;
		}
	} else {
		NextMonkey = CurrentMonkey.Operation.Monkey1;
		switch (CurrentMonkey.Operation.Operator) {
			case '+': NextMonkey.Result2 = CurrentMonkey.Result2 - CurrentMonkey.Operation.Monkey2.Result2; break;
			case '-': NextMonkey.Result2 = CurrentMonkey.Operation.Monkey2.Result2 + CurrentMonkey.Result2; break;
			case '*': NextMonkey.Result2 = CurrentMonkey.Result2 / CurrentMonkey.Operation.Monkey2.Result2; break;
			case '/': NextMonkey.Result2 = CurrentMonkey.Operation.Monkey2.Result2 * CurrentMonkey.Result2; break;
		}
	}
	CurrentMonkey = NextMonkey;

}

Result = CurrentMonkey.Result2;

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

	let Parsed = input.map(row => {
		let Description = row.split(':');
		let Monkey = {
			"Name": Description[0],
			"Result1": undefined,
			"Result2": undefined
		};
		if (isNaN(Description[1].trim())) {
			Monkey.Operation = {
				"Monkey1": Description[1].substring(1, 5),
				"Monkey2": Description[1].substring(8, 12),
				"Operator": Description[1].substring(6, 7)
			}
		} else Monkey.Result1 = parseInt(Description[1].trim());
		if (Monkey.Name != 'humn') Monkey.Result2 = Monkey.Result1;
		return Monkey;
	});

	Parsed.forEach(monkey => {
		if (monkey.Operation) {
			monkey.Operation.Monkey1 = Parsed.find(m => m.Name == monkey.Operation.Monkey1);
			monkey.Operation.Monkey2 = Parsed.find(m => m.Name == monkey.Operation.Monkey2);
		}
	});

	return Parsed;

}
