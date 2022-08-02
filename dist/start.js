"use strict";

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PORT = process.env.PORT || 4000;

_index["default"].listen(PORT, function () {
  console.log("Port is running on ".concat(PORT, " go and catch it"));
});