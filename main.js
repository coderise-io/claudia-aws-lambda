/*global exports, console*/
exports.handler = function (event, context) {
	'use strict';
	console.log(event);
	context.succeed('Claudia Hello Lambda example using codeRISE!');
};
