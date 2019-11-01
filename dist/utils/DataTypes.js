"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isString = exports.isObject = void 0;

/**
 * Проверка на объект
 * @param {*} obj Любой объект, строка, null и т.д.
 */
const isObject = obj => typeof obj === 'object' && obj !== null;
/**
 * Проверка на строку
 * @param {*} obj Любой объект, строка и т.д.
 */


exports.isObject = isObject;

const isString = obj => typeof obj === 'string';

exports.isString = isString;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9EYXRhVHlwZXMuanMiXSwibmFtZXMiOlsiaXNPYmplY3QiLCJvYmoiLCJpc1N0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBSU8sTUFBTUEsUUFBUSxHQUFJQyxHQUFELElBQVMsT0FBT0EsR0FBUCxLQUFlLFFBQWYsSUFBMkJBLEdBQUcsS0FBRyxJQUEzRDtBQUVQOzs7Ozs7OztBQUlPLE1BQU1DLFFBQVEsR0FBSUQsR0FBRCxJQUFTLE9BQU9BLEdBQVAsS0FBZSxRQUF6QyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDQn9GA0L7QstC10YDQutCwINC90LAg0L7QsdGK0LXQutGCXHJcbiAqIEBwYXJhbSB7Kn0gb2JqINCb0Y7QsdC+0Lkg0L7QsdGK0LXQutGCLCDRgdGC0YDQvtC60LAsIG51bGwg0Lgg0YIu0LQuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgaXNPYmplY3QgPSAob2JqKSA9PiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyAmJiBvYmohPT1udWxsXHJcblxyXG4vKipcclxuICog0J/RgNC+0LLQtdGA0LrQsCDQvdCwINGB0YLRgNC+0LrRg1xyXG4gKiBAcGFyYW0geyp9IG9iaiDQm9GO0LHQvtC5INC+0LHRitC10LrRgiwg0YHRgtGA0L7QutCwINC4INGCLtC0LlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGlzU3RyaW5nID0gKG9iaikgPT4gdHlwZW9mIG9iaiA9PT0gJ3N0cmluZyciXX0=