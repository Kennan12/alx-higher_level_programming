#!/usr/bin/node

exports.addMeMayybe = function (number, theFunction) {
	number++;
	theFunction(number);
};
