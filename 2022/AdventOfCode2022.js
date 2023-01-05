
const readline = require('readline').createInterface({
	input:  process.stdin,
	output: process.stdout
});

const keypress = async () => {
	console.log('\nPress any key to continue...');
	process.stdin.setRawMode(true);
	process.stdin.resume();
	return new Promise(resolve => process.stdin.once('data', () => {
		process.stdin.setRawMode(false);
		resolve();
	}))
}

async function Main() {

	while (true) {

		console.clear();
		let day = await new Promise(resolve => { readline.question('Advent of Code 2022!\n\nWhat puzzle do you want to execute?\n\n[Digit day number or q to Quit]: ', resolve); });

		if (day == 'q') break;
		if (isNaN(day) || parseInt(day) < 1 || parseInt(day) > 25) continue;

		let cached = Object.keys(require.cache).find(key => key.endsWith(`day${day.padStart(2, '0')}.js`));
		if (cached) delete require.cache[cached];

		require(`./day${day.padStart(2, '0')}.js`);

		await keypress();

	}

	readline.close();
	console.clear();

}

Main();
