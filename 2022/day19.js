
var Blueprints = ParseInput(LoadInput('./input19.txt').split(/\r?\n/));

console.log(Blueprints);

Blueprints.forEach(blueprint => {
	blueprint.MinimumOre = Math.min(...blueprint.Robots.map(r => r.Costs[0]));
	blueprint.MaximumUsefulRobots = [ ...[ 0, 0, 0 ].map((robot, index) => Math.max(...blueprint.Robots.map(r => r.Costs[index]))), Infinity ];
});

function OneMoreTurn(Blueprint, Minute, Resources, Robots/*, Plan*/) {

	let MaxRobots, MaxResource;
	for (let i = 0; i < 4; i++) {
		MaxRobots = Math.min(TotalMinutes - Minute - 1, i ? Math.floor(MaxResource / Blueprint.Robots[i].Costs[i-1]) : Infinity);
		MaxResource = Resources[i] + (TotalMinutes - Minute) * Robots[i] + MaxRobots*(MaxRobots + 1)/2;
	};
	if (MaxResource <= Blueprint.Best.Resources[3]) return;

	let Buildables = Blueprint.Robots.filter((robot, index) => Robots[index] < Blueprint.MaximumUsefulRobots[index]
																&& Resources.every((r, i) => r >= robot.Costs[i]));
	Buildables.reverse();

	Robots.forEach((robot, index) => { Resources[index] += robot /* * Blueprint.Robots[index].Produces[index]; */ });

	Minute++;

	if (Minute == TotalMinutes) {
		if (Resources[3] > Blueprint.Best.Resources[3]) {
			Blueprint.Best.Resources = Resources;
			Blueprint.Best.Robots    = Robots;
			//Blueprint.Best.Plan      = Plan;
		}
		return;
	}

	let VeryUsefulRobot = Buildables.length > 0 && (/*Buildables[0].Produces[2] || */Buildables[0].Produces[3]);
	if (VeryUsefulRobot) Buildables.splice(1);
	Buildables.forEach(robot => {
		OneMoreTurn(	Blueprint,
						Minute,
						Resources.map((r, index) => r -= robot.Costs   [index]),
						Robots   .map((r, index) => r += robot.Produces[index])/*,
						[ ...Plan, { Minute, "Built": robot.Name } ]*/			);
	});
	if (!VeryUsefulRobot) OneMoreTurn(Blueprint, Minute, Resources, Robots/*, Plan*/);

}

var TotalMinutes = 24;
var Start = new Date();
Blueprints.forEach(blueprint => {
	let StartBlueprint = new Date();
	OneMoreTurn(blueprint, blueprint.MinimumOre, [ blueprint.MinimumOre, 0, 0, 0 ], [ 1, 0, 0, 0 ]/*, []*/);
	console.log('Blueprint ' + blueprint.ID + ': ' + blueprint.Best.Resources[3] + ' geodes cracked in ' + (new Date() - StartBlueprint) + 'ms');
});
console.log('Total time ' + (new Date() - Start) + 'ms');
console.log(Blueprints);

var Result = Blueprints.map(blueprint => blueprint.ID * blueprint.Best.Resources[3]).reduce((A, B) => A + B, 0);

console.log('Part 1 answer: ' + Result);

TotalMinutes = 32;
Result = 1;
Start = new Date();
for (let i = 0; i < Math.min(Blueprints.length, 3); i++) {
	let StartBlueprint = new Date();
	OneMoreTurn(Blueprints[i], Blueprints[i].MinimumOre, [ Blueprints[i].MinimumOre, 0, 0, 0 ], [ 1, 0, 0, 0 ]/*, []*/);
	Result *= Blueprints[i].Best.Resources[3];
	console.log('Blueprint ' + Blueprints[i].ID + ': ' + Blueprints[i].Best.Resources[3] + ' geodes cracked in ' + (new Date() - StartBlueprint) + 'ms');	
}
console.log('Total time ' + (new Date() - Start) + 'ms');
console.log(Blueprints);

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

	return input.map((blueprint, index) => {
		let Costs = blueprint.split(':')[1].split('.');
		Costs = [ Costs[0].substring(22).split(' '), Costs[1].substring(23).split(' '), Costs[2].substring(27).split(' '), Costs[3].substring(24).split(' ') ]
		return {
			"ID": index + 1,
			"Robots": [
				{ /*"Name": 'ore-collecting robot',      */"Costs": [ parseInt(Costs[0][0]), 0,                     0,                     0 ], "Produces": [ 1, 0, 0, 0 ] },
				{ /*"Name": 'clay-collecting robot',     */"Costs": [ parseInt(Costs[1][0]), 0,                     0,                     0 ], "Produces": [ 0, 1, 0, 0 ] },
				{ /*"Name": 'obsidian-collecting robot', */"Costs": [ parseInt(Costs[2][0]), parseInt(Costs[2][3]), 0,                     0 ], "Produces": [ 0, 0, 1, 0 ] },
				{ /*"Name": 'geode-cracking robot',      */"Costs": [ parseInt(Costs[3][0]), 0,                     parseInt(Costs[3][3]), 0 ], "Produces": [ 0, 0, 0, 1 ] }
			],
			"Best": {
				"Resources": [ 0, 0, 0, 0 ],
				"Robots": []/*,
				"Plan": []*/
			}
		};
	});

}

/*

let Needed = 3;
while (Needed >= 0 && Robots[Needed] < Blueprint.MaximumUsefulRobots[Needed] && !Blueprint.Robots[Needed].Costs.every((cost, index) => cost <= Resources[index]))
	if (Needed > 0) {

		let NeededResourcesProduction = Blueprint.Robots[Needed].Costs	.map((cost, index) => ({	"Resource": index,
																									"MinutesToProduce": (cost - Resources[index]) / Robots[index] }))
																		.filter(r => !isNaN(r.MinutesToProduce));
		NeededResourcesProduction.sort((A, B) => B.MinutesToProduce - A.MinutesToProduce);
		Needed = NeededResourcesProduction[0].Resource;

	} else Needed = -1;

if (Needed >= 0) OneMoreTurn(	Blueprint,
	Minute,
	Resources.map((r, index) => r -= Blueprint.Robots[Needed].Costs   [index]),
	Robots   .map((r, index) => r += Blueprint.Robots[Needed].Produces[index]),
	[ ...Plan, { Minute, "Built": Blueprint.Robots[Needed].Name } ]				);
if (Needed == 1 && Robots[0] < Blueprint.MaximumUsefulRobots[0]) OneMoreTurn(	Blueprint,
	Minute,
	Resources.map((r, index) => r -= Blueprint.Robots[0].Costs   [index]),
	Robots   .map((r, index) => r += Blueprint.Robots[0].Produces[index]),
	[ ...Plan, { Minute, "Built": Blueprint.Robots[0].Name } ]				);

OneMoreTurn(Blueprint, Minute, Resources, Robots, Plan);

*/
