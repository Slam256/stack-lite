"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _questionsRoute = _interopRequireDefault(require("./questions.route.js"));

var _answersRoute = _interopRequireDefault(require("./answers.route.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var routes = (0, _express.Router)();
routes.use('/questions', _questionsRoute["default"]);
routes.use('/answers', _answersRoute["default"]);
var _default = routes;
exports["default"] = _default;