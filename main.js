/*global exports, console*/
exports.handler = function (event, context) {
	'use strict';
	console.log(event);
	context.succeed('Claudia AWS Lambda example using codeRISE!');
};
