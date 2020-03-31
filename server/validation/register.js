const validator = require("validator");
const isEmpty = require("./isEmpty");

module.exports = data => {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  if (!validator.isLength(data.name, { min: 2, max: 20 })) {
    errors.name = "name should be atleast two characters";
  }

  if (validator.isEmpty(data.name)) {
    errors.name = "name should be required";
  }

  if (validator.isEmpty(data.email)) {
    errors.email = "email should be required";
  }

  if (!validator.isEmail(data.email)) {
    errors.email = "Not an email";
  }

  if (validator.isEmpty(data.password)) {
    errors.password = "password should be required";
  }

  if (validator.isEmpty(data.password2)) {
    errors.password2 = "password2 should be required";
  }

  if (!validator.equals(data.password, data.password2)) {
    errors.password = "Both Password fields must match";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
