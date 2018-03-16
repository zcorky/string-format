'use strict';

/**
 * string format for js, like python
 * @param {*} map 
 */

String.prototype.format = function format() {
  var map = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var args = Array.prototype.slice.call(arguments);
  if (args.length > 1) {
    var index = 0;
    return this.replace(/{([^}]*)}/g, function () {
      return typeof args[index] !== 'undefined' ? args[index++] : '';
    });
  }

  if (Array.isArray(map)) {
    var _index = 0;
    return this.replace(/{([^}]*)}/g, function () {
      return typeof map[_index] !== 'undefined' ? map[_index++] : '';
    });
  }

  return this.replace(/{([^}]*)}/g, function (_, key) {
    return typeof map[key] !== 'undefined' ? map[key] : '';
  });
};