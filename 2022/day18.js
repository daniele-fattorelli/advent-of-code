
var Cubes = ParseInput(LoadInput('./input18.txt').split(/\r?\n/));

console.log(Cubes);

var Result = 0;

Cubes.forEach(cube => {
	if (Cubes.findIndex(c => c[0] == cube[0]   && c[1] == cube[1]   && c[2] == cube[2]+1) == -1) Result++;
	if (Cubes.findIndex(c => c[0] == cube[0]   && c[1] == cube[1]   && c[2] == cube[2]-1) == -1) Result++;
	if (Cubes.findIndex(c => c[0] == cube[0]   && c[1] == cube[1]+1 && c[2] == cube[2]  ) == -1) Result++;
	if (Cubes.findIndex(c => c[0] == cube[0]   && c[1] == cube[1]-1 && c[2] == cube[2]  ) == -1) Result++;
	if (Cubes.findIndex(c => c[0] == cube[0]+1 && c[1] == cube[1]   && c[2] == cube[2]  ) == -1) Result++;
	if (Cubes.findIndex(c => c[0] == cube[0]-1 && c[1] == cube[1]   && c[2] == cube[2]  ) == -1) Result++;
});

console.log('Part 1 answer: ' + Result);

var Boundaries = {
	"x1": Math.min(...Cubes.map(cube => cube[0])),
	"x2": Math.max(...Cubes.map(cube => cube[0])),
	"y1": Math.min(...Cubes.map(cube => cube[1])),
	"y2": Math.max(...Cubes.map(cube => cube[1])),
	"z1": Math.min(...Cubes.map(cube => cube[2])),
	"z2": Math.max(...Cubes.map(cube => cube[2]))
}
console.log(Boundaries);

var EmptyCubes = [];
for (let x = Boundaries.x1 + 1; x < Boundaries.x2; x++)
	for (let y = Boundaries.y1 + 1; y < Boundaries.y2; y++)
		for (let z = Boundaries.z1 + 1; z < Boundaries.z2; z++)
			if (Cubes.findIndex(c => c[0] == x && c[1] == y && c[2] == z) == -1)
				EmptyCubes.push([ x, y, z ]);
console.log(EmptyCubes);

function CheckEmptyCube(x, y, z) {

	return		(x >= Boundaries.x1 && x <= Boundaries.x2 && y >= Boundaries.y1 && y <= Boundaries.y2 && z >= Boundaries.z1 && z <= Boundaries.z2)
			&&	(	([ ...Cubes, ...AnalyzingCubes ].findIndex(c => c[0] == x && c[1] == y && c[2] == z) != -1)
				||	(AnalyzeEmptyCube([ x, y, z ]))																);

}

function AnalyzeEmptyCube(Cube) {

	AnalyzingCubes.push(Cube);

	let Analysis = true;
	Analysis = Analysis && CheckEmptyCube(Cube[0],   Cube[1],   Cube[2]+1);
	Analysis = Analysis && CheckEmptyCube(Cube[0],   Cube[1],   Cube[2]-1);
	Analysis = Analysis && CheckEmptyCube(Cube[0],   Cube[1]+1, Cube[2]);
	Analysis = Analysis && CheckEmptyCube(Cube[0],   Cube[1]-1, Cube[2]);
	Analysis = Analysis && CheckEmptyCube(Cube[0]+1, Cube[1],   Cube[2]);
	Analysis = Analysis && CheckEmptyCube(Cube[0]-1, Cube[1],   Cube[2]);

	return Analysis;

}

var AnalyzingCubes = [];
var InsideCubes = [];
while (EmptyCubes.length > 0) {
	if (AnalyzeEmptyCube(EmptyCubes[0])) InsideCubes.push(...AnalyzingCubes);
	EmptyCubes = EmptyCubes.filter(cube => AnalyzingCubes.every(c => c[0] != cube[0] || c[1] != cube[1] || c[2] != cube[2]));
	AnalyzingCubes = [];
}
console.log(InsideCubes);

InsideCubes.forEach(cube => {
	if (Cubes.findIndex(c => c[0] == cube[0]   && c[1] == cube[1]   && c[2] == cube[2]+1) != -1) Result--;
	if (Cubes.findIndex(c => c[0] == cube[0]   && c[1] == cube[1]   && c[2] == cube[2]-1) != -1) Result--;
	if (Cubes.findIndex(c => c[0] == cube[0]   && c[1] == cube[1]+1 && c[2] == cube[2]  ) != -1) Result--;
	if (Cubes.findIndex(c => c[0] == cube[0]   && c[1] == cube[1]-1 && c[2] == cube[2]  ) != -1) Result--;
	if (Cubes.findIndex(c => c[0] == cube[0]+1 && c[1] == cube[1]   && c[2] == cube[2]  ) != -1) Result--;
	if (Cubes.findIndex(c => c[0] == cube[0]-1 && c[1] == cube[1]   && c[2] == cube[2]  ) != -1) Result--;
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

	return input.map(cube => cube.split(',').map(coordinate => parseInt(coordinate)));

}
