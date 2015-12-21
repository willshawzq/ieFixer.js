;(function(w,d,undefined){
  'use strict';
  //
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  /**
  *Object.create(proto[, propertiesObject])
  *description:creates a new object with the specified prototype object and properties.
  *example: Object.create({}, {p: { value: 42, writable: true,eumerable: true, configurable: true });
  *todo: just accecpt a argument now, propertiesObject to add;
  */
  if (typeof Object.create != 'function') {
    Object.create = (function() {
      function Temp() {}

      return function (O) {
        // 1. If Type(O) is not Object or Null throw a TypeError exception.
        if (typeof O != 'object') {
          throw TypeError('Object prototype may only be an Object or null');
        }
        Temp.prototype = O;
        var obj = new Temp();
        Temp.prototype = null;
        if (arguments.length > 1) {
          var Properties = Object(arguments[1]);
          for (var prop in Properties) {
            if (hasOwnProperty.call(Properties, prop)) {
              obj[prop] = Properties[prop];
            }
          }
        }
        return obj;
      };
    })();
  }

  /**
  *Object.keys(obj)
  *description: returns an array whose elements are strings corresponding to the enumerable properties found directly upon object.
  *example: Object.create({}, {p: { value: 42, writable: true,eumerable: true, configurable: true });
  *todo: just accecpt a argument now, propertiesObject to add;
  */
  if (!Object.keys) {
    Object.keys = (function() {
      var hasOwnProperty = Object.prototype.hasOwnProperty,
          hasDontEnumBug = !({ toString: null }).propertyIsEnumerable('toString'),
          dontEnums = [
            'toString',
            'toLocaleString',
            'valueOf',
            'hasOwnProperty',
            'isPrototypeOf',
            'propertyIsEnumerable',
            'constructor'
          ],
          dontEnumsLength = dontEnums.length;

      return function(obj) {
        if (typeof obj !== 'object' && (typeof obj !== 'function' || obj === null)) {
          throw new TypeError('Object.keys called on non-object');
        }

        var result = [], prop, i;

        for (prop in obj) {
          if (hasOwnProperty.call(obj, prop)) {
            result.push(prop);
          }
        }

        if (hasDontEnumBug) {
          for (i = 0; i < dontEnumsLength; i++) {
            if (hasOwnProperty.call(obj, dontEnums[i])) {
              result.push(dontEnums[i]);
            }
          }
        }
        return result;
      };
    }());
  }
})(window, d, undefined);
