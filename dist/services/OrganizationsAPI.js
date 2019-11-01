"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Network = _interopRequireDefault(require("../sources/Network"));

const baseURL = `https://test.ofd.astralnalog.ru/api/v4.2/`;

class OrganizationAPI {
  constructor() {
    this.baseUrl = baseURL;
  }

  async getAllCars(apiKey = "5cfc802d2ebb375a4b05500a430659dd", page = 1, count = 10) {
    const data = {
      api_key: apiKey,
      page,
      count
    };
    return _Network.default.post('organization.list', data);
  }

}

exports.default = OrganizationAPI;
//# sourceMappingURL=OrganizationsAPI.js.map