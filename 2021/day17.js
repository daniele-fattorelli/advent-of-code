
const input = { "x1": 269, "x2": 292, "y1": -44, "y2": -68 };

console.log(input);

var vy_max = Math.abs(input.y2) - 1;
var Result = vy_max * (vy_max+1) / 2;

console.log('Part 1 answer: ' + Result);

var vy_min = input.y2;
var vx_min = 1;
var vx_max = input.x2;
var MaxSteps = vy_max*2 + 2;
var Steps = {};
var Values = [];
Result = 0;

while (vx_min * (vx_min+1) / 2 < input.x1) vx_min++;

console.log(vy_min);
console.log(vy_max);
console.log(vx_min);
console.log(vx_max);
console.log(MaxSteps);

for (let vy = vy_min; vy <= vy_max; vy++) {
    let i = vy >= 0 ? vy*2 + 1 : 0;
    let y = 0;
    let v = vy >= 0 ? vy*-1 - 1 : vy;
    while (y > input.y1) {
        y += v;
        v--;
        i++;
    }
    while (y >= input.y2) {
        if (!Steps[i]) Steps[i] = { x: [], y: [] };
        Steps[i].y.push(vy);
        y += v;
        v--;
        i++;
    }
}

for (let vx = vx_min; vx <= vx_max; vx++) {
    let i = 0;
    let x = 0;
    let v = vx;
    while (x < input.x1) {
        x += v;
        v--;
        i++;
    }
    while (x <= input.x2 && i <= MaxSteps) {
        if (!Steps[i]) Steps[i] =  { x: [], y: [] };
        Steps[i].x.push(vx);
        x += v;
        v--;
        i++;
    }
}
console.log(Steps);

for (let step of Object.keys(Steps)) {
    for (let i = 0; i < Steps[step].x.length; i++) {
        for (let j = 0; j < Steps[step].y.length; j++) {
            Values.push({ "x": Steps[step].x[i], "y": Steps[step].y[j] });
        }
    }
}
Values = Values.filter((value, index) => Values.findIndex(v => v.x == value.x && v.y == value.y) == index);

console.log(Values);

Result = Values.length;

console.log('Part 2 answer: ' + Result);
