'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var compound = function compound(amount, fee, days) {
  if (!amount) throw Error('`amount` is required.');
  if (!fee) throw Error('`fee` is required.');
  if (!days) throw Error('`days` is required.');

  return amount * Math.pow(1 + fee, days);
};

exports.default = compound;