var resolveProp = require('postcss-resolve-prop');
var parseSides = require('parse-css-sides');
var t = require('tcomb-postcss');

[
	'top',
	'right',
	'bottom',
	'left'
].forEach(function(prop) {
	module.exports[prop] = t.func(t.Container, t.Any).of(
		function(rule) {
			return resolveProp(rule, 'margin-' + prop, {
				parsers: {
					margin: function(value) {
						return parseSides(value)[prop];
					}
				}
			});
		}
	);
});
