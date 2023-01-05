
const Priorities = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

var RuckSacks = LoadInput('./input03.txt').split(/\r?\n/);

console.log(RuckSacks);

function FindDuplicate(a, b) {

	let i = 0;
	while (!a.includes(b[i])) i++;
	return b[i]

}

var Result = 0;
RuckSacks.forEach(rs => {
	Result += Priorities.indexOf(FindDuplicate(rs.substring(0, rs.length / 2), rs.substring(rs.length / 2))) + 1;
});

console.log('Part 1 answer: ' + Result);

function FindTriplicate(a, b, c) {

	let i = 0;
	while (!a.includes(c[i]) || !b.includes(c[i])) i++;
	return c[i]

}

Result = 0;
for (let i = 0; i < RuckSacks.length / 3; i++) {
	Result += Priorities.indexOf(FindTriplicate(RuckSacks[i*3], RuckSacks[i*3+1], RuckSacks[i*3+2])) + 1;
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
