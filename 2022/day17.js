
var Directions = ParseInput(LoadInput('./input17.txt'));

console.log(Directions);

const Rocks = [	[ [ 1, 1, 1, 1 ] ],	[	[ 0, 1, 0 ],
										[ 1, 1, 1 ],
										[ 0, 1, 0 ] ], [	[ 0, 0, 1 ],
															[ 0, 0, 1 ],
															[ 1, 1, 1 ] ], [	[ 1 ],
																				[ 1 ],
																				[ 1 ],
																				[ 1 ] ], [	[ 1, 1 ],
																							[ 1, 1 ] ] ];

function InitializeChamber() { Chamber = [ [ 1, 1, 1, 1, 1, 1, 1 ], [ 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0 ] ]; }
function InitializeSnapshots() { Snapshots = Array(Directions.length).fill().map(s => []); }

function Check(unit, y, x) {

	return y > Result - Skipped || Chamber[y][x] + unit < 2;

}

function FindRepetitions(Quota, RockId, RockNumber, WindowSize, RepetitionNumber) {

	let Snapshot = {
		"LastRows": Chamber	.slice(Quota - WindowSize + 1, Quota + 1)
							.map(row => row	.map((unit, index) => unit * 2**index)
											.reduce((A, B) => A += B, 0)			),
		"RockId": RockId,
		"Rocks": [ RockNumber ],
		"Results": [ Result ]
	};

	let RepeatSnapshot = Snapshots[Time].find(s => s.LastRows.length == WindowSize
													&& s.RockId == Snapshot.RockId
													&& s.LastRows.every((row, index) => row == Snapshot.LastRows[index]));	
	if (RepeatSnapshot) {

		RepeatSnapshot.Rocks.push(RockNumber);
		RepeatSnapshot.Results.push(Result);

		if (RepeatSnapshot.Rocks.length == RepetitionNumber) {

			InitializeSnapshots();

			let RepeatRocks = RepeatSnapshot.Rocks[4] - RepeatSnapshot.Rocks[3];
			let ToSkip = Math.floor((MaxRockNumber - 1 - RockNumber) / RepeatRocks);
			Skipped += ToSkip * (RepeatSnapshot.Results[4] - RepeatSnapshot.Results[3]);
			Result = Quota + Skipped;

			return ToSkip * RepeatRocks + 1;

		}

	} else Snapshots[Time].push(Snapshot);

	return 1;

}

function RockFall(RockNumber) {

	if (Chamber.length > 100) { Chamber.splice(0, 50); Skipped += 50; }

	let RockId = RockNumber % 5;
	let Rock = Rocks[RockId];
	let RockHeight = Rock.length - 1;
	let RockWidth = Rock[0].length - 1;
	let Quota = Result - Skipped;
	let Position = { "x": 2, "y": Quota + 4 };

	while (true) {

		let d = Directions[Time];
		let x = Position.x + d;
		if ((x >= 0 && x + RockWidth < 7) && (Position.y > Quota || (
				(	Rock	.map(row => row[d < 0 ? 0 : RockWidth])
							.every((unit, index) => Check(unit, Position.y + RockHeight - index, d < 0 ? x : x + RockWidth)))
			&&	(![1, 2].includes(RockId) || (RockId == 2 && d > 0)
				||	Rock	.map(row => row[1])
							.every((unit, index) => Check(unit, Position.y + RockHeight - index, x + 1)))
			&&	(!(RockId == 2 && d < 0)
				||	Rock	.map(row => row[2])
							.every((unit, index) => Check(unit, Position.y + RockHeight - index, x + 2)))	))
		) Position.x = x;
		Time++; if (Time == Directions.length) Time = 0;

		let y = Position.y - 1;
		if (	(y > Quota) || (
				(				Rock[RockHeight].every((unit, index) => Check(unit, y,   Position.x + index)))
			&& 	(RockId != 1 ||	Rock[1         ].every((unit, index) => Check(unit, y+1, Position.x + index))))) {
			Position.y = y;
		} else {
			let NewQuota = Position.y + RockHeight;
			for (y = RockHeight; y >= 0; y--) {
				let q = NewQuota - y;
				for (x = 0; x <= RockWidth; x++) Chamber[q][Position.x + x] += Rock[y][x];
				
			}
			for (let i = Quota + 5; i < NewQuota + 5; i++) if (Chamber[i] == undefined) Chamber[i] = [ 0, 0, 0, 0, 0, 0, 0 ];
			if (NewQuota > Quota) Quota = NewQuota;
			Result = Quota + Skipped;

			return FindRepetitions(Quota, RockId, RockNumber, 50, 5);

		}

	}

}

var MaxRockNumber = 2022;
var Result = 0;
var Time = 0;
var Skipped = 0;
var Chamber; InitializeChamber();
var Snapshots; InitializeSnapshots();

let i = 0;
while (i < MaxRockNumber) i += RockFall(i);
//DrawChamber();

console.log('Part 1 answer: ' + Result);

MaxRockNumber = 1000000000000;
Result = 0;
Time = 0;
Skipped = 0;
InitializeChamber();
InitializeSnapshots();

i = 0;
while (i < MaxRockNumber) i += RockFall(i);
//DrawChamber();

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

	return input.split('').map(direction => direction == '>' ? 1 : -1);

}

function DrawChamber() {

	let OutputChamber = '';
	for (let y = Chamber.length - 1; y > 0; y--) {
		OutputChamber += '|' + Chamber[y].map(unit => unit == 1 ? '#' : '.').join('') + '|';
		if (OutputChamber.length > 1000) { console.log(OutputChamber); OutputChamber = ''; } else OutputChamber += '\r\n';
	}
	OutputChamber += '+-------+';
	console.log(OutputChamber);

}