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
//# sourceMappingURL=DataTypes.js.map