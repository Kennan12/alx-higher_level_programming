#!/usr/bin/node
/**
 * fetches the character name from https://swapi-api.alx-tools.com/
 * api/people/5/?format=json
 * you must use API
 */
const $ = window.$;
const url = 'https://swapi-api.alx-tools.com/api/people/5/?format=json';
$.get(url, function (data) {
	const name = data.name;
	$('DIV#character').text(name);
});
