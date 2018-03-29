'use strict';

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var main = createCommonjsModule(function (module) {
var mapToArray = function (obj, fn) {
  var keys = Object.keys(obj);
  var ret = [];

  var len = keys.length;
  for (var i = 0; i < len; i++) {
    var key = keys[i];
    ret = ret.concat([fn(key, obj[key])]);
  }

  return ret
};

module.exports = mapToArray;
});

module.exports = main;
