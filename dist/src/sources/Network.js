"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ASTRAL_TOKEN = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var baseURL = "https://test.ofd.astralnalog.ru/api/v4.2/";
var ASTRAL_TOKEN = 'efde40c5-099d-4cbd-a85a-73b47ab57790';
exports.ASTRAL_TOKEN = ASTRAL_TOKEN;

var network = _axios["default"].create({
  baseURL: baseURL,
  headers: {
    'astral-token': ASTRAL_TOKEN,
    common: {
      "Content-Type": "application/json"
    }
  }
});

network.interceptors.request.use(function (config) {
  if (config.data) {
    if ((0, _utils.isObject)(config.data)) config.data = qs.stringify(_objectSpread({}, config.data));
    if ((0, _utils.isString)(config.data)) config.data = qs.parse(config.data);
  }

  return config;
});
network.interceptors.response.use(function (response) {
  console.log(response);
  return response;
});
var _default = network;
exports["default"] = _default;