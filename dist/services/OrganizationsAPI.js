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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2aWNlcy9Pcmdhbml6YXRpb25zQVBJLmpzIl0sIm5hbWVzIjpbImJhc2VVUkwiLCJPcmdhbml6YXRpb25BUEkiLCJjb25zdHJ1Y3RvciIsImJhc2VVcmwiLCJnZXRBbGxDYXJzIiwiYXBpS2V5IiwicGFnZSIsImNvdW50IiwiZGF0YSIsImFwaV9rZXkiLCJuZXR3b3JrIiwicG9zdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBRUEsTUFBTUEsT0FBTyxHQUFJLDJDQUFqQjs7QUFFZSxNQUFNQyxlQUFOLENBQXNCO0FBQ2pDQyxFQUFBQSxXQUFXLEdBQ1g7QUFDSSxTQUFLQyxPQUFMLEdBQWVILE9BQWY7QUFDSDs7QUFFRCxRQUFNSSxVQUFOLENBQWlCQyxNQUFNLEdBQUMsa0NBQXhCLEVBQTREQyxJQUFJLEdBQUMsQ0FBakUsRUFBb0VDLEtBQUssR0FBQyxFQUExRSxFQUE4RTtBQUMxRSxVQUFNQyxJQUFJLEdBQUc7QUFBQ0MsTUFBQUEsT0FBTyxFQUFFSixNQUFWO0FBQWtCQyxNQUFBQSxJQUFsQjtBQUF3QkMsTUFBQUE7QUFBeEIsS0FBYjtBQUNBLFdBQU9HLGlCQUFRQyxJQUFSLENBQWEsbUJBQWIsRUFBa0NILElBQWxDLENBQVA7QUFDSDs7QUFUZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbmV0d29yayBmcm9tICcuLi9zb3VyY2VzL05ldHdvcmsnO1xyXG5cclxuY29uc3QgYmFzZVVSTCA9IGBodHRwczovL3Rlc3Qub2ZkLmFzdHJhbG5hbG9nLnJ1L2FwaS92NC4yL2BcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9yZ2FuaXphdGlvbkFQSSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5iYXNlVXJsID0gYmFzZVVSTFxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGdldEFsbENhcnMoYXBpS2V5PVwiNWNmYzgwMmQyZWJiMzc1YTRiMDU1MDBhNDMwNjU5ZGRcIiwgcGFnZT0xLCBjb3VudD0xMCkge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7YXBpX2tleTogYXBpS2V5LCBwYWdlLCBjb3VudH07XHJcbiAgICAgICAgcmV0dXJuIG5ldHdvcmsucG9zdCgnb3JnYW5pemF0aW9uLmxpc3QnLCBkYXRhKTsgXHJcbiAgICB9XHJcbn0gIl19