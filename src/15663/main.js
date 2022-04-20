(() => {
	const readline = require('readline');
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
	});
	const buffer = [];
	rl.on('line', (line) => {
		buffer.push(line);
	});
	rl.on('close', () => {
		const input = buffer.map((x) => x.split(' ').map((x) => parseInt(x, 10)));
		main(input);
	});
})();

const main = ([[n, m], input]) => {
	let p = [];
	input.sort((a, b) => a - b);
	const fn = (t, x) => {
		if (x > n) {
			return;
		}
		if (t.length === m) {
			const q = t.map((x) => input[x]).join(' ');
			if (!p.includes(q)) {
				p.push(q);
			}
			return;
		}
		for (let i = 0; i < n; ++i) {
			if (t.includes(i)) {
				continue;
			}
			t.push(i);
			fn(t, i);
			t.pop();
		}
	};
	fn([], 0);
	console.log(p.join('\n'));
};
