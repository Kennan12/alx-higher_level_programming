#!/usr/bin/node

const r = require('request');
const url = 'https://swapi-api.hbtn.io/api/films/' + process.argv[2];

r.get(url, (error, response, body) => {
	if (error) console.log(error);
	else {
		JSON.parse(body).characters.forEach(character => {
			r.get(character, (error, response, body) => {
				if (error) console.log(error);
				else console.log(JSON.parse(body).name);
			});
		});
	}
});
