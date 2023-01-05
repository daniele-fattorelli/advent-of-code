
const input = [ [ "fw", "ll" ], [ "end", "dy" ], [ "tx", "fw" ], [ "tx", "tr" ], [ "dy", "jb" ], [ "ZD", "dy" ], [ "dy", "BL" ], [ "dy", "tr" ], [ "dy", "KX" ], [ "KX", "start" ], [ "KX", "tx" ], [ "fw", "ZD" ], [ "tr", "end" ], [ "fw", "jb" ], [ "fw", "yi" ], [ "ZD", "nr" ], [ "start", "fw" ], [ "tx", "ll" ], [ "ll", "jb" ], [ "yi", "jb" ], [ "yi", "ll" ], [ "yi", "start" ], [ "ZD", "end" ], [ "ZD", "jb" ], [ "tx", "ZD" ] ];

console.log(input);

var Connections = {};
var Paths = [];
var Result = 0;

for (let i = 0; i < input.length; i++) {
	if (!Connections[input[i][0]]) Connections[input[i][0]] = [];
	if (!Connections[input[i][1]]) Connections[input[i][1]] = [];
	Connections[input[i][0]].push(input[i][1]);
	Connections[input[i][1]].push(input[i][0]);
}
console.log(Connections);

function Explore(path) {

	let node = Connections[path[path.length-1]];

	for (let i = 0; i < node.length; i++) {

		if (node[i] == 'end')	{
			Paths.push(path.concat([ node[i] ]));
		} else if (node[i] == node[i].toUpperCase() || !path.includes(node[i])) {
			Explore(path.concat([ node[i] ]));
		}

	}

}

Explore(['start']);

console.log(Paths);

Result = Paths.length;

console.log('Part 1 answer: ' + Result);

Paths = [];

function DoubleVisited(path) {

	let LittleCaves = path.filter(node => node == node.toLowerCase());

	return LittleCaves.filter((node, index) => LittleCaves.indexOf(node) != index).length > 0;

}

function Explore2(path) {

	let node = Connections[path[path.length-1]];

	for (let i = 0; i < node.length; i++) {

		if (node[i] == 'end')	{
			Paths.push(path.concat([ node[i] ]));
		} else if ((node[i] == node[i].toUpperCase() || !path.includes(node[i]) || !DoubleVisited(path)) && (node[i] != 'start')) {
			Explore2(path.concat([ node[i] ]));
		}

	}

}

Explore2(['start']);

console.log(Paths);

Result = Paths.length;

console.log('Part 2 answer: ' + Result);
