module.exports = justify;

function justify(left, right, width, opts) {
  left = left || '';
  right = right || '';
  width = width || 80;
  opts = opts || {};
  var c = (opts.c || ' ').split('');

  var s = left;

  width -= left.length;

  // no room to pad
  if (width <= right.length) {
    if (opts.throw)
      throw new Error('justify: strings cannot fit into width ' + width);
    else
      return s + right;
  }

  // pad the string with `c`
  var i = 0;
  while (--width >= right.length)
    s += c[i++ % c.length];

  // add the right string
  s += right;

  // return the new string
  return s;
}
