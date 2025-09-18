"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
const LoginForm = () => {
  const [formData, setFormData] = (0, _react.useState)({
    email: "",
    password: ""
  });
  const [error, setError] = (0, _react.useState)("");
  const handleSubmit = e => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setError("Please fill in both fields");
      return;
    }
    setError("");
    fetch("http://localhost:8080/users/login", {
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
  }, /*#__PURE__*/React.createElement("h1", null, "LOG IN"), error && /*#__PURE__*/React.createElement("div", {
    style: {
      color: "red"
    }
  }, error), /*#__PURE__*/React.createElement("label", {
    htmlFor: "email"
  }, "Email"), /*#__PURE__*/React.createElement("input", {
    onChange: e => setFormData({
      ...formData,
      email: e.target.value
    }),
    type: "email",
    name: "email",
    value: formData.email
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: "password"
  }, "Password"), /*#__PURE__*/React.createElement("input", {
    onChange: e => setFormData({
      ...formData,
      password: e.target.value
    }),
    type: "password",
    name: "password",
    value: formData.password
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, "Log In"));
};
var _default = exports.default = LoginForm;