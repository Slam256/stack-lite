"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _answers = _interopRequireDefault(require("../../controllers/answers.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = (0, _express.Router)();
router.post('/:id', _answers["default"].addAnAnswer); // add answer to question

router.get('/:id', _answers["default"].getAnswers); // get all answers for question id

router.get('/', _answers["default"].getAllAnswers); // get all answers for all questions

var _default = router;
exports["default"] = _default;