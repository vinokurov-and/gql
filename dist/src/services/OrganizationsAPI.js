"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Network = _interopRequireDefault(require("../sources/Network"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var baseURL = "https://test.ofd.astralnalog.ru/api/v4.2/";

var OrganizationAPI =
/*#__PURE__*/
function () {
  function OrganizationAPI() {
    _classCallCheck(this, OrganizationAPI);

    this.baseUrl = baseURL;
  }

  _createClass(OrganizationAPI, [{
    key: "getAllCars",
    value: function () {
      var _getAllCars = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var apiKey,
            page,
            count,
            data,
            _args = arguments;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                apiKey = _args.length > 0 && _args[0] !== undefined ? _args[0] : "5cfc802d2ebb375a4b05500a430659dd";
                page = _args.length > 1 && _args[1] !== undefined ? _args[1] : 1;
                count = _args.length > 2 && _args[2] !== undefined ? _args[2] : 10;
                data = {
                  api_key: apiKey,
                  page: page,
                  count: count
                };
                return _context.abrupt("return", _Network["default"].post('organization.list', data));

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getAllCars() {
        return _getAllCars.apply(this, arguments);
      }

      return getAllCars;
    }()
  }]);

  return OrganizationAPI;
}();

exports["default"] = OrganizationAPI;