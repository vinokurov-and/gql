"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ASTRAL_TOKEN = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _utils = require("../utils");

const baseURL = `https://test.ofd.astralnalog.ru/api/v4.2/`;
const ASTRAL_TOKEN = 'efde40c5-099d-4cbd-a85a-73b47ab57790';
exports.ASTRAL_TOKEN = ASTRAL_TOKEN;

const network = _axios.default.create({
  baseURL,
  headers: {
    'astral-token': ASTRAL_TOKEN,
    common: {
      "Content-Type": "application/json"
    }
  }
});

network.interceptors.request.use(config => {
  if (config.data) {
    if ((0, _utils.isObject)(config.data)) config.data = qs.stringify({ ...config.data
    });
    if ((0, _utils.isString)(config.data)) config.data = qs.parse(config.data);
  }

  return config;
});
network.interceptors.response.use(response => {
  // console.log(response);
  return response;
});
var _default = network;
exports.default = _default;
//# sourceMappingURL=Network.js.map