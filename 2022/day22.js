
var Notes = ParseInput(LoadInput('./input22.txt').split(/\r?\n/));

console.log(Notes);

var Width = Math.max(...Notes.Board.map(row => row.End)) + 1;
var Height = Notes.Board.length;
var TileSize = Math.max(Width, Height) / 4;
var CubeMap = [];
for (let i = 0; i < Height / TileSize; i++) {
	CubeMap.push([]);
	for (let j = 0; j < Width / TileSize; j++)
		if (Notes.Board[i*TileSize].Start <= j*TileSize && Notes.Board[i*TileSize].End >= j*TileSize)
			 CubeMap[i].push({ "x": j, "y": i })
		else CubeMap[i].push(undefined);
}
for (let i = 0; i < Height / TileSize; i++) for (let j = 0; j < Width / TileSize; j++) {
	if (CubeMap[i][j] &&                 CubeMap[i][j-1]) CubeMap[i][j].Left  = { "Face": CubeMap[i][j-1], "Rotate": 0 };
	if (CubeMap[i][j] &&                 CubeMap[i][j+1]) CubeMap[i][j].Right = { "Face": CubeMap[i][j+1], "Rotate": 0 };
	if (CubeMap[i][j] && CubeMap[i-1] && CubeMap[i-1][j]) CubeMap[i][j].Up    = { "Face": CubeMap[i-1][j], "Rotate": 0 };
	if (CubeMap[i][j] && CubeMap[i+1] && CubeMap[i+1][j]) CubeMap[i][j].Down  = { "Face": CubeMap[i+1][j], "Rotate": 0 };
}

var FlatMap = structuredClone(CubeMap);
for (let i = 0; i < Height / TileSize; i++) for (let j = 0; j < Width / TileSize; j++) {
	if (FlatMap[i][j] && !FlatMap[i][j].Left ) FlatMap[i][j].Left  = { "Face": FlatMap[i][Math.max(...FlatMap[i].filter(tile => tile).map(tile => tile.x))], "Rotate": 0 };
	if (FlatMap[i][j] && !FlatMap[i][j].Right) FlatMap[i][j].Right = { "Face": FlatMap[i][Math.min(...FlatMap[i].filter(tile => tile).map(tile => tile.x))], "Rotate": 0 };
	if (FlatMap[i][j] && !FlatMap[i][j].Up   ) FlatMap[i][j].Up    = { "Face": FlatMap[Math.max(...FlatMap.filter(row => row[j]).map(row => row[j].y))][j],  "Rotate": 0 };
	if (FlatMap[i][j] && !FlatMap[i][j].Down ) FlatMap[i][j].Down  = { "Face": FlatMap[Math.min(...FlatMap.filter(row => row[j]).map(row => row[j].y))][j],  "Rotate": 0 };
}

const Orientations = [ 'Right', 'Down', 'Left', 'Up' ];
function NextOrientation(Face, Orientation) { return Orientations[(Orientations.indexOf(Orientation) + Face.Rotate) % 4]; }
function NextFace(Face, Orientation) { return Face.Face[NextOrientation(Face, Orientation)]; }
function Connect(First, Second) {
	CubeMap.map(row => row.filter(face => face && face[First] && face[Second] && !NextFace(face[First], Second) && !NextFace(face[Second], First))).flat().forEach(face => {
		face[First ].Face[NextOrientation(face[First ], Second)] = { "Face": face[Second].Face, "Rotate": ( 1 + face[Second].Rotate - face[First ].Rotate + 4) % 4 };
		face[Second].Face[NextOrientation(face[Second], First )] = { "Face": face[First ].Face, "Rotate": (-1 + face[First ].Rotate - face[Second].Rotate + 4) % 4 };
	});
}

while (CubeMap.some(row => row.find(face => face && (!face.Left || !face.Right || !face.Up || !face.Down))))
	for (let i = 0; i < 4; i++) Connect(Orientations[i], Orientations[(i+1)%4]);

console.log(FlatMap);
console.log(CubeMap);

function DoPath(TileMapping) {

	Notes.Path.forEach(step => {
		if (step.Action == 'move') {

			let NewPosition;
			let Movement = step.Value;
			while (Movement > 0) {

				let TileX = Math.floor(Position.Column / TileSize);
				let TileY = Math.floor(Position.Row    / TileSize);
				let Direction = 1;
				if ([ 2, 3 ].includes(Position.Facing)) Direction = -1;

				let ActualPosition, RelativeTilePosition, Start, End, Walls;
				if ([ 0, 2 ].includes(Position.Facing)) {
					ActualPosition = Position.Column;
					RelativeTilePosition = Direction > 0 ? Position.Row - TileY * TileSize : (TileY + 1) * TileSize - 1 - Position.Row;
					Start =  TileX      * TileSize;
					End   = (TileX + 1) * TileSize - 1;
					Walls = Notes.Board[Position.Row].Walls.filter(wall => wall >= Start && wall <= End);
				} else {
					ActualPosition = Position.Row;
					RelativeTilePosition = Direction > 0 ? (TileX + 1) * TileSize - 1 - Position.Column : Position.Column - TileX * TileSize;
					Start =  TileY      * TileSize;
					End   = (TileY + 1) * TileSize - 1;
					Walls = Notes.Board.filter(row => row.Index >= Start && row.Index <= End && row.Walls.includes(Position.Column)).map(row => row.Index);
				}

				NewPosition = ActualPosition + Movement * Direction;
				if (Direction < 0) Walls.reverse();

				let NextTile = TileMapping[TileY][TileX][Orientations[Position.Facing]];
				let NextFacing = (Position.Facing + NextTile.Rotate + 4) % 4;
				let NextTilePosition;
				switch (NextFacing) {
					case 0: NextTilePosition = { "Row": NextTile.Face.y * TileSize + RelativeTilePosition, "Column": NextTile.Face.x * TileSize, "Facing": NextFacing }; break;
					case 1: NextTilePosition = { "Row": NextTile.Face.y * TileSize, "Column": (NextTile.Face.x + 1) * TileSize - 1 - RelativeTilePosition, "Facing": NextFacing }; break;
					case 2: NextTilePosition = { "Row": (NextTile.Face.y + 1) * TileSize - 1 - RelativeTilePosition, "Column": (NextTile.Face.x + 1) * TileSize - 1, "Facing": NextFacing }; break;
					case 3: NextTilePosition = { "Row": (NextTile.Face.y + 1) * TileSize - 1, "Column": NextTile.Face.x * TileSize + RelativeTilePosition, "Facing": NextFacing }; break;
				}

				let FirstWall = Walls.find(wall => Direction > 0	? wall > ActualPosition && wall <= NewPosition
																	: wall < ActualPosition && wall >= NewPosition);
				if (FirstWall != undefined) NewPosition = FirstWall - Direction;

				if (NewPosition < Start || NewPosition > End) {				
					if (Notes.Board[NextTilePosition.Row].Walls.indexOf(NextTilePosition.Column) != -1) {
						Movement = 0;
						NewPosition = Direction > 0 ? End : Start;
					} else {
						Movement -= Direction > 0 ? End - ActualPosition + 1 : ActualPosition - Start + 1;
						Position = NextTilePosition;
						NewPosition = -1;
					}
				} else Movement = 0;

			}

			if (NewPosition > -1) {
				if ([ 0, 2 ].includes(Position.Facing))
					 Position.Column = NewPosition
				else Position.Row    = NewPosition;
			}

		} else {
			Position.Facing = (Position.Facing + step.Value + 4) % 4;
		}
	});

}

var Position = { "Row": 0, "Column": Notes.Board[0].Start, "Facing": 0 };
DoPath(FlatMap);
var Result = 1000*(Position.Row+1) + 4*(Position.Column+1) + Position.Facing;

console.log('Part 1 answer: ' + Result);

Position = { "Row": 0, "Column": Notes.Board[0].Start, "Facing": 0 };
DoPath(CubeMap);
Result = 1000*(Position.Row+1) + 4*(Position.Column+1) + Position.Facing;

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

	let Parsed = {};
	let BoardHeight = input.findIndex(row => row == '');

	Parsed.Board = input.slice(0, BoardHeight).map((row, index) => {
		let tiles = row.split('');
		return {
			"Index": index,
			"Start": tiles.findIndex(tile => tile != ' '),
			"End": tiles.length-1,
			"Walls": tiles.map((tile, index) => ({ tile, index })).filter(t => t.tile == '#').map(t => t.index)
		}
	});
	Parsed.Path = [];
	let Value = '';
	input[BoardHeight+1].split('').forEach(letter => {
		if ([ 'R', 'L' ].includes(letter)) {
			Parsed.Path.push({ "Action": 'move', "Value": parseInt(Value) });
			Parsed.Path.push({ "Action": 'rotate', "Value": letter == 'R' ? 1 : -1 });
			Value = '';
		} else {
			Value += letter;
		}
	});
	if (Value != '') Parsed.Path.push({ "Action": 'move', "Value": parseInt(Value) });

	return Parsed;

}
/*
function CheckRow(Index) {
	if (Index < 0 || Index >= Notes.Board.length) return false;
	return Notes.Board[Index].Start <= Position.Column && Notes.Board[Index].End >= Position.Column;
}

function Legacy() {

	Notes.Path.forEach(step => {
		if (step.Action == 'move') {

			let Direction = 1;
			if ([ 2, 3 ].includes(Position.Facing)) Direction = -1;

			let ActualPosition, Start, End, Walls;
			if ([ 0, 2 ].includes(Position.Facing)) {
				ActualPosition = Position.Column;	
				Start = Notes.Board[Position.Row].Start;
				End = Notes.Board[Position.Row].End;
				Walls = Notes.Board[Position.Row].Walls.slice();
			} else {
				ActualPosition = Position.Row;
				Start = Math.max( ...Notes.Board.filter(row => row.Index <= Position.Row && CheckRow(row.Index) && !CheckRow(row.Index-1)).map(row => row.Index));
				End   = Math.min( ...Notes.Board.filter(row => row.Index >= Position.Row && CheckRow(row.Index) && !CheckRow(row.Index+1)).map(row => row.Index));
				Walls = Notes.Board.filter(row => row.Index >= Start && row.Index <= End && row.Walls.includes(Position.Column)).map(row => row.Index);
			}

			let NewPosition = ActualPosition + step.Value*Direction;
			if (Direction < 0) Walls.reverse();
			let Offset = (End - Start + 1) * Direction;

			let FirstWall = [ ...Walls, ...Walls.map(wall => wall + Offset) ].find(wall => Direction > 0	? wall > ActualPosition && wall <= NewPosition
																											: wall < ActualPosition && wall >= NewPosition);
			if (FirstWall != undefined) NewPosition = FirstWall - Direction;
			while (NewPosition < Start || NewPosition > End) NewPosition -= Offset;

			if ([ 0, 2 ].includes(Position.Facing))
				Position.Column = NewPosition
			else Position.Row    = NewPosition;

		} else {
			Position.Facing = (Position.Facing + step.Value + 4) % 4;
		}
	});

}
*/