
var Packets = ParseInput(LoadInput('./input13.txt').split(/\r?\n/));

console.log(Packets);

function OrderPackets(Left, Right) {

	if (Left  == undefined) return -1;
	if (Right == undefined) return  1;
	if (!Array.isArray(Left) && Array.isArray(Right)) Left  = [ Left  ];
	if (Array.isArray(Left) && !Array.isArray(Right)) Right = [ Right ];

	if (!Array.isArray(Left)) {
		return Math.sign(Left - Right);
	} else {
		let i = 0;
		let Result = 0;
		while (	(i < Left.length || i < Right.length)
			&&	((Result = OrderPackets(Left[i], Right[i])) == 0) ) i++;
		return Result;
	}

}

var Result = 0;
Packets.forEach((packet, index) => {
	if (OrderPackets(packet.Left, packet.Right) < 0) Result += index + 1;
});

console.log('Part 1 answer: ' + Result);

var AllPackets = [ [[2]], [[6]], ...Packets.map(packet => [ packet.Left, packet.Right ]).flat() ];
AllPackets.sort(OrderPackets);
console.log(AllPackets);

Result =	(AllPackets.findIndex(packet => JSON.stringify(packet) == '[[2]]') + 1)
		* 	(AllPackets.findIndex(packet => JSON.stringify(packet) == '[[6]]') + 1);

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
	for (let i = 0; i < (input.length + 1) / 3; i++) Parsed.push({
		"Left":  JSON.parse(input[i*3]),
		"Right": JSON.parse(input[i*3+1])
	});

	return Parsed;

}
