const validator = require("validator");
const isEmpty = require("./isEmpty");

module.exports = data => {
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  const errors = {};

  if (!validator.isEmail(data.email)) {
    errors.email = "email is not valid";
  }
  if (validator.isEmpty(data.email)) {
    errors.email = "email is required";
  }
  if (validator.isEmpty(data.password)) {
    errors.password = "password is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
