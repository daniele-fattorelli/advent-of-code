
var TreeMap = ParseInput(LoadInput('./input08.txt').split(/\r?\n/));

console.log(TreeMap);

var H = TreeMap.length;
var W = TreeMap[0].length;
var VisibilityMap = Array(H+2).fill().map(vmh => Array(W+2).fill().map(vmw => ({ "Left": -1, "Right": -1, "Up": -1, "Down": -1 })));

for (let i = 1; i <= H; i++) for (let j = 1; j <= W; j++) {
	VisibilityMap[i    ][j    ].Left  = Math.max(TreeMap[i-1][j-1], VisibilityMap[i    ][j-1  ].Left );
	VisibilityMap[i    ][W-j+1].Right = Math.max(TreeMap[i-1][W-j], VisibilityMap[i    ][W-j+2].Right);
	VisibilityMap[j    ][i    ].Up    = Math.max(TreeMap[j-1][i-1], VisibilityMap[j-1  ][i    ].Up   );
	VisibilityMap[H-j+1][i    ].Down  = Math.max(TreeMap[H-j][i-1], VisibilityMap[H-j+2][i    ].Down );
}
console.log(VisibilityMap);

var Result = 0;
for (let i = 0; i < H; i++) for (let j = 0; j < W; j++) {
	if (	(TreeMap[i][j] > VisibilityMap[i+1][j  ].Left )
		||  (TreeMap[i][j] > VisibilityMap[i+1][j+2].Right)
		||  (TreeMap[i][j] > VisibilityMap[i  ][j+1].Up   )
		||  (TreeMap[i][j] > VisibilityMap[i+2][j+1].Down ) ) Result++;
}

console.log('Part 1 answer: ' + Result);

Result = 0;
for (let i = 1; i < H-1; i++) for (let j = 1; j < W-1; j++) {
	
	let Score = 1;
	let count;

	count = 1; while (count <     j && TreeMap[i][j-count] < TreeMap[i][j]) count++; Score *= count;
	count = 1; while (count < W-1-j && TreeMap[i][j+count] < TreeMap[i][j]) count++; Score *= count;
	count = 1; while (count <     i && TreeMap[i-count][j] < TreeMap[i][j]) count++; Score *= count;
	count = 1; while (count < H-1-i && TreeMap[i+count][j] < TreeMap[i][j]) count++; Score *= count;

	if (Score > Result) Result = Score;

}

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

	return input.map(row => [...row].map(number => parseInt(number)));

}
