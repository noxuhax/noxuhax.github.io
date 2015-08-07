require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"LayerAnchor":[function(require,module,exports){

/*
top, right, bottom, left, centerX, centerY, center
 */
var LayerAnchor, calculateFrame,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

calculateFrame = function(layer, rules) {
  var def, frame, parentSize, val;
  val = (function(_this) {
    return function(rule) {
      var value;
      value = rules[rule];
      if (_.isFunction(value)) {
        value = value();
      }
      return value;
    };
  })(this);
  def = function(rule) {
    return _.isNumber(val(rule));
  };
  if (def("center")) {
    rules["centerX"] = val("center");
    rules["centerY"] = val("center");
  }
  parentSize = layer.superLayer;
  if (parentSize == null) {
    parentSize = Screen;
  }
  frame = layer.frame;
  if (def("left") && def("right")) {
    frame.x = val("left");
    frame.width = parentSize.width - val("left") - val("right");
  } else if (def("left")) {
    frame.x = val("left");
  } else if (def("right")) {
    frame.x = parentSize.width - frame.width - val("right");
  } else if (def("centerX")) {
    frame.x = (parentSize.width / 2) - (frame.width / 2) + val("centerX");
  }
  if (def("top") && def("bottom")) {
    frame.y = val("top");
    frame.height = parentSize.height - val("top") - val("bottom");
  } else if (def("top")) {
    frame.y = val("top");
  } else if (def("bottom")) {
    frame.y = parentSize.height - frame.height - val("bottom");
  } else if (def("centerY")) {
    frame.y = (parentSize.height / 2) - (frame.height / 2) + val("centerY");
  }
  return frame;
};

LayerAnchor = (function(superClass) {
  extend(LayerAnchor, superClass);

  function LayerAnchor(layer1, rules1) {
    this.layer = layer1;
    this.rules = rules1;
    this._setNeedsUpdate = bind(this._setNeedsUpdate, this);
    this._addListener = bind(this._addListener, this);
    this._setupListener = bind(this._setupListener, this);
    this.layer.on("change:superLayer", this._setupListener);
    this._setNeedsUpdate();
    this._removeListeners();
    this._setupListener();
  }

  LayerAnchor.prototype._setupListener = function() {
    this._removeListeners();
    if (this.layer.superLayer) {
      this._addListener(this.layer.superLayer, "change:x", this._setNeedsUpdate);
      this._addListener(this.layer.superLayer, "change:y", this._setNeedsUpdate);
      this._addListener(this.layer.superLayer, "change:width", this._setNeedsUpdate);
      return this._addListener(this.layer.superLayer, "change:height", this._setNeedsUpdate);
    } else {
      return this._addListener(Screen, "resize", this._setNeedsUpdate);
    }
  };

  LayerAnchor.prototype._addListener = function(obj, eventName, listener) {
    var base;
    obj.on(eventName, listener);
    if ((base = this._currentListeners)[obj] == null) {
      base[obj] = [];
    }
    return this._currentListeners[obj].push(eventName);
  };

  LayerAnchor.prototype._removeListeners = function() {
    var eventName, obj, ref;
    ref = this._currentListeners;
    for (obj in ref) {
      eventName = ref[obj];
      obj.off(eventName, this._setNeedsUpdate);
    }
    return this._currentListeners = {};
  };

  LayerAnchor.prototype._setNeedsUpdate = function() {
    return this.layer.frame = calculateFrame(this.layer, this.rules);
  };

  return LayerAnchor;

})(Framer.EventEmitter);

Layer.prototype.anchor = function(rules) {
  return this._anchor != null ? this._anchor : this._anchor = new LayerAnchor(this, rules);
};

_.extend(exports, {
  LayerAnchor: LayerAnchor,
  calculateFrame: calculateFrame
});



},{}],"myModule":[function(require,module,exports){
exports.myVar = "myVariable";

exports.myFunction = function() {
  return print("myFunction is running");
};

exports.myArray = [1, 2, 3];



},{}]},{},[])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvQWxleEJ5c3Ryb3YvRHJvcGJveC9IJkYvSCZGIFYyL21wMS5mcmFtZXIvbW9kdWxlcy9MYXllckFuY2hvci5jb2ZmZWUiLCIvVXNlcnMvQWxleEJ5c3Ryb3YvRHJvcGJveC9IJkYvSCZGIFYyL21wMS5mcmFtZXIvbW9kdWxlcy9teU1vZHVsZS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUFBOztHQUFBO0FBQUEsSUFBQSwyQkFBQTtFQUFBOzs2QkFBQTs7QUFBQSxjQUlBLEdBQWlCLFNBQUMsS0FBRCxFQUFRLEtBQVIsR0FBQTtBQUVoQixNQUFBLDJCQUFBO0FBQUEsRUFBQSxHQUFBLEdBQU0sQ0FBQSxTQUFBLEtBQUEsR0FBQTtXQUFBLFNBQUMsSUFBRCxHQUFBO0FBQ0wsVUFBQSxLQUFBO0FBQUEsTUFBQSxLQUFBLEdBQVEsS0FBTSxDQUFBLElBQUEsQ0FBZCxDQUFBO0FBQ0EsTUFBQSxJQUFtQixDQUFDLENBQUMsVUFBRixDQUFhLEtBQWIsQ0FBbkI7QUFBQSxRQUFBLEtBQUEsR0FBUSxLQUFBLENBQUEsQ0FBUixDQUFBO09BREE7QUFFQSxhQUFPLEtBQVAsQ0FISztJQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQU4sQ0FBQTtBQUFBLEVBS0EsR0FBQSxHQUFNLFNBQUMsSUFBRCxHQUFBO1dBQ0wsQ0FBQyxDQUFDLFFBQUYsQ0FBVyxHQUFBLENBQUksSUFBSixDQUFYLEVBREs7RUFBQSxDQUxOLENBQUE7QUFRQSxFQUFBLElBQUcsR0FBQSxDQUFJLFFBQUosQ0FBSDtBQUNDLElBQUEsS0FBTSxDQUFBLFNBQUEsQ0FBTixHQUFtQixHQUFBLENBQUksUUFBSixDQUFuQixDQUFBO0FBQUEsSUFDQSxLQUFNLENBQUEsU0FBQSxDQUFOLEdBQW1CLEdBQUEsQ0FBSSxRQUFKLENB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QSxTQUFBLFVBQUE7MkJBQUE7QUFDQyxNQUFBLEdBQUcsQ0FBQyxHQUFKLENBQVEsU0FBUixFQUFtQixJQUFDLENBQUEsZUFBcEIsQ0FBQSxDQUREO0FBQUEsS0FBQTtXQUVBLElBQUMsQ0FBQSxpQkFBRCxHQUFxQixHQUhKO0VBQUEsQ0F6QmxCLENBQUE7O0FBQUEsd0JBK0JBLGVBQUEsR0FBaUIsU0FBQSxHQUFBO1dBQ2hCLElBQUMsQ0FBQSxLQUFLLENBQUMsS0FBUCxHQUFlLGNBQUEsQ0FBZSxJQUFDLENBQUEsS0FBaEIsRUFBdUIsSUFBQyxDQUFBLEtBQXhCLEVBREM7RUFBQSxDQS9CakIsQ0FBQTs7cUJBQUE7O0dBRnlCLE1BQU0sQ0FBQyxhQTdDakMsQ0FBQTs7QUFBQSxLQWlGSyxDQUFBLFNBQUUsQ0FBQSxNQUFQLEdBQWdCLFNBQUMsS0FBRCxHQUFBO2dDQUNmLElBQUMsQ0FBQSxVQUFELElBQUMsQ0FBQSxVQUFlLElBQUEsV0FBQSxDQUFZLElBQVosRUFBZSxLQUFmLEVBREQ7QUFBQSxDQWpGaEIsQ0FBQTs7QUFBQSxDQW9GQyxDQUFDLE1BQUYsQ0FBUyxPQUFULEVBQ0M7QUFBQSxFQUFBLFdBQUEsRUFBYSxXQUFiO0FBQUEsRUFDQSxjQUFBLEVBQWdCLGNBRGhCO0NBREQsQ0FwRkEsQ0FBQTs7Ozs7QUNJQSxPQUFPLENBQUMsS0FBUixHQUFnQixZQUFoQixDQUFBOztBQUFBLE9BRU8sQ0FBQyxVQUFSLEdBQXFCLFNBQUEsR0FBQTtTQUNwQixLQUFBLENBQU0sdUJBQU4sRUFEb0I7QUFBQSxDQUZyQixDQUFBOztBQUFBLE9BS08sQ0FBQyxPQUFSLEdBQWtCLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBTGxCLENBQUEiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiIyMjXG50b3AsIHJpZ2h0LCBib3R0b20sIGxlZnQsIGNlbnRlclgsIGNlbnRlclksIGNlbnRlclxuIyMjXG5cbmNhbGN1bGF0ZUZyYW1lID0gKGxheWVyLCBydWxlcykgLT5cblx0XG5cdHZhbCA9IChydWxlKSA9PlxuXHRcdHZhbHVlID0gcnVsZXNbcnVsZV1cblx0XHR2YWx1ZSA9IHZhbHVlKCkgaWYgXy5pc0Z1bmN0aW9uKHZhbHVlKVxuXHRcdHJldHVybiB2YWx1ZVxuXHRcdFxuXHRkZWYgPSAocnVsZSkgLT5cblx0XHRfLmlzTnVtYmVyKHZhbChydWxlKSlcblx0XG5cdGlmIGRlZihcImNlbnRlclwiKVxuXHRcdHJ1bGVzW1wiY2VudGVyWFwiXSA9IHZhbChcImNlbnRlclwiKVxuXHRcdHJ1bGVzW1wiY2VudGVyWVwiXSA9IHZhbChcImNlbnRlclwiKVxuXHRcblx0cGFyZW50U2l6ZSA9IGxheWVyLnN1cGVyTGF5ZXJcblx0cGFyZW50U2l6ZSA/PSBTY3JlZW5cblx0XG5cdGZyYW1lID0gbGF5ZXIuZnJhbWVcblx0XG5cdGlmIGRlZihcImxlZnRcIikgYW5kIGRlZihcInJpZ2h0XCIpXG5cdFx0ZnJhbWUueCA9IHZhbChcImxlZnRcIilcblx0XHRmcmFtZS53aWR0aCA9IHBhcmVudFNpemUud2lkdGggLSB2YWwoXCJsZWZ0XCIpIC0gdmFsKFwicmlnaHRcIilcblx0ZWxzZSBpZiBkZWYoXCJsZWZ0XCIpXG5cdFx0ZnJhbWUueCA9IHZhbChcImxlZnRcIilcblx0ZWxzZSBpZiBkZWYoXCJyaWdodFwiKVxuXHRcdGZyYW1lLnggPSBwYXJlbnRTaXplLndpZHRoIC0gZnJhbWUud2lkdGggLSB2YWwoXCJyaWdodFwiKVxuXHRlbHNlIGlmIGRlZihcImNlbnRlclhcIilcblx0XHRmcmFtZS54ID0gKHBhcmVudFNpemUud2lkdGggLyAyKSAtIChmcmFtZS53aWR0aCAvIDIpICsgdmFsKFwiY2VudGVyWFwiKVxuXHRcblx0aWYgZGVmKFwidG9wXCIpIGFuZCBkZWYoXCJib3R0b21cIilcblx0XHRmcmFtZS55ID0gdmFsKFwidG9wXCIpXG5cdFx0ZnJhbWUuaGVpZ2h0ID0gcGFyZW50U2l6ZS5oZWlnaHQgLSB2YWwoXCJ0b3BcIikgLSB2YWwoXCJib3R0b21cIilcblx0ZWxzZSBpZiBkZWYoXCJ0b3BcIilcblx0XHRmcmFtZS55ID0gdmFsKFwidG9wXCIpXG5cdGVsc2UgaWYgZGVmKFwiYm90dG9tXCIpXG5cdFx0ZnJhbWUueSA9IHBhcmVudFNpemUuaGVpZ2h0IC0gZnJhbWUuaGVpZ2h0IC0gdmFsKFwiYm90dG9tXCIpXG5cdGVsc2UgaWYgZGVmKFwiY2VudGVyWVwiKVxuXHRcdGZyYW1lLnkgPSAocGFyZW50U2l6ZS5oZWlnaHQgLyAyKSAtIChmcmFtZS5oZWlnaHQgLyAyKSArIHZhbChcImNlbnRlcllcIilcblx0XHRcblx0cmV0dXJuIGZyYW1lXG5cbmNsYXNzIExheWVyQW5jaG9yIGV4dGVuZHMgRnJhbWVyLkV2ZW50RW1pdHRlclxuXG5cdGNvbnN0cnVjdG9yOiAoQGxheWVyLCBAcnVsZXMpIC0+XG5cblx0XHRAbGF5ZXIub24oXCJjaGFuZ2U6c3VwZXJMYXllclwiLCBAX3NldHVwTGlzdGVuZXIpXG5cdFx0QF9zZXROZWVkc1VwZGF0ZSgpXG5cdFx0IyBAX25lZWRzVXBkYXRlID0gZmFsc2Vcblx0XHRAX3JlbW92ZUxpc3RlbmVycygpXG5cdFx0QF9zZXR1cExpc3RlbmVyKClcblx0XHRcblx0X3NldHVwTGlzdGVuZXI6ID0+XG5cdFx0XG5cdFx0QF9yZW1vdmVMaXN0ZW5lcnMoKVxuXHRcdFxuXHRcdGlmIEBsYXllci5zdXBlckxheWVyXG5cdFx0XHRAX2FkZExpc3RlbmVyKEBsYXllci5zdXBlckxheWVyLCBcImNoYW5nZTp4XCIsIEBfc2V0TmVlZHNVcGRhdGUpXG5cdFx0XHRAX2FkZExpc3RlbmVyKEBsYXllci5zdXBlckxheWVyLCBcImNoYW5nZTp5XCIsIEBfc2V0TmVlZHNVcGRhdGUpXG5cdFx0XHRAX2FkZExpc3RlbmVyKEBsYXllci5zdXBlckxheWVyLCBcImNoYW5nZTp3aWR0aFwiLCBAX3NldE5lZWRzVXBkYXRlKVxuXHRcdFx0QF9hZGRMaXN0ZW5lcihAbGF5ZXIuc3VwZXJMYXllciwgXCJjaGFuZ2U6aGVpZ2h0XCIsIEBfc2V0TmVlZHNVcGRhdGUpXG5cdFx0ZWxzZVxuXHRcdFx0QF9hZGRMaXN0ZW5lcihTY3JlZW4sIFwicmVzaXplXCIsIEBfc2V0TmVlZHNVcGRhdGUpXG5cdFx0XHRcblx0X2FkZExpc3RlbmVyOiAob2JqLCBldmVudE5hbWUsIGxpc3RlbmVyKSA9PlxuXHRcdG9iai5vbihldmVudE5hbWUsIGxpc3RlbmVyKVxuXHRcdEBfY3VycmVudExpc3RlbmVyc1tvYmpdID89IFtdXG5cdFx0QF9jdXJyZW50TGlzdGVuZXJzW29ial0ucHVzaChldmVudE5hbWUpXG5cdFxuXHRfcmVtb3ZlTGlzdGVuZXJzOiAtPlxuXHRcdGZvciBvYmosIGV2ZW50TmFtZSBvZiBAX2N1cnJlbnRMaXN0ZW5lcnNcblx0XHRcdG9iai5vZmYoZXZlbnROYW1lLCBAX3NldE5lZWRzVXBkYXRlKVxuXHRcdEBfY3VycmVudExpc3RlbmVycyA9IHt9XG5cdFx0XG5cdFxuXHRfc2V0TmVlZHNVcGRhdGU6ID0+XG5cdFx0QGxheWVyLmZyYW1lID0gY2FsY3VsYXRlRnJhbWUoQGxheWVyLCBAcnVsZXMpXG5cdFxuTGF5ZXI6OmFuY2hvciA9IChydWxlcykgLT5cblx0QF9hbmNob3IgPz0gbmV3IExheWVyQW5jaG9yKEAsIHJ1bGVzKVxuXG5fLmV4dGVuZCBleHBvcnRzLFxuXHRMYXllckFuY2hvcjogTGF5ZXJBbmNob3Jcblx0Y2FsY3VsYXRlRnJhbWU6IGNhbGN1bGF0ZUZyYW1lIiwiIyBBZGQgdGhlIGZvbGxvd2luZyBsaW5lIHRvIHlvdXIgcHJvamVjdCBpbiBGcmFtZXIgU3R1ZGlvLiBcbiMgbXlNb2R1bGUgPSByZXF1aXJlIFwibXlNb2R1bGVcIlxuIyBSZWZlcmVuY2UgdGhlIGNvbnRlbnRzIGJ5IG5hbWUsIGxpa2UgbXlNb2R1bGUubXlGdW5jdGlvbigpIG9yIG15TW9kdWxlLm15VmFyXG5cbmV4cG9ydHMubXlWYXIgPSBcIm15VmFyaWFibGVcIlxuXG5leHBvcnRzLm15RnVuY3Rpb24gPSAtPlxuXHRwcmludCBcIm15RnVuY3Rpb24gaXMgcnVubmluZ1wiXG5cbmV4cG9ydHMubXlBcnJheSA9IFsxLCAyLCAzXSJdfQ==
