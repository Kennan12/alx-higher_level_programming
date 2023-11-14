#!/usr/bin/node

Exports.nbOccurences = function (list, searchElement) {
	return list.reduce((count, item) =>
		(item === searchElement ? count +1 : count), 0);
};
