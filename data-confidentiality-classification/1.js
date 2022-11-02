saved = [];
var count = 0;

let new_object = {
	a:"-si",
	b:"-hsi",
	ccc:"-lsi"
}

let new_object2 = {
	a:"aaa-qsi",
	b:"no",
	ccc:"ccccc-lsi"
}

saved.push(new_object);
saved.push(new_object2);

const fs = require('fs');

fs.writeFile('test.json', JSON.stringify(saved), (err, data) => {
	if (err) {
		console.error(err);
	}
});


fs.readFile('test.json', 'utf8', (err, data) => {
	if (err) {
		console.error(err);
	}
	customer = JSON.parse(data);
	console.log(customer[1]);
});
