var assert = require('assert');

var justify = require('../');

var tests = [
  {args: ['foo', 'bar',     10, '.'],  expect: 'foo....bar'},
  {args: ['foo', 'bar',     10, ' '],  expect: 'foo    bar'},
  {args: ['foo', 'bar',     10, '-='], expect: 'foo-=-=bar'},
  {args: ['foo', 'bar',     11, '-='], expect: 'foo-=-=-bar'},
  {args: [null,  'bar',     10, '.'],  expect: '.......bar'},
  {args: ['foo', null,      10, '.'],  expect: 'foo.......'},
  {args: [null,  null,      10, '.'],  expect: '..........'},
  {args: [NaN,   undefined, 10, '.'],  expect: '..........'},
  {args: ['foo', null,      10, null], expect: 'foo       '},
  {args: ['foo', 'bar',     6, null],  expect: 'foobar'},
  {args: ['foo', 'bar',     5, null],  expect: 'foobar'},
  {args: ['foo', 'bar',     4, null],  expect: 'foobar'},
];

tests.forEach(function(test) {
  console.log('testing %s', test.expect);
  var a = test.args;
  var s = justify(a[0], a[1], a[2], {c: a[3]});
  assert.equal(s, test.expect);
});

assert.throws(function() {
  console.log('testing throws');
  justify('foo', 'bar', 5, {throw: true});
});
assert.doesNotThrow(function() {
  console.log('testing does not throw');
  justify('foo', 'bar', 5, {throw: false});
  justify('foo', 'bar', 5);
});
