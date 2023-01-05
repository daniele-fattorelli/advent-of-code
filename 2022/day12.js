const { Console } = require('console');

var Map = ParseInput(LoadInput('./input12.txt').split(/\r?\n/));

console.log(Map);

function GetNeighbours(Node) {

	let Neighbours = [];
	if (Node.x > 0                    ) Neighbours.push({ "x": Node.x-1, "y": Node.y   });
	if (Node.y > 0                    ) Neighbours.push({ "x": Node.x,   "y": Node.y-1 });
	if (Node.x < Map.Graph.length-1   ) Neighbours.push({ "x": Node.x+1, "y": Node.y   });
	if (Node.y < Map.Graph[0].length-1) Neighbours.push({ "x": Node.x,   "y": Node.y+1 });

	return Neighbours;

}

function Reachables_Part1(Node)   { return GetNeighbours(Node).filter(n => Map.Graph[n.x][n.y].Altitude - Map.Graph[Node.x][Node.y].Altitude < 2);	}
function Reachables_Part2(Node)   { return GetNeighbours(Node).filter(n => Map.Graph[Node.x][Node.y].Altitude - Map.Graph[n.x][n.y].Altitude < 2);	}
function Distance(NodeA, NodeB)   { return 1;                                          																}
function EndCondition_Part1(Node) { return Node.x == Map.End.x && Node.y == Map.End.y; 																}
function EndCondition_Part2(Node) { return Map.Graph[Node.x][Node.y].Altitude == 0; 																}

function Dijkstra(Graph, ReachablesFunction, DistanceFunction, Start, EndCondition) {

	Graph.forEach(row => { row.forEach(node => { node.Distance = Infinity; node.Previous = undefined; }); });
	Graph[Start.x][Start.y].Distance = 0;
	let Nodes = Graph.map((row, x) => row.map((column , y) => ({ x, y }))).flat();

	while (Nodes.length > 0) {

		Nodes.sort((A, B) => Graph[A.x][A.y].Distance - Graph[B.x][B.y].Distance);
		let Node = Nodes.shift();
		if (Graph[Node.x][Node.y].Distance == Infinity) return;
		if (typeof EndCondition !== 'undefined' && EndCondition(Node)) return Node;

		ReachablesFunction(Node).forEach(n => {
			let AlternativeDistance = Graph[Node.x][Node.y].Distance + DistanceFunction(Node, n);
			if (AlternativeDistance < Graph[n.x][n.y].Distance) {
				Graph[n.x][n.y].Distance = AlternativeDistance;
				Graph[n.x][n.y].Previous = Node;
			}
		});

	}

}

var EndNode = Dijkstra(Map.Graph, Reachables_Part1, Distance, Map.Start, EndCondition_Part1);
console.log(Map);

var Result = Map.Graph[EndNode.x][EndNode.y].Distance;

console.log('Part 1 answer: ' + Result);

EndNode = Dijkstra(Map.Graph, Reachables_Part2, Distance, Map.End, EndCondition_Part2);
console.log(Map);

Result = Map.Graph[EndNode.x][EndNode.y].Distance;

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

	let Altitude = input.map(row => [...row]);

	let Start = { "x": Altitude.findIndex(row => row.includes('S')) };
	Start.y = Altitude[Start.x].findIndex(row => row == 'S');

	let End = { "x": Altitude.findIndex(row => row.includes('E')) };
	End.y = Altitude[End.x].findIndex(row => row == 'E');

	const AltitudeConversion = 'abcdefghijklmnopqrstuvwxyz';
	Altitude[Start.x][Start.y] = 'a';
	Altitude[End.x  ][End.y  ] = 'z';

	return {	Start,
				End,
				"Graph": Altitude.map(row => row.map(letter => ({
					"Altitude": AltitudeConversion.indexOf(letter),
					"Distance": Infinity,
					"Previous": undefined
				})))
			};

}
