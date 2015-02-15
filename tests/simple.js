var assert = require('assert');

var justify = require('../');

assert.equal(justify('foo', 'bar', 20), 'foo              bar');
