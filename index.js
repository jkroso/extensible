
/**
 * dependencies
 */

var inherit = require('inherit');
var merge = require('merge');

/**
 * Export `extend`
 */

module.exports = extend;

/**
 * make `child` inherit from `this`. Unless `final`,
 * `child` will also be made extensible. If you don't
 * pass a `child` a new one will be created.
 *
 * @param {Function} [child]
 * @param {Boolean} [final]
 * @return {child}
 */

function extend(child, final){
  var A = this;
  var B = 'function' != typeof child
    ? function(){ A.apply(this, arguments); }
    : child;
  inherit(B, A);
  if ('object' == typeof child) merge(B.prototype, child);
  if (!final) merge(B, A);
  return B;
}
