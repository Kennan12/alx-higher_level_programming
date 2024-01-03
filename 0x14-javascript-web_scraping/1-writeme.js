#!/usr/bin/node
/**
 * write a strings to a file
 * first arguments is the file path
 * second argument is the strings to write
 * if an error occurred while writing, print the error object
 */
const myArgs = process.argv.slice(2);
const fs = require('fs');
fs.writeFile(myArgs[0], myArgs[1], 'utf8', (error) => {
	if (error)
	{
		console.log(error);
	}
});
