
var Valley = ParseInput(LoadInput('./input24.txt').split(/\r?\n/));

console.log(Valley);

var Height = Valley.length;
var Width = Valley[0].length;

const Directions = { '>': 1, '<': -1, 'v': 1, '^': -1 };
var RowsSimulation = Array(Height).fill().map((row, index) => {
	let SimulatedRow = Array(Width).fill().map(tile => Array(Width).fill().map(tile => []));
	Valley[index].forEach((tiles, ix) => { tiles.filter(tile => [ '>', '<' ].includes(tile)).forEach(tile => {
		for (let i = 0; i < Width; i++) SimulatedRow[(ix + i * Directions[tile] + Width) % Width][i].push(tile);
	}); });
	return SimulatedRow;
});
var ColumnsSimulation = Array(Width).fill().map((column, index) => {
	let SimulatedColumn = Array(Height).fill().map(tile => Array(Height).fill().map(tile => []));
	Valley.map(row => row[index]).forEach((tiles, ix) => { tiles.filter(tile => [ 'v', '^' ].includes(tile)).forEach(tile => {
		for (let i = 0; i < Height; i++) SimulatedColumn[(ix + i * Directions[tile] + Height) % Height][i].push(tile);
	}); });
	return SimulatedColumn;
});

function Step({ Position, Minute }) {

	Minute++;

	let NextPositions = [	{ "x": Position.x,   "y": Position.y+1 },
							{ "x": Position.x+1, "y": Position.y   },
							{ "x": Position.x,   "y": Position.y   },
							{ "x": Position.x-1, "y": Position.y   },
							{ "x": Position.x,   "y": Position.y-1 } ].filter(p => 	(	p.x >= 0 && p.x < Width && p.y >= 0 && p.y < Height
																					&&	RowsSimulation[p.y][p.x][Minute % Width].length == 0
																					&&	ColumnsSimulation[p.x][p.y][Minute % Height].length == 0)
																						|| (p.x == Start.x && p.y == Start.y)
																						|| (p.x == End.x   && p.y == End.y  ));

	return NextPositions.map(next => ({ "Position": next, "Minute": Minute, "Distance": Math.abs(End.x - next.x) + Math.abs(End.y - next.y) }));

}

function Hash(x, y, m) {
	return String(x).padStart(4, '0') + String(y+1).padStart(4, '0') + String(m).padStart(4, '0');
}

function Trip() {

	let TripResult = Infinity;
	let States = new Map();
	States.set(Hash(Start.x, Start.y, Result), { "Position": { "x": Start.x, "y": Start.y }, "Minute": Result, "Distance": Math.abs(End.x - Start.x) + Math.abs(End.y - Start.y) });
	let StatesHistory = new Map();
	let StartTime = new Date();

	while (States.size > 0) {

		let NextState = States.entries().next().value;
		StatesHistory.set(...NextState);
		States.delete(NextState[0]);

		Step(NextState[1]).forEach(state => { States.set(Hash(state.Position.x, state.Position.y, state.Minute), state); });

		States = new Map([...States.entries()].sort((A, B) => (A[1].Distance - B[1].Distance) * 10 + A[1].Minute - B[1].Minute));

		NextState = States.entries().next().value;
		while (NextState[1].Position.x == End.x && NextState[1].Position.y == End.y) {
			if (NextState[1].Minute < TripResult) {
				TripResult = NextState[1].Minute;
				console.log('Arrived in ' + TripResult + ' steps in ' + (new Date() - StartTime) + 'ms');			
			}
			StatesHistory.set(...NextState);
			States.delete(NextState[0]);
			NextState = States.entries().next().value;
		}

		States = new Map([...States.entries()].filter(([hash, state]) => state.Minute + state.Distance < TripResult && !StatesHistory.has(hash)));

	};
	Result = TripResult;
	console.log('Total time: ' + (new Date() - StartTime) + 'ms');

}

var Result = 0;
var Start = { "x": 0,       "y": -1     };
var End   = { "x": Width-1, "y": Height };

Trip();

console.log('Part 1 answer: ' + Result);

[ Start, End ] = [ End, Start];
Trip();

[ Start, End ] = [ End, Start];
Trip();

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

	return input.slice(1, input.length - 1).map(row => row.split('').slice(1, row.length - 1).map(tile => tile == '.' ? [] : [ tile ]));

}
