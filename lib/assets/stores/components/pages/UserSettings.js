"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserSettings = void 0;
var _userstore = require("../stores/userstore");
var UserSettings = exports.UserSettings = function UserSettings() {
  var _useUserStore = (0, _userstore.useUserStore)(),
    toggleLogin = _useUserStore.toggleLogin,
    incrementAge = _useUserStore.incrementAge,
    setUserName = _useUserStore.setUserName,
    isLoggedIn = _useUserStore.isLoggedIn,
    userName = _useUserStore.userName;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "User Settings"), /*#__PURE__*/React.createElement("p", null, "Logged in: ", isLoggedIn ? "Yes" : "No"), /*#__PURE__*/React.createElement("button", {
    onClick: toggleLogin
  }, "Toggle Login"), /*#__PURE__*/React.createElement("button", {
    onClick: incrementAge
  }, "Increment Age"), /*#__PURE__*/React.createElement("label", null, "New User Name:", /*#__PURE__*/React.createElement("input", {
    value: userName,
    onChange: function onChange(event) {
      return setUserName(event.target.value);
    }
  })));
};