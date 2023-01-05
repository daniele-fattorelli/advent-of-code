
const input = [ 8, 7 ];

console.log(input);

var Turn = 1;
var Dice = 0;
var Position = input.slice();
var Score = [ 0, 0 ];
var Result = 0;

function Roll() {

    Dice++;
    if (Dice > 100) Dice = 1;

}

while (Score[0] < 1000 && Score[1] < 1000) {

    let Player = Turn % 2 == 1 ? 0 : 1;
    let Sum = 0;
    Roll(); Sum += Dice;
    Roll(); Sum += Dice;
    Roll(); Sum += Dice;
    Position[Player] += Sum;
    while (Position[Player] > 10) Position[Player] -= 10;
    Score[Player] += Position[Player];
    Turn++;

}
Turn--;

Result = Math.min(Score[0], Score[1]) * Turn * 3;

console.log('Part 1 answer: ' + Result);

var TurnUniverses = [];
var Universes = [ 0, 0 ];
Result = 0;

for (let i = 1; i < 4; i++) for (let j = 1; j < 4; j++) for (let k = 1; k < 4; k++) {
    if (!TurnUniverses[i+j+k]) TurnUniverses[i+j+k] = 0;
    TurnUniverses[i+j+k]++;
}
console.log(TurnUniverses);

function DiracTurn(DiracPosition, DiracScore, Player, Weight) {

    if (DiracScore[0] > 20) {
        Universes[0] += Weight;
    } else if (DiracScore[1] > 20) {
        Universes[1] += Weight;
    } else {

        Player = Player ? 0 : 1;

        for (let i = 3; i < 10; i++) {

            let p = DiracPosition.slice();
            let s = DiracScore.slice();

            p[Player] += i; if (p[Player] > 10) p[Player] -= 10;
            s[Player] += p[Player];

            DiracTurn(p, s, Player, Weight * TurnUniverses[i]);

        }

    }

}

DiracTurn(input, [0, 0], 1, 1);

Result = Math.max(Universes[0], Universes[1]);

console.log('Part 2 answer: ' + Result);
