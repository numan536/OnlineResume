const validator = require("validator");
const isEmpty = require("./isEmpty");

module.exports = data => {
  let errors = {};

  data.status = !isEmpty(data.status) ? data.status : "";
  data.handle = !isEmpty(data.handle) ? data.handle : "";
  data.skills = !isEmpty(data.skills)
    ? data.skills
    : "" || !isEmpty(data.skills.toString())
      ? data.skills.toString()
      : "";
  data.location = !isEmpty(data.location) ? data.location : "";
  data.website = !isEmpty(data.website) ? data.website : "";
  data.company = !isEmpty(data.company) ? data.company : "";
  data.githubUsername = !isEmpty(data.githubUsername)
    ? data.githubUsername
    : "";
  data.bio = !isEmpty(data.bio) ? data.bio : "";
  data.youtube = !isEmpty(data.youtube) ? data.youtube : "";
  data.twitter = !isEmpty(data.twitter) ? data.twitter : "";
  data.instagram = !isEmpty(data.instagram) ? data.instagram : "";
  data.facebook = !isEmpty(data.facebook) ? data.facebook : "";
  data.linkedin = !isEmpty(data.linkedin) ? data.linkedin : "";

  if (!validator.isLength(data.handle, { min: 2, max: 30 })) {
    errors.handle = "handle needs to be between 2 and 30";
  }

  if (validator.isEmpty(data.status)) {
    errors.status = "status should be required";
  }
  if (validator.isEmpty(data.skills)) {
    errors.skills = "Not an skills";
  }
  if (validator.isEmpty(data.handle)) {
    errors.handle = "handle should be required";
  }

  if (!isEmpty(data.website)) {
    if (!validator.isURL(data.website)) {
      errors.website = "not a valid URL";
    }
  }

  if (!isEmpty(data.youtube)) {
    if (!validator.isURL(data.youtube)) {
      errors.youtube = "not a valid URL";
    }
  }

  if (!isEmpty(data.twitter)) {
    if (!validator.isURL(data.twitter)) {
      errors.twitter = "not a valid URL";
    }
  }

  if (!isEmpty(data.facebook)) {
    if (!validator.isURL(data.facebook)) {
      errors.facebook = "not a valid URL";
    }
  }

  if (!isEmpty(data.linkedin)) {
    if (!validator.isURL(data.linkedin)) {
      errors.linkedin = "not a valid URL";
    }
  }

  if (!isEmpty(data.instagram)) {
    if (!validator.isURL(data.instagram)) {
      errors.instagram = "not a valid URL";
    }
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
