# postcss-margin-helpers

<img align="right" width="135" height="95"
	title="Philosopher’s stone, logo of PostCSS"
	src="http://postcss.github.io/postcss/logo-leftp.png">

[![NPM version](http://img.shields.io/npm/v/postcss-margin-helpers.svg?style=flat)](https://www.npmjs.org/package/postcss-margin-helpers)
[![npm license](http://img.shields.io/npm/l/postcss-margin-helpers.svg?style=flat-square)](https://www.npmjs.org/package/postcss-margin-helpers)
[![Travis Build Status](https://img.shields.io/travis/jedmao/postcss-margin-helpers.svg?label=unix)](https://travis-ci.org/jedmao/postcss-margin-helpers)

[![npm](https://nodei.co/npm/postcss-margin-helpers.svg?downloads=true)](https://nodei.co/npm/postcss-margin-helpers/)

Margin helpers for [PostCSS](https://github.com/postcss/postcss).

## Installation

```
$ npm install postcss-margin-helpers [--save[-dev]]
```

## Usage

```js
var postcss = require('postcss');
var margin = require('postcss-margin-helpers');

var rule = postcss.parse([
	'a {',
	'  margin-top: 0;',
	'  margin: 5px 10px 20px;',
	'  margin-bottom: 40px;',
	'}'
].join('')).first;

margin.top(rule);    // 5px
margin.right(rule);  // 10px
margin.bottom(rule); // 40px
margin.left(rule);   // 10px
```

## Testing

```
$ npm test
```

This will run tests and generate a code coverage report. Anything less than 100% coverage will throw an error.
