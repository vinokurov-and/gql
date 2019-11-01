"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isString = exports.isObject = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Проверка на объект
 * @param {*} obj Любой объект, строка, null и т.д.
 */
var isObject = function isObject(obj) {
  return _typeof(obj) === 'object' && obj !== null;
};
/**
 * Проверка на строку
 * @param {*} obj Любой объект, строка и т.д.
 */


exports.isObject = isObject;

var isString = function isString(obj) {
  return typeof obj === 'string';
};

exports.isString = isString;