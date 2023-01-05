
var FileSystem = ParseInput(LoadInput('./input07.txt').split(/\r?\n/));

console.log(FileSystem);

function Explore(Directory) {

	Directory.Size = 0;

	Directory.Childrens.forEach(child => {
		if (child.Type == 'dir') Explore(child);
		Directory.Size += child.Size;
	});

	if (Directory.Size <= 100000) Result += Directory.Size;

}

var Result = 0;
Explore(FileSystem);
console.log(FileSystem);

console.log('Part 1 answer: ' + Result);

function Find(Directory, Size) {

	if (Directory.Size > Size && Directory.Size < Result) Result = Directory.Size;

	Directory.Childrens.forEach(child => {
		if (child.Type == 'dir') Find(child, Size);
	});

}

Result = FileSystem.Size;
Find(FileSystem, FileSystem.Size - 40000000);

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

	let Parsed = {
		"Name": '/',
		"Type": 'dir'
	};

	let Current;

	input.forEach(row => {

		if (row.startsWith('$ cd /' )) Current = Parsed
			else
		if (row.startsWith('$ cd ..')) Current = Current.Parent
			else
		if (row.startsWith('$ cd '  )) Current = Current.Childrens.find(child => child.Name == row.substring(5))
			else
		if (row.startsWith('$ ls'   )) Current.Childrens = []
			else
		if (row.startsWith('dir'    )) Current.Childrens.push(	{
																	"Name": row.substring(4),
																	"Type": 'dir',
																	"Parent": Current
																})
		else {
			let File = row.split(' ');
			Current.Childrens.push(	{
										"Name": File[1],
										"Type": 'file',
										"Size": parseInt(File[0])	
									})
		}

	});

	return Parsed;

}
