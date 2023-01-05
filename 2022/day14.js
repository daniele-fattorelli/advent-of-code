
var VerticalSlice = ParseInput(LoadInput('./input14.txt').split(/\r?\n/));

console.log(VerticalSlice);

var Boundaries;
function CalculateBoundaries(WithFloor) {

	Boundaries = {
		"Left":   Math.min(500, ...VerticalSlice.map(path => path.map(point => point.x)).flat()),
		"Right":  Math.max(500, ...VerticalSlice.map(path => path.map(point => point.x)).flat()),
		"Top":    Math.min(0,   ...VerticalSlice.map(path => path.map(point => point.y)).flat()),
		"Bottom": Math.max(0,   ...VerticalSlice.map(path => path.map(point => point.y)).flat())
	};
	if (WithFloor) {
		Boundaries.Bottom += 2;
		Boundaries.Left  = Math.min(Boundaries.Left,  501 - Boundaries.Bottom + Boundaries.Top);
		Boundaries.Right = Math.max(Boundaries.Right, 499 + Boundaries.Bottom - Boundaries.Top);
	}
	console.log(Boundaries);

}

var Map;
function GenerateMap(WithFloor) {

	Map = [];
	for (let x = Boundaries.Left-1; x <= Boundaries.Right+1; x++) {
		Map[x] = [];
		for (let y = Boundaries.Top-1; y <= Boundaries.Bottom+1; y++) Map[x][y] = '.';
		if (WithFloor) Map[x][Boundaries.Bottom] = '#';
	}
	VerticalSlice.forEach(path => {
		for (let i = 0; i < path.length - 1; i++)
			for (let x = Math.min(path[i].x, path[i+1].x); x <= Math.max(path[i].x, path[i+1].x); x++)
			for (let y = Math.min(path[i].y, path[i+1].y); y <= Math.max(path[i].y, path[i+1].y); y++)
				Map[x][y] = '#';
	});

	Map[500][0] = '+';

}

function SimulateSand() {

	let SandPosition = { "x": 500, "y": 0 };

	while (	Map[500][0] == '+'
			&&	SandPosition.x >= Boundaries.Left
			&&	SandPosition.x <= Boundaries.Right
			&&	SandPosition.y >= Boundaries.Top
			&&	SandPosition.y <= Boundaries.Bottom	) {

		if (Map[SandPosition.x][SandPosition.y+1] == '.') {
			SandPosition.y++;
		} else if (Map[SandPosition.x-1][SandPosition.y+1] == '.') {
			SandPosition.x--;
			SandPosition.y++;
		} else if (Map[SandPosition.x+1][SandPosition.y+1] == '.') {
			SandPosition.x++;
			SandPosition.y++;
		} else {
			Map[SandPosition.x][SandPosition.y] = 'o';
			SandPosition = { "x": 500, "y": 0 };
			Result++;
		}

	}

}

var Result = 0;

CalculateBoundaries(false);
GenerateMap(false);
SimulateSand();

DrawCavern();

console.log('Part 1 answer: ' + Result);

Result = 0;

CalculateBoundaries(true);
GenerateMap(true);
SimulateSand();

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

	return input.map(row => row.split(' -> ').map(point => {
		let p = point.split(',');
		return { "x": parseInt(p[0]), "y": parseInt(p[1]) };
	}));

}

function DrawCavern() {

	let Draw = '';
	for (let y = Boundaries.Top; y <= Boundaries.Bottom; y++) {
		for (let x = Boundaries.Left; x <= Boundaries.Right; x++) Draw += Map[x][y];
		if (Draw.length > 1000) {
			console.log(Draw);
			Draw = '';
		} else Draw += '\r\n';
	}
	console.log(Draw);

}
