"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useUserStore = void 0;
var _zustand = require("zustand");
var useUserStore = exports.useUserStore = (0, _zustand.create)(function (set) {
  return {
    isLoggedIn: false,
    age: 25,
    userName: "John Doe",
    toggleLogin: function toggleLogin() {
      return set(function (state) {
        return {
          isLoggedIn: !state.isLoggedIn
        };
      });
    },
    incrementAge: function incrementAge() {
      return set(function (state) {
        return {
          age: state.age + 1
        };
      });
    },
    setUserName: function setUserName(newUserName) {
      return set({
        userName: newUserName
      });
    }
  };
});