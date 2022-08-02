"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _questions = _interopRequireDefault(require("../../controllers/questions.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = (0, _express.Router)();
router.get('/', _questions["default"].getAllQuestions);
router.get('/:id', _questions["default"].getAQuestion);
router.post('/', _questions["default"].addAQuestion);
var _default = router;
exports["default"] = _default;