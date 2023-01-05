
var Elves = ParseInput(LoadInput('./input23.txt').split(/\r?\n/));

console.log(Elves);

var Directions = [	{ "Name": 'north', "Checks": [ { "x": -1, "y": -1 }, { "x":  0, "y": -1 }, { "x":  1, "y": -1 } ] },
					{ "Name": 'south', "Checks": [ { "x": -1, "y":  1 }, { "x":  0, "y":  1 }, { "x":  1, "y":  1 } ] },
					{ "Name": 'west',  "Checks": [ { "x": -1, "y": -1 }, { "x": -1, "y":  0 }, { "x": -1, "y":  1 } ] },
					{ "Name": 'east',  "Checks": [ { "x":  1, "y": -1 }, { "x":  1, "y":  0 }, { "x":  1, "y":  1 } ] }	];

var Result = 0;
var Proposed;
var j = 0;
var Boundaries = { "Left": 0, "Top": 0, "Right": Elves[0].length-1, "Bottom": Elves.length-1 };

Elves[Boundaries.Top    - 1] = []; Elves[Boundaries.Bottom + 1] = [];
for (let x = Boundaries.Left; x <= Boundaries.Right; x++) { Elves[Boundaries.Top - 1][x] = false; Elves[Boundaries.Bottom + 1][x] = false; }
for (let y = Boundaries.Top - 1; y <= Boundaries.Bottom + 1; y++) { Elves[y][Boundaries.Left  - 1] = false; Elves[y][Boundaries.Right + 1] = false; }

do {
	Proposed = [];
	for (let y = Boundaries.Top; y <= Boundaries.Bottom; y++)
		for (let x = Boundaries.Left; x <= Boundaries.Right; x++)
			if (Elves[y][x] && (	Elves[y-1][x-1] || Elves[y-1][x] || Elves[y-1][x+1]
								||	Elves[y  ][x-1] || 					Elves[y  ][x+1]
								||	Elves[y+1][x-1] || Elves[y+1][x] || Elves[y+1][x+1]	)) {
				let i = 0;
				while (i < 4) if (Directions[i].Checks.every(check => !Elves[y + check.y][x + check.x])) {
					Proposed.push({ "x1": x, "y1": y, "x2": x + Directions[i].Checks[1].x, "y2": y + Directions[i].Checks[1].y, "ProposedDirection": Directions[i].Name });
					i = 4;
				} else i++;
			}
	Proposed = Proposed.filter(proposal => Proposed.filter(p => p.x2 == proposal.x2 && p.y2 == proposal.y2).length == 1);
	Proposed.forEach(proposal => {
		if (proposal.y2 < Boundaries.Top || proposal.y2 > Boundaries.Bottom) {
			let NewRow = proposal.y2 + (proposal.y2 < Boundaries.Top ? -1 : 1);
			Elves[NewRow] = [];
			for (let x = Boundaries.Left - 1; x <= Boundaries.Right + 1; x++) Elves[NewRow][x] = false;
			Boundaries.Top    = Math.min(Boundaries.Top,    proposal.y2);
			Boundaries.Bottom = Math.max(Boundaries.Bottom, proposal.y2);
		}
		if (proposal.x2 < Boundaries.Left || proposal.x2 > Boundaries.Right) {
			for (let y = Boundaries.Top - 1; y <= Boundaries.Bottom + 1; y++) Elves[y][proposal.x2 + (proposal.x2 < Boundaries.Left ? -1 : 1)] = false;
			Boundaries.Left  = Math.min(Boundaries.Left,  proposal.x2);
			Boundaries.Right = Math.max(Boundaries.Right, proposal.x2);
		}
		Elves[proposal.y1][proposal.x1] = false;
		Elves[proposal.y2][proposal.x2] = true;
	});
	Directions.push(Directions.shift());
	j++;
	//Draw();
	if (j == 10) for (let y = Boundaries.Top; y <= Boundaries.Bottom; y++) for (let x = Boundaries.Left; x <= Boundaries.Right; x++) Result += Elves[y][x] ? 0 : 1;
} while (Proposed.length > 0);

console.log('Part 1 answer: ' + Result);

Result = j;

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

	return input.map(row => row.split('').map(elf => elf == '#' ? true : false));

}

/*
function Draw() {
	for (let y = Boundaries.Top; y <= Boundaries.Bottom; y++) {
		let Row = '';
		for (let x = Boundaries.Left; x <= Boundaries.Right; x++) Row += Elves[y][x] ? '#' : '.';
		console.log(Row);
	}
}
*/