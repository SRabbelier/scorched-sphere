goog.provide('game.Point');



/**
 * @constructor
 */
game.Point = function() {
  /** @private {number} */
  this.x_ = 0;
  /** @private {number} */
  this.y_ = 0;
};


/**
 * @param {boolean=} opt_unit
 * @return {number|string}
 */
game.Point.prototype.getX = function(opt_unit) {
  var x = this.x_;
  if (opt_unit) x += opt_unit;
  return x;
};


/**
 * @param {boolean=} opt_unit
 * @return {number|string}
 */
game.Point.prototype.getY = function(opt_unit) {
  var y = this.y_;
  if (opt_unit) y += opt_unit;
  return y;
};