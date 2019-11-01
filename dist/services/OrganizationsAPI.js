import network from "../sources/Network";
const baseURL = `https://test.ofd.astralnalog.ru/api/v4.2/`;
export default class OrganizationAPI {
  constructor() {
    this.baseUrl = baseURL;
  }

  getAllCars(apiKey = "5cfc802d2ebb375a4b05500a430659dd", page = 1, count = 10) {
    return function _callee() {
      var data;
      return regeneratorRuntime.async(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            data = {
              api_key: apiKey,
              page,
              count
            };
            return _context.abrupt("return", network.post('organization.list', data));

          case 2:
          case "end":
            return _context.stop();
        }
      });
    }();
  }

}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2aWNlcy9Pcmdhbml6YXRpb25zQVBJLmpzIl0sIm5hbWVzIjpbIm5ldHdvcmsiLCJiYXNlVVJMIiwiT3JnYW5pemF0aW9uQVBJIiwiY29uc3RydWN0b3IiLCJiYXNlVXJsIiwiZ2V0QWxsQ2FycyIsImFwaUtleSIsInBhZ2UiLCJjb3VudCIsImRhdGEiLCJhcGlfa2V5IiwicG9zdCJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsT0FBUDtBQUVBLE1BQU1DLE9BQU8sR0FBSSwyQ0FBakI7QUFFQSxlQUFlLE1BQU1DLGVBQU4sQ0FBc0I7QUFDakNDLEVBQUFBLFdBQVcsR0FDWDtBQUNJLFNBQUtDLE9BQUwsR0FBZUgsT0FBZjtBQUNIOztBQUVLSSxFQUFBQSxVQUFOLENBQWlCQyxNQUFNLEdBQUMsa0NBQXhCLEVBQTREQyxJQUFJLEdBQUMsQ0FBakUsRUFBb0VDLEtBQUssR0FBQyxFQUExRSxFQUE4RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDcEVDLFlBQUFBLElBRG9FLEdBQzdEO0FBQUNDLGNBQUFBLE9BQU8sRUFBRUosTUFBVjtBQUFrQkMsY0FBQUEsSUFBbEI7QUFBd0JDLGNBQUFBO0FBQXhCLGFBRDZEO0FBQUEsNkNBRW5FUixPQUFPLENBQUNXLElBQVIsQ0FBYSxtQkFBYixFQUFrQ0YsSUFBbEMsQ0FGbUU7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRzdFOztBQVRnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBuZXR3b3JrIGZyb20gJy4uL3NvdXJjZXMvTmV0d29yayc7XHJcblxyXG5jb25zdCBiYXNlVVJMID0gYGh0dHBzOi8vdGVzdC5vZmQuYXN0cmFsbmFsb2cucnUvYXBpL3Y0LjIvYFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3JnYW5pemF0aW9uQVBJIHtcclxuICAgIGNvbnN0cnVjdG9yKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLmJhc2VVcmwgPSBiYXNlVVJMXHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZ2V0QWxsQ2FycyhhcGlLZXk9XCI1Y2ZjODAyZDJlYmIzNzVhNGIwNTUwMGE0MzA2NTlkZFwiLCBwYWdlPTEsIGNvdW50PTEwKSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHthcGlfa2V5OiBhcGlLZXksIHBhZ2UsIGNvdW50fTtcclxuICAgICAgICByZXR1cm4gbmV0d29yay5wb3N0KCdvcmdhbml6YXRpb24ubGlzdCcsIGRhdGEpOyBcclxuICAgIH1cclxufSAiXX0=