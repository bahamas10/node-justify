justify
=======

Left or right (or both) justify text using a custom width and character

Usage
-----

``` js
var justify = require('justify');

justify('foo', 'bar', 10);
// => "foo    bar"

justify('foo', 'bar', 15);
// => "foo         bar"
```

You can pass a custom character or string to use a spacer as well,
`justify` will cycle through all characters in `c` until a string of the
right size is created

``` js
justify('foo', 'bar', 15, {c: '.'});
// => "foo.........bar"

justify('foo', 'bar', 15, {c: '-='});
// => "foo-=-=-=-=-bar"
```

You can also omit the first or second argument (or both) to left or right
justify a string only

``` js
justify('foo', null, 10);
// => "foo       "

justify(null, 'bar', 10);
// => "       bar"

justify(null, null, 10);
// => "          "

justify(null, null, 20, {c: '#'});
// => "####################"
```

This module also gracefully handles size constraint violations

``` js
justify('foo', 'bar', 7);
// => "foo bar"

justify('foo', 'bar', 6);
// => "foobar"

justify('foo', 'bar', 5);
// => "foobar"

justify('foo', 'bar', 5, {throw: true});
// => [Error: justify: strings cannot fit into width 2]
```

Function
--------

### `justify(left, right, width, opts)`


All arguments are optional

- `left`: the left string, defaults to `''`
- `right`: the right string, defaults to `''`
- `width`: the width (the resulting string length), defaults to `80`
- `opts.c`: the pad characters to use, defaults to `' '`
- `opts.throw`: throw an error if `width` is too small to hold `left` and `right`, defaults to `false`

Installation
------------

    npm install justify

License
-------

MIT
