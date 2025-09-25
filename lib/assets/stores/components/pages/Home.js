"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Home = void 0;
var _appContentStore2 = require("../stores/appContentStore");
var Home = exports.Home = function Home() {
  var _appContentStore = (0, _appContentStore2.appContentStore)(),
    appContent = _appContentStore.appContent;
  return /*#__PURE__*/React.createElement("h1", null, appContent.heading);
};