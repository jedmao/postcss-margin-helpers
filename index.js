var resolveProp = require('postcss-resolve-prop');
var parseSides = require('parse-css-sides');
var t = require('tcomb-postcss');

var helpers = {};

[
	'top',
	'right',
	'bottom',
	'left'
].forEach(function(prop) {
	helpers[prop] = t.func(t.Rule, t.Any).of(
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

module.exports = t.func(t.Rule, t.Object).of(
	function(rule) {
		return resolveProp(rule, 'margin', {
			isObjectMode: true,
			parsers: {
				margin: function(value) {
					return parseSides(value);
				},
				'margin-top': function(value) {
					return { top: value };
				},
				'margin-right': function(value) {
					return { right: value };
				},
				'margin-bottom': function(value) {
					return { bottom: value };
				},
				'margin-left': function(value) {
					return { left: value };
				}
			}
		});
	}
);

Object.keys(helpers).forEach(function(key) {
	module.exports[key] = helpers[key];
});
