"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useUserStore = void 0;
var _zustand = require("zustand");
const useUserStore = exports.useUserStore = (0, _zustand.create)(set => ({
  isLoggedIn: false,
  age: 25,
  userName: "John Doe",
  toggleLogin: () => set(state => ({
    isLoggedIn: !state.isLoggedIn
  })),
  incrementAge: () => set(state => ({
    age: state.age + 1
  })),
  setUserName: newUserName => set({
    userName: newUserName
  })
}));