// import { isPrimitive } from "util";

// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function (obj) {
  //null
  if (obj === null) {
    return 'null';
  }

  //functions && undefined
  if (obj === undefined || typeof obj === 'function') {
    return;
  }

  // strings 
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }

  // arrays
  if (Array.isArray(obj)) {
    if (obj.length) {
      var results = [];
      for (var i = 0; i < obj.length; i++) {
        results.push(stringifyJSON(obj[i]));
      }
      return '[' + results.join(",") + ']';
    } else {

    }
    return '[]';
  }

  // objects
  if (typeof obj === 'object') {
    var keys = Object.keys(obj);
    if (keys.length) {
      let results = '';

      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        if ((obj[key]) === undefined || typeof key === 'function' || typeof obj[key] === 'function') {
        } else if (i === keys.length - 1 || key.length === 0) {
          results += stringifyJSON(key) + ':' + stringifyJSON(obj[key]);
        } else {
          results += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
        }
      }
      return '{' + results + '}';
    } else {
      return '{}';
    }
  }

  // all others
  return obj.toString();
};



