
const input = [ 5, 1, 5, 3, 2, 2, 3, 1, 1, 4, 2, 4, 1, 2, 1, 4, 1, 1, 5, 3, 5, 1, 5, 3, 1, 2, 4, 4, 1, 1, 3, 1, 1, 3, 1, 1, 5, 1, 5, 4, 5, 4, 5, 1, 3, 2, 4, 3, 5, 3, 5, 4, 3, 1, 4, 3, 1, 1, 1, 4, 5, 1, 1, 1, 2, 1, 2, 1, 1, 4, 1, 4, 1, 1, 3, 3, 2, 2, 4, 2, 1, 1, 5, 3, 1, 3, 1, 1, 4, 3, 3, 3, 1, 5, 2, 3, 1, 3, 1, 5, 2, 2, 1, 2, 1, 1, 1, 3, 4, 1, 1, 1, 5, 4, 1, 1, 1, 4, 4, 2, 1, 5, 4, 3, 1, 2, 5, 1, 1, 1, 1, 2, 1, 5, 5, 1, 1, 1, 1, 3, 1, 4, 1, 3, 1, 5, 1, 1, 1, 5, 5, 1, 4, 5, 4, 5, 4, 3, 3, 1, 3, 1, 1, 5, 5, 5, 5, 1, 2, 5, 4, 1, 1, 1, 2, 2, 1, 3, 1, 1, 2, 4, 2, 2, 2, 1, 1, 2, 2, 1, 5, 2, 1, 1, 2, 1, 3, 1, 3, 2, 2, 4, 3, 1, 2, 4, 5, 2, 1, 4, 5, 4, 2, 1, 1, 1, 5, 4, 1, 1, 4, 1, 4, 3, 1, 2, 5, 2, 4, 1, 1, 5, 1, 5, 4, 1, 1, 4, 1, 1, 5, 5, 1, 5, 4, 2, 5, 2, 5, 4, 1, 1, 4, 1, 2, 4, 1, 2, 2, 2, 1, 1, 1, 5, 5, 1, 2, 5, 1, 3, 4, 1, 1, 1, 1, 5, 3, 4, 1, 1, 2, 1, 1, 3, 5, 5, 2, 3, 5, 1, 1, 1, 5, 4, 3, 4, 2, 2, 1, 3 ];

console.log(input);

var Fishes = input.slice();
var Result = 0;

for (let i = 0; i < 80; i++) {
	let NewFishes = 0;
	for (let j = 0; j < Fishes.length; j++) {
		Fishes[j]--;
		if (Fishes[j] < 0) {
			Fishes[j] = 6;
			NewFishes++;
		}
	}
	for (let j = 0; j < NewFishes; j++) {
		Fishes.push(8);
	}
	console.log(Fishes.length);
}

Result = Fishes.length;

console.log('Part 1 answer: ' + Result);

Fishes = [ 0, 0, 0, 0, 0, 0, 0, 0, 0];
Result = 0;

for (let i = 0; i < input.length; i++) {
	Fishes[input[i]]++;
}
console.log(Fishes);

for (let i = 0; i < 256; i++) {
	let NewFishes = Fishes[0];
	for (let j = 0; j < 8; j++) {
		Fishes[j] = Fishes[j+1];
	}
	Fishes[6] += NewFishes;
	Fishes[8] = NewFishes;
	console.log(Fishes);
}

for (let i = 0; i < 9; i++) {
	Result += Fishes[i];
}

console.log('Part 2 answer: ' + Result);
