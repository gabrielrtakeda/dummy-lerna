"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var fibonacci = function fibonacci(l) {
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var c = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

  if (l > 1) {
    return c + fibonacci(l - 1, c, b + c);
  }
  return c;
};

exports.default = fibonacci;