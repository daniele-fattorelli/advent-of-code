
var Valves = ParseInput(LoadInput('./input16.txt').split(/\r?\n/));

console.log(Valves);

function ExploreGraph(Valve, Actions, Flow, Minutes, TotalTime) {

	let Opened = Actions.map(a => a.filter(action => action.Type == 'open').map(action => action.Name));
	let LastOpened = Opened.map(o => o[o.length - 1]);
	Opened = Opened.flat();
	let MaximumTheoricalFlowRemaining = ValvesByFlows	.filter(valve => !Opened.includes(valve.Name))
														.map((valve, index) => valve.Flow * (TotalTime - 1 - Minutes - 2*Math.floor(index/Valve.length)))
														.reduce((A, B) => A + (B > 0 ? B : 0), 0);
	if (Flow + MaximumTheoricalFlowRemaining < Result) return;

	if (Minutes == TotalTime || Opened.length == ValvesByFlows.length) {
		if (Result < Flow) {
			Result = Flow;
			Layout = Actions;
		}
		return;
	}

	let ExploreValve = [];
	for (let i = 0; i < Valve.length; i++) {
		ExploreValve.push([]);

		if (Valve[i].Flow > 0 && !Opened.includes(Valve[i].Name)) ExploreValve[i].push(Valve[i]);
		let Path = [ { "Type": 'move', "Name": 'AA' }, ...Actions[i] ].filter((action, index) => index >= Actions[i].findIndex(a => a.Type == 'open' && a.Name == LastOpened[i])).map(action => action.Name);
		Valve[i].NearValves.forEach(next => { if (!Path.includes(next.Name)) ExploreValve[i].push(next); });
	}

	let indexes = ExploreValve.map(e => 0);
	let combinations = ExploreValve.map(e => e.length).reduce((A, B) => A * B, 1);
	let j = 0;
	while (j < combinations) {
		let newValve = [];
		let newActions = [];
		let newFlow = Flow;

		for (let i = 0; i < Valve.length; i++) {
			newValve.push(ExploreValve[i][indexes[i]]);
			newActions.push([ ...Actions[i], { "Type": newValve[i].Name == Valve[i].Name ? 'open' : 'move', "Name": newValve[i].Name } ]);
			newFlow += newValve[i].Name == Valve[i].Name ? newValve[i].Flow * (TotalTime - 1 - Minutes) : 0;
		}
		if (!newActions	.map(a => a[a.length - 1])
						.filter(a => a.Type == 'open')
						.map(a => a.Name)
						.some((a, index, arr) => arr.indexOf(a) != index)) ExploreGraph(newValve, newActions, newFlow, Minutes + 1, TotalTime);

		let i = Valve.length - 1;
		while (i > 0 && indexes[i] == ExploreValve[i].length - 1) {
			if (ExploreValve[i].map(v => v.Name).join() == ExploreValve[i-1].map(v => v.Name).join()) {
				indexes[i] = indexes[i-1] + 1;
				j += indexes[i] * ExploreValve.filter((a, index) => index > i).map(e => e.length).reduce((A, B) => A * B, 1);
			} else indexes[i] = 0;
			i--;
		}
		indexes[i]++;
		j++;
	}

}

var ValvesByFlows = Valves.filter(valve => valve.Flow > 0).map(valve => ({ "Name": valve.Name, "Flow": valve.Flow }));
ValvesByFlows.sort((A, B) => B.Flow - A.Flow);

var Result = 0; var Explorations = 0;
var Layout = [];
var StartNode = Valves.find(valve => valve.Name == 'AA');
ExploreGraph([ StartNode ], [ [] ], 0, 0, 30);

console.log(Layout);
console.log('Part 1 answer: ' + Result);

Result = 0; Explorations = 0;
Layout = [];
ExploreGraph([ StartNode, StartNode ], [ [], [] ], 0, 0, 26);
//ExploreGraphWithElephant(StartNode, StartNode, [], [], 0, 0, 26);

console.log(Layout);
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

	let Parsed = input.map(valve => {
		let Definitions = valve.split(';');
		return {
			"Name": Definitions[0].substring(6, 8),
			"Flow": parseInt(Definitions[0].substring(23)),
			"NearValves": Definitions[1].substring(23).split(',').map(name => name.trim())
		};
	});
	Parsed.forEach(valve => {
		valve.NearValves = valve.NearValves.map(name => Parsed.find(v => v.Name == name));
		valve.NearValves.sort((A, B) => B.Flow - A.Flow);
	});

	return Parsed;

}

/*
function ExploreGraph(Valve, Actions, Flow, Minutes) {

	let Opened = Actions.filter(action => action.Type == 'open').map(action => action.Name);
	let MaximumTheoricalFlowRemaining = ValvesByFlows.filter(valve => !Opened.includes(valve.Name)).map((valve, index) => valve.Flow * (29 - Minutes - 2*index)).reduce((A, B) => A + (B > 0 ? B : 0), 0);
	if (Flow + MaximumTheoricalFlowRemaining < Result) return;

	if (Minutes == 30 || Opened.length == ValvesByFlows.length) {
		if (Result < Flow) {
			Result = Flow;
			Layout = Actions;
		}
		return;
	}

	if (Valve.Flow > 0 && !Opened.includes(Valve.Name)) {
		ExploreGraph(Valve, [...Actions, { "Type": 'open', "Name": Valve.Name, "Flow": Valve.Flow * (29 - Minutes) } ], Flow + Valve.Flow * (29 - Minutes), Minutes + 1);
	};

	let Path = Actions.filter((action, index) => index >= Actions.findIndex(a => a.Type == 'open' && a.Name == Opened[Opened.length - 1])).map(action => action.Name);
	Valve.NearValves.forEach(next => {
		if (!Path.includes(next.Name)) ExploreGraph(next, [...Actions, { "Type": 'move', "Name": next.Name } ], Flow, Minutes + 1);
	});

}

function ExploreGraphWithElephant(ValveA, ValveB, ActionsA, ActionsB, Flow, Minutes, TotalTime) {

	let OpenedA = ActionsA.filter(action => action.Type == 'open').map(action => action.Name);
	let OpenedB = ActionsB.filter(action => action.Type == 'open').map(action => action.Name);
	let Opened = [ ...OpenedA, ...OpenedB ];
	let MaximumTheoricalFlowRemaining = ValvesByFlows	.filter(valve => !Opened.includes(valve.Name))
														.map((valve, index) => valve.Flow * (TotalTime - 1 - Minutes - 2*Math.floor(index/2)))
														.reduce((A, B) => A + (B > 0 ? B : 0), 0);
	if (Flow + MaximumTheoricalFlowRemaining < Result) return;

	if (Minutes == TotalTime || Opened.length == ValvesByFlows.length) {
		if (Result < Flow) {
			Result = Flow;
			Layout = [ ActionsA, ActionsB ];
		}
		return;
	}

	let ExploreValveA = [];
	let ExploreValveB = [];

	if (ValveA.Flow > 0 && !Opened.includes(ValveA.Name)) ExploreValveA.push(ValveA);
	if (ValveB.Flow > 0 && !Opened.includes(ValveB.Name)) ExploreValveB.push(ValveB);

	let PathA = [ { "Type": 'move', "Name": 'AA' }, ...ActionsA ].filter((action, index) => index >= ActionsA.findIndex(a => a.Type == 'open' && a.Name == OpenedA[OpenedA.length - 1])).map(action => action.Name);
	let PathB = [ { "Type": 'move', "Name": 'AA' }, ...ActionsB ].filter((action, index) => index >= ActionsB.findIndex(a => a.Type == 'open' && a.Name == OpenedB[OpenedB.length - 1])).map(action => action.Name);

	ValveA.NearValves.forEach(next => { if (!PathA.includes(next.Name)) ExploreValveA.push(next); });
	ValveB.NearValves.forEach(next => { if (!PathB.includes(next.Name)) ExploreValveB.push(next); });	

	for(let i = 0; i < ExploreValveA.length; i++) {
		for(let j = 0; j < ExploreValveB.length; j++) {
			
			let TypeA = ExploreValveA[i].Name == ValveA.Name ? 'open' : 'move';
			let TypeB = ExploreValveB[j].Name == ValveB.Name ? 'open' : 'move';

			if (	(TypeA != 'open' || TypeB != 'open' || ExploreValveA[i].Name != ExploreValveB[j].Name)
				&&	(ExploreValveA.map(e => e.Name).join() != ExploreValveB.map(e => e.Name).join() || j >= i))

				ExploreGraphWithElephant(	ExploreValveA[i],
											ExploreValveB[j],
											[ ...ActionsA, { "Type": TypeA, "Name": ExploreValveA[i].Name } ],
											[ ...ActionsB, { "Type": TypeB, "Name": ExploreValveB[j].Name } ],
											Flow	+ (TypeA == 'open' ? ExploreValveA[i].Flow * (TotalTime - 1 - Minutes) : 0)
													+ (TypeB == 'open' ? ExploreValveB[j].Flow * (TotalTime - 1 - Minutes) : 0),
											Minutes + 1,
											TotalTime		);

		}
	}

}

*/
