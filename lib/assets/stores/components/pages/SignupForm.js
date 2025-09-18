"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
const SignupForm = () => {
  const [formData, setFormData] = (0, _react.useState)({
    email: "",
    password: ""
  });
  const handleSubmit = e => {
    e.preventDefault();
    console.log(formData);
    fetch("http://localhost:8080/users", {
      method: "POST",
      body: JSON.stringify({
        email: formData.email,
        password: formData.password
      }),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(() => {
      // Reset form
      e.target.reset();
    }).catch(error => {
      console.log(error);
    });
  };
  return /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/React.createElement("h1", null, "SIGN UP"), /*#__PURE__*/React.createElement("label", {
    htmlFor: "email"
  }, "Email"), /*#__PURE__*/React.createElement("input", {
    onChange: e => setFormData({
      ...formData,
      email: e.target.value
    }),
    type: "email",
    name: "email"
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: "password"
  }, "Password"), /*#__PURE__*/React.createElement("input", {
    onChange: e => setFormData({
      ...formData,
      password: e.target.value
    }),
    type: "password",
    name: "password"
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, "Sign up"));
};
var _default = exports.default = SignupForm;