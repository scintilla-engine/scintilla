
/**
* Simple class for rectangle. Usage for collision.
* @class Rect
* @constructor
*/
Scintilla.Rect = function(x,y,width,height) {

  x = x || 0;
  y = y || 0;
  width = width || 0;
  height = height || 0;

  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
}


Scintilla.Rect.prototype = {

  intersects : function(rect) {

      return Scintilla.Rect.intersects(this, rect);

  },

  contains : function(x,y) {

    return Scintilla.Rect.contains(this,x,y);

  },

  set : function(x,y,width,height) {

    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

  }

};

Scintilla.Rect.prototype.constructor = Scintilla.Rect;

Scintilla.Rect.intersects = function(rect1, rect2) {

  if (rect1.width <= 0 || rect1.height <= 0 || rect2.width <= 0 || rect2.height <= 0)
    return false;

  return    !(rect1.x > rect2.x + rect2.width ||
             rect1.x + rect1.width < rect2.x ||
             rect1.y > rect2.y + rect2.height ||
             rect1.y + rect1.height < rect2.y);
};

Scintilla.Rect.contains = function(rect, x, y) {

  if (rect.width <= 0 && rect.height <= 0 )
    return false;

  return (x > rect.x &&
          x < rect.x + rect.width &&
          y >= rect.y &&
          y < rect.y + rect.height);

};

Scintilla.Rect.intersectionArea = function(rect1,rect2) {

    var out = new Scintilla.Rect();

    if (Scintilla.Rect.intersects(rect1,rect2)) {

       out.y = Math.max(a.y, b.y);
       out.x = Math.max(a.x, b.x);
       out.width = Math.min(a.x + a.width, b.x + b.width) - out.x;
       out.height = Math.min(a.y + a.height, b.y + b.height) - out.y;

    }

    return out;

}

Scintilla.Rect.centerPoint = function() {

  var vec2 = {};
  vec.x = this.x + this.width / 2;
  vec.y = this.y + this.height / 2;
  return vec2;

}
