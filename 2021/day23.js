/*
var Rooms = [];
Rooms[0]  = { "Type": "H", "Connections": [1        ], "Occupant": null };
Rooms[1]  = { "Type": "H", "Connections": [0,  2    ], "Occupant": null };
Rooms[2]  = { "Type": "X", "Connections": [1,  3, 11], "Occupant": null };
Rooms[3]  = { "Type": "H", "Connections": [2,  4    ], "Occupant": null };
Rooms[4]  = { "Type": "X", "Connections": [3,  5, 13], "Occupant": null };
Rooms[5]  = { "Type": "H", "Connections": [4,  6    ], "Occupant": null };
Rooms[6]  = { "Type": "X", "Connections": [5,  7, 15], "Occupant": null };
Rooms[7]  = { "Type": "H", "Connections": [6,  8    ], "Occupant": null };
Rooms[8]  = { "Type": "X", "Connections": [7,  9, 17], "Occupant": null };
Rooms[9]  = { "Type": "H", "Connections": [8, 10    ], "Occupant": null };
Rooms[10] = { "Type": "H", "Connections": [9        ], "Occupant": null };
Rooms[11] = { "Type": "A", "Connections": [2,     12], "Occupant": "B" };
Rooms[12] = { "Type": "A", "Connections": [       11], "Occupant": "D" };
Rooms[13] = { "Type": "B", "Connections": [4,     14], "Occupant": "B" };
Rooms[14] = { "Type": "B", "Connections": [       13], "Occupant": "A" };
Rooms[15] = { "Type": "C", "Connections": [6,     16], "Occupant": "C" };
Rooms[16] = { "Type": "C", "Connections": [       15], "Occupant": "A" };
Rooms[17] = { "Type": "D", "Connections": [8,     18], "Occupant": "D" };
Rooms[18] = { "Type": "D", "Connections": [       17], "Occupant": "C" };

*/

var InputRooms = {

    //History: [],
    Hallway: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    SideRooms: [ [2, 4], [2, 1], [3, 1], [4, 3] ],
    //SideRooms: [ [2, 4, 4, 4], [2, 3, 2, 1], [3, 2, 1, 1], [4, 1, 3, 3] ],
    //SideRooms: [ [2, 1], [3, 4], [2, 3], [4, 1] ],
    //SideRooms: [ [2, 4, 4, 1], [3, 3, 2, 4], [2, 2, 1, 3], [4, 1, 3, 1] ],
    SideRoomsStatus: [ false, false, false, false ],
    SideRoomsFull: [ false, false, false, false ]
    

};
console.log(InputRooms);

var RoomsSize = InputRooms.SideRooms[0].length;
var Result = 999999999999999;

function WalkableFrom(Hallway, Room) {

    let Walkable = [];

    let i = Room*2;
    while (i > 0 && Hallway[i-1] == 0) {
        i--;
        if (![2, 4, 6, 8].includes(i)) Walkable.push(i);
    }

    i = Room*2;
    while (i < 11 && Hallway[i+1] == 0) {
        i++;
        if (![2, 4, 6, 8].includes(i)) Walkable.push(i);
    }

    i = Room*2;
    Walkable.sort((A, B) => Math.abs(A-i) - Math.abs(B-i));

    return Walkable;

}

function isSideRoomFull(SideRoom, Room) {

    return SideRoom.length == RoomsSize && SideRoom.filter(r => r != Room).length == 0;

    //return SideRoom.length == 2 && SideRoom[0] == Room && SideRoom[1] == Room;

}

function isSideRoomOk(SideRoom, Room) {

    return SideRoom.filter(r => r != Room).length == 0;

    /*if (SideRoom.length == 2) return SideRoom[0] == Room && SideRoom[1] == Room;
    if (SideRoom.length == 1) return SideRoom[0] == Room;
    return true;*/

}

function isSideRoomWalkable(Hallway, i) {

    return isWalkable(Hallway, i, Hallway[i]*2)

}

function isWalkable(Hallway, Start, End) {

    let k = End > Start ? 1 : -1;
    while (Start != End && Hallway[Start+k] == 0) Start += k;

    return Start == End;

}

function Turn(Rooms, Cost) {

    if (Cost >= Result) return;

    let Repeat = true;
    while (Repeat) {
        Repeat = false;
        let Move = true;
        while (Move) {
            Move = false;
            for (let i = 0; i < 11; i++) if (Rooms.Hallway[i] != 0 && Rooms.SideRoomsStatus[Rooms.Hallway[i]-1] && isSideRoomWalkable(Rooms.Hallway, i)) {

                let r = Rooms.Hallway[i];

                Rooms.SideRooms[r-1].splice(0, 0, r);
                Rooms.Hallway[i] = 0;
                Rooms.SideRoomsFull[r-1] = isSideRoomFull(Rooms.SideRooms[r-1], r);

                Cost += (Math.abs(r*2 - i) + RoomsSize + 1 - Rooms.SideRooms[r-1].length) * Math.pow(10, r-1);

                if (Cost >= Result) return;

                Move = true;

                //Rooms.History.push({"Hallway": Rooms.Hallway.slice(), "SideRooms": Rooms.SideRooms.map(sr => sr.slice())});

            }
        }
        for (let r = 1; r <= 4; r++) {
            Move = true;
            while (Move && !Rooms.SideRoomsStatus[r-1]) {
                Move = false;
                let Room = Rooms.SideRooms[r-1][0];
                if (Rooms.SideRoomsStatus[Room-1] && isWalkable(Rooms.Hallway, r*2, Room*2)) {

                    Rooms.SideRooms[Room-1].splice(0, 0, Room);
                    Rooms.SideRooms[r-1].shift();
                    Rooms.SideRoomsStatus[r-1] = isSideRoomOk(Rooms.SideRooms[r-1], r);
                    Rooms.SideRoomsFull[Room-1] = isSideRoomFull(Rooms.SideRooms[Room-1], Room);
                    if (Rooms.SideRoomsStatus[r-1]) Repeat = true;

                    Cost += (Math.abs(r*2 - Room*2) + RoomsSize + 1 - Rooms.SideRooms[Room-1].length + RoomsSize - Rooms.SideRooms[r-1].length) * Math.pow(10, Room-1);

                    if (Cost >= Result) return;

                    Move = true;

                    //Rooms.History.push({"Hallway": Rooms.Hallway.slice(), "SideRooms": Rooms.SideRooms.map(sr => sr.slice())});

                }
            }
        }
    }

    if ( Rooms.SideRoomsFull[0] &&  Rooms.SideRoomsFull[1] &&  Rooms.SideRoomsFull[2] &&  Rooms.SideRoomsFull[3] ) {

        Result = Cost;
        console.log(Cost);
        //console.log(Rooms.History);

        return;

    }

    for (let r = 1; r <= 4; r++) if (!Rooms.SideRoomsStatus[r-1]) WalkableFrom(Rooms.Hallway, r).forEach(function(Position) {

        if (Cost == 0) console.log("Room " + r + ", Position: " + Position);

        let NewRooms = JSON.parse(JSON.stringify(Rooms));
        let NewCost = Cost;

        NewRooms.Hallway[Position] = NewRooms.SideRooms[r-1][0];
        NewRooms.SideRooms[r-1].shift();
        NewRooms.SideRoomsStatus[r-1] = isSideRoomOk(NewRooms.SideRooms[r-1], r);

        NewCost += (Math.abs(r*2 - Position) + RoomsSize - NewRooms.SideRooms[r-1].length) * Math.pow(10, NewRooms.Hallway[Position]-1);

        //NewRooms.History.push({"Hallway": NewRooms.Hallway.slice(), "SideRooms": NewRooms.SideRooms.map(sr => sr.slice())});

        Turn(NewRooms, NewCost);

    });

}

Turn(InputRooms, 0);

console.log('Part 1 answer: ' + Result);

InputRooms = {

    //History: [],
    Hallway: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    //SideRooms: [ [2, 4], [2, 1], [3, 1], [4, 3] ],
    SideRooms: [ [2, 4, 4, 4], [2, 3, 2, 1], [3, 2, 1, 1], [4, 1, 3, 3] ],
    //SideRooms: [ [2, 1], [3, 4], [2, 3], [4, 1] ],
    //SideRooms: [ [2, 4, 4, 1], [3, 3, 2, 4], [2, 2, 1, 3], [4, 1, 3, 1] ],
    SideRoomsStatus: [ false, false, false, false ],
    SideRoomsFull: [ false, false, false, false ]
    

};
console.log(InputRooms);

RoomsSize = InputRooms.SideRooms[0].length;
Result = 999999999999999;

Turn(InputRooms, 0);

console.log('Part 2 answer: ' + Result);
