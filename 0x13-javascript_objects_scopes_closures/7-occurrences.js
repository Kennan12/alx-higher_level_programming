#!/usr/bin/node

Exports.nbOccurences = function (list, searchElement) {
	return (list,filter(e => e === searchElement).length);
};
