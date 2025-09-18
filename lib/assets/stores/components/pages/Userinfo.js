"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserInfo = void 0;
var _userStore = require("../stores/userStore");
const UserInfo = () => {
  const {
    userName,
    age
  } = (0, _userStore.useUserStore)();
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "User Profile"), /*#__PURE__*/React.createElement("p", null, "User Name: ", userName), /*#__PURE__*/React.createElement("p", null, "Age: ", age));
};
exports.UserInfo = UserInfo;