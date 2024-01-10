#!/usr/bin/node
/**
 * fetches the character name from https://swapi-api.alx-tools.com/
 * api/films/?format=json
 * you must use API
 */
const $ = window.$;
const url = 'https://swapi-api.alx-tools.com/api/films/?format=json';
$.get(url, function (data) {
        const result = data.result;
        $.each(results, function (key, value) {
		$('UL#list_movies').append('<li>' + value.title + '</li>');
	});
});
