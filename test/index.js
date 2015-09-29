var tape = require('tape');
var postcss = require('postcss');

var margin = require('..');

tape('postcss-margin-helpers', function(t) {

	var rule = createRule([
		'margin: 0 1 2 3'
	]);

	t.deepEqual(
		margin(rule),
		{
			top: '0',
			right: '1',
			bottom: '2',
			left: '3'
		},
		'resolves all props into an object'
	);

	t.equal(
		margin.top(rule),
		'0',
		'resolves a top margin'
	);

	t.equal(
		margin.right(rule),
		'1',
		'resolves a right margin'
	);

	t.equal(
		margin.bottom(rule),
		'2',
		'resolves a bottom margin'
	);

	t.equal(
		margin.left(rule),
		'3',
		'resolves a left margin'
	);

	rule = createRule([
		'margin: 0 1 2 3',
		'margin-top: 4',
		'margin-right: 5',
		'margin-bottom: 6',
		'margin-left: 7'
	]);

	t.deepEqual(
		margin(rule),
		{
			top: '4',
			right: '5',
			bottom: '6',
			left: '7'
		},
		'accumulates all resolved props into an object'
	);

	t.equal(
		margin.top(rule),
		'4',
		'resolves the last top margin'
	);

	t.equal(
		margin.right(rule),
		'5',
		'resolves the last right margin'
	);

	t.equal(
		margin.bottom(rule),
		'6',
		'resolves the last bottom margin'
	);

	t.equal(
		margin.left(rule),
		'7',
		'resolves the last left margin'
	);

	rule = createRule([
		'margin-top: 0',
		'margin: 5px 10px 20px',
		'margin-bottom: 40px'
	]);

	t.equal(
		margin.top(rule),
		'5px',
		'resolves the readme example\'s top margin'
	);

	t.equal(
		margin.right(rule),
		'10px',
		'resolves the readme example\'s right margin'
	);

	t.equal(
		margin.bottom(rule),
		'40px',
		'resolves the readme example\'s bottom margin'
	);

	t.equal(
		margin.left(rule),
		'10px',
		'resolves the readme example\'s left margin'
	);

	t.end();
});

function createRule(decls) {
	return postcss.parse('a {' + decls.join(';') + '}').first;
}
