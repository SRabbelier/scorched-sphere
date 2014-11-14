goog.provide('game.core.math.Point');



/**
 * @constructor
 * @param {?number=} opt_x
 * @param {?number=} opt_y
 */
game.core.math.Point = function(opt_x, opt_y) {
  /** @private {number} */
  this.x_ = opt_x || 0;
  /** @private {number} */
  this.y_ = opt_y || 0;
};


/**
 * @param {boolean=} opt_unit
 * @return {number|string}
 */
game.core.math.Point.prototype.getX = function(opt_unit) {
  var x = this.x_;
  if (opt_unit) x += opt_unit;
  return x;
};


/** @param {number} x */
game.core.math.Point.prototype.setX = function(x) {
  this.x_ = x;
};


/**
 * @param {boolean=} opt_unit
 * @return {number|string}
 */
game.core.math.Point.prototype.getY = function(opt_unit) {
  var y = this.y_;
  if (opt_unit) y += opt_unit;
  return y;
};


/** @param {number} y */
game.core.math.Point.prototype.setY = function(y) {
  this.y_ = y;
};