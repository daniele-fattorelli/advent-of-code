
const input = [ [ 1, 5, 5, 3, 4, 2, 1, 2, 8, 8 ], [ 5, 2, 5, 5, 3, 8, 4, 8, 8, 2 ], [ 1, 2, 2, 4, 3, 1, 5, 7, 3, 2 ], [ 4, 2, 5, 8, 2, 4, 2, 2, 7, 4 ], [ 1, 6, 5, 8, 5, 6, 4, 2, 1, 6 ], [ 6, 8, 7, 2, 6, 5, 1, 1, 8, 2 ], [ 5, 7, 7, 5, 5, 5, 2, 2, 3, 8 ], [ 5, 6, 2, 2, 5, 4, 5, 1, 7, 2 ], [ 8, 7, 6, 6, 6, 7, 2, 3, 1, 8 ], [ 2, 1, 7, 8, 3, 7, 4, 8, 3, 5 ] ];

console.log(input);

var Sum = 0;
var Powers = input.slice();
var Result = 0;

let i = 0;
while (i < 100 || Sum > 0) {

	for (let j = 0; j < Powers.length; j++) {
		for (let k = 0; k < Powers[j].length; k++) {
			Powers[j][k]++;
		}
	}

	let Flash = true;
	while (Flash) {

		Flash = false;

		for (let j = 0; j < Powers.length; j++) {
			for (let k = 0; k < Powers[j].length; k++) {
				if (Powers[j][k] > 9) {

					if (j > 0 && k > 0 && Powers[j-1][k-1] != 0) Powers[j-1][k-1]++;
					if (j > 0          && Powers[j-1][k  ] != 0) Powers[j-1][k  ]++;
					if (j > 0 && k < 9 && Powers[j-1][k+1] != 0) Powers[j-1][k+1]++;
					if (         k > 0 && Powers[j  ][k-1] != 0) Powers[j  ][k-1]++;
					if (         k < 9 && Powers[j  ][k+1] != 0) Powers[j  ][k+1]++;
					if (j < 9 && k > 0 && Powers[j+1][k-1] != 0) Powers[j+1][k-1]++;
					if (j < 9          && Powers[j+1][k  ] != 0) Powers[j+1][k  ]++;
					if (j < 9 && k < 9 && Powers[j+1][k+1] != 0) Powers[j+1][k+1]++;

					Powers[j][k] = 0;
					Flash = true;
					if (i < 100) Result++;

				}
			}
		}

	}
	
	i++;

	Sum = 0;
	for (let j = 0; j < Powers.length; j++) for (let k = 0; k < Powers[j].length; k++) Sum += Powers[j][k];

}

console.log('Part 1 answer: ' + Result);

Result = i;

console.log('Part 2 answer: ' + Result);
