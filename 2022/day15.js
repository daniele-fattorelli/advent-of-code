
var Positions = ParseInput(LoadInput('./input15.txt').split(/\r?\n/));

console.log(Positions);

Positions.forEach(position => { position.Distance = Math.abs(position.Sensor.x - position.Beacon.x) + Math.abs(position.Sensor.y - position.Beacon.y); });

function RangesUnion(Ranges) {

	Ranges.sort((A, B) => A.Start == B.Start ? A.End - B.End : A.Start - B.Start);

	let i = 0;
	while (i < Ranges.length - 1) {
		while (i < Ranges.length - 1 && Ranges[i].End + 1 >= Ranges[i+1].Start) {
			Ranges[i].End = Math.max(Ranges[i].End, Ranges[i+1].End);
			Ranges.splice(i+1, 1);
		}
		i++;
	}

}

function CalculateSliceRanges(SliceY) {

	let Ranges = Positions.filter(position => position.Sensor.y - position.Distance <= SliceY && position.Sensor.y + position.Distance >= SliceY).map(position => ({
		"Start": position.Sensor.x - position.Distance + Math.abs(position.Sensor.y - SliceY),
		"End":   position.Sensor.x + position.Distance - Math.abs(position.Sensor.y - SliceY)
	}));
	RangesUnion(Ranges);

	return Ranges;

}

function GetObjectInRange(SliceY, Ranges) {

	return  [	...Positions.filter(position => position.Sensor.y == SliceY).map(position => position.Sensor.x),
				...Positions.filter(position => position.Beacon.y == SliceY).map(position => position.Beacon.x)	]
					.filter((x, i, a) => a.indexOf(x) == i)
					.filter(x => Ranges.findIndex(range => range.Start <= x && range.End >= x) != -1);

}

var x;
var y = 2000000;
var NotBeaconRanges = CalculateSliceRanges(y);

var Result = 0;
NotBeaconRanges.forEach(range => { Result += range.End - range.Start + 1; });
Result -= GetObjectInRange(y, NotBeaconRanges).length;

console.log('Part 1 answer: ' + Result);

const Boundaries = { "Min": 0, "Max": 4000000 };

for (y = Boundaries.Min; y <= Boundaries.Max; y++) {
	x = Boundaries.Min;
	CalculateSliceRanges(y).forEach(range => { if (range.Start <= x && range.End >= x) x = range.End + 1; });
	if (x <= Boundaries.Max) break;	
}
Result = x * 4000000 + y;

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
		let Parts = row.split(':');
		let Sensor = Parts[0].substring(9).split(',');
		let Beacon = Parts[1].substring(21).split(',');
		return {
			"Sensor": {  "x": parseInt(Sensor[0].substring(3)), "y": parseInt(Sensor[1].substring(3)) },
			"Beacon": {  "x": parseInt(Beacon[0].substring(3)), "y": parseInt(Beacon[1].substring(3)) }
		}
	});

}

function DrawMap() {

	let Boundaries = {
		"Left":   Math.min(...Positions.map(position => position.Sensor.x - position.Distance)),
		"Right":  Math.max(...Positions.map(position => position.Sensor.x + position.Distance)),
		"Top":    Math.min(...Positions.map(position => position.Sensor.y - position.Distance)),
		"Bottom": Math.max(...Positions.map(position => position.Sensor.y + position.Distance))
	};
	console.log(Boundaries);

	let Map = [];
	for (let x = Boundaries.Left; x <= Boundaries.Right; x++) {
		Map[x] = [];
		for (let y = Boundaries.Top; y <= Boundaries.Bottom; y++) Map[x][y] = '.';
	}
	
	Positions.forEach(position => {
		Map[position.Sensor.x][position.Sensor.y] = 'S';
		Map[position.Beacon.x][position.Beacon.y] = 'B';
		for (let i = 0; i <= position.Distance; i++) {
			for (let j = position.Sensor.x - i; j <= position.Sensor.x + i; j++) {
				if (Map[j][position.Sensor.y - position.Distance + i] == '.'                         ) Map[j][position.Sensor.y - position.Distance + i] = '#';
				if (Map[j][position.Sensor.y + position.Distance - i] == '.' && i < position.Distance) Map[j][position.Sensor.y + position.Distance - i] = '#';
			}
		}
	});

	for (let x = Boundaries.Left; x <= Boundaries.Right; x++) if (Map[x][10] == '#') Result++;

	let Draw = '';
	for (let y = Boundaries.Top; y <= Boundaries.Bottom; y++) {
		for (let x = Boundaries.Left; x <= Boundaries.Right; x++) Draw += Map[x][y];
		if (Draw.length > 1000) {
			console.log(Draw);
			Draw = '';
		} else Draw += '\r\n';
	}
	console.log(Draw);

}
/*
function SlicesExceptions(Slices, Exceptions) {

	let NewSlices = structuredClone(Slices);
	Exceptions.forEach(exception => {
		let [ Slice ] = NewSlices.splice(NewSlices.findIndex(ns => ns.Start <= exception && ns.End >= exception), 1);
		if (exception > Slice.Start) NewSlices.push({ "Start": Slice.Start ,   "End": exception - 1 });
		if (exception < Slice.End  ) NewSlices.push({ "Start": exception + 1 , "End": Slice.End     });
	});
	return NewSlices;

}

function RangesUnion(Ranges) {

	let RangesStart	= Ranges.map(range => range.Start);
	let RangesEnd	= Ranges.map(range => range.End  );

	RangesStart.sort((A, B) => A - B);
	RangesEnd  .sort((A, B) => A - B);

	let Union = [];
	while (RangesStart.length > 0) {		
		let Start = RangesStart.shift();
		let End   = RangesEnd  .shift();
		while (RangesStart.length > 0 && RangesStart[0] < End) RangesStart.shift();
		while (RangesEnd.length > 0 && (RangesStart.length == 0 || RangesEnd[0] <= RangesStart[0])) End = RangesEnd.shift();
		if (RangesStart.length > 0 && RangesStart[0] <= End) End = RangesStart[0] - 1;
		Union.push({ Start, End });
	}

	let Check = true;
	while (Check) {
		let i = 0;
		Check = false;
		while (i < Union.length - 1) if (Union[i].End == Union[i+1].Start - 1) {
			Union[i+1].Start = Union[i].Start;
			Union.shift();
			Check = true;
		} else i++;
	}
	
	return Union;

}
*/