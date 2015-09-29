var resolveProp = require('postcss-resolve-prop');
var parseSides = require('parse-css-sides');

[
	'top',
	'right',
	'bottom',
	'left'
].forEach(function(prop) {
	module.exports[prop] = function(rule) {
		return resolveProp(rule, 'margin-' + prop, {
			parsers: {
				margin: function(value) {
					return parseSides(value)[prop];
				}
			}
		});
	};
});
