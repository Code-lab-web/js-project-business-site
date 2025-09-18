"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Home = void 0;
var _appContentStore = require("../stores/appContentStore");
const Home = () => {
  const {
    appContent
  } = (0, _appContentStore.appContentStore)();
  return /*#__PURE__*/React.createElement("h1", null, appContent.heading);
};
exports.Home = Home;