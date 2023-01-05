
var Motions = ParseInput(LoadInput('./input09.txt').split(/\r?\n/));

console.log(Motions);

function SimulateRope(KnotsNumber) {

	let Rope = Array(KnotsNumber).fill().map(knot => ({ "x": 0, "y": 0 }));
	let Positions = [ { "x": 0, "y": 0 } ];

	Motions.forEach(motion => {
		for (let i = 0; i < motion.Distance; i++) {
			switch (motion.Direction) {
				case 'U': Rope[0].y++; break;
				case 'D': Rope[0].y--; break;
				case 'L': Rope[0].x--; break;
				case 'R': Rope[0].x++; break;
			}
			for (let j = 1; j < Rope.length; j++) {
				let x = Rope[j-1].x - Rope[j].x;
				let y = Rope[j-1].y - Rope[j].y;
				if (Math.abs(x) > 1 || Math.abs(y) > 1) {
					Rope[j].x += Math.sign(x);
					Rope[j].y += Math.sign(y);
					if (j == Rope.length-1) Positions.push(structuredClone(Rope[j]));
				}
			}
		}
	});

	console.log(Positions);

	return Positions.filter((position, index) => Positions.findIndex(p => p.x == position.x && p.y == position.y) == index).length;

}

var Result = SimulateRope(2);

console.log('Part 1 answer: ' + Result);

Result = SimulateRope(10);

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

	return input.map(row => {
		let Motion = row.split(' ');
		return { "Direction": Motion[0], "Distance": parseInt(Motion[1]) };
	});

}
