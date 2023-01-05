
const input = 'SNPVPFCPPKSBNSPSPSOF';
const Insertions = { "CF": "N", "NK": "B", "SF": "B", "HV": "P", "FN": "S", "VV": "F", "FO": "F", "VN": "V", "PV": "P", "FF": "P", "ON": "S", "PB": "S", "PK": "P", "OO": "P", "SP": "F", "VF": "H", "OV": "C", "BN": "P", "OH": "H", "NC": "F", "BH": "N", "CS": "C", "BC": "N", "OF": "N", "SN": "B", "FP": "F", "FV": "K", "HP": "H", "VB": "P", "FH": "F", "HF": "P", "BB": "O", "HH": "S", "PC": "O", "PP": "B", "VS": "B", "HC": "H", "NS": "N", "KF": "S", "BO": "V", "NP": "S", "NF": "K", "BS": "O", "KK": "O", "VC": "V", "KP": "K", "CK": "P", "HN": "F", "KN": "H", "KH": "N", "SB": "S", "NO": "K", "HK": "H", "BF": "V", "SV": "B", "CV": "P", "CO": "P", "FC": "O", "CP": "H", "CC": "N", "CN": "P", "SK": "V", "SS": "V", "VH": "B", "OS": "N", "FB": "H", "NB": "N", "SC": "K", "NV": "H", "HO": "S", "SO": "P", "PH": "C", "VO": "O", "OB": "O", "FK": "S", "PN": "P", "VK": "O", "NH": "N", "OC": "B", "BP": "O", "PF": "F", "KB": "K", "KV": "B", "PO": "N", "NN": "K", "CH": "O", "KC": "P", "OP": "V", "VP": "F", "OK": "P", "FS": "K", "CB": "S", "HB": "N", "KS": "O", "BK": "C", "BV": "O", "SH": "H", "PS": "N", "HS": "K", "KO": "N" };

console.log(input);
console.log(Insertions);

var Step = input;
var Count = {};
var Letters = [];
var Result = 0;

for (let i = 0; i < 10; i++) {
	let NextStep = Step[0];
	for (let j = 0; j < Step.length - 1; j++) NextStep += Insertions[Step.substring(j, j+2)] + Step[j+1];
	Step = NextStep;
	console.log(Step);
}

for (let j = 0; j < Step.length; j++) {
	if (!Count[Step[j]]) Count[Step[j]] = 0;
	Count[Step[j]]++;
}
console.log(Count);

for (let Letter of Object.keys(Count)) Letters.push({ "Letter": Letter, "Count": Count[Letter] });
Letters.sort((A, B) => A.Count - B.Count);
console.log(Letters);

Result = Letters[Letters.length-1].Count - Letters[0].Count;

console.log('Part 1 answer: ' + Result);

var Transform = {}
var TemplateCount = {};
Count = {};
Letters = [];
Result = 0;

for (let Template of Object.keys(Insertions)) {
	TemplateCount[Template] = 0;
	Transform[Template] = [ Template[0] + Insertions[Template], Insertions[Template] + Template[1] ];
}
console.log(Transform);

for (let i = 0; i < input.length - 1; i++) TemplateCount[input.substring(i, i+2)]++;
console.log(TemplateCount);

for (let i = 0; i < 40; i++) {
	let NextCount = {};
	for (let Template of Object.keys(TemplateCount)) NextCount[Template] = 0;	
	for (let Template of Object.keys(TemplateCount)) {
		NextCount[Transform[Template][0]] += TemplateCount[Template];
		NextCount[Transform[Template][1]] += TemplateCount[Template];
	}
	TemplateCount = NextCount
}
console.log(TemplateCount);

for (let Template of Object.keys(TemplateCount)) {
	if (!Count[Template[1]]) Count[Template[1]] = 0;
	Count[Template[1]] += TemplateCount[Template];
}
Count[input[0]]++;
console.log(Count);

for (let Letter of Object.keys(Count)) Letters.push({ "Letter": Letter, "Count": Count[Letter] });
Letters.sort((A, B) => A.Count - B.Count);
console.log(Letters);

Result = Letters[Letters.length-1].Count - Letters[0].Count;

console.log('Part 2 answer: ' + Result);
