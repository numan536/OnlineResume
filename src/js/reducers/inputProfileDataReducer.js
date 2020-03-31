import * as types from "../constants";
import isEmpty from "../../../server/validation/isEmpty";

const initial = {
  handle: "",
  status: "",
  company: "",
  location: "",
  bio: "",
  website: "",
  skills: "",
  githubUsername: "",
  twitter: "",
  youtube: "",
  facebook: "",
  instagram: "",
  linkedin: "",
  displaySocialInputs: true,
  errors: {}
};

export default function(state = initial, action) {
  switch (action.type) {
    case types.CHANGE_PROFILE_HANDLE:
      return { ...state, handle: action.payload };
    case types.CHANGE_PROFILE_STATUS:
      return { ...state, status: action.payload };
    case types.CHANGE_PROFILE_LOCATION:
      return { ...state, location: action.payload };
    case types.CHANGE_PROFILE_SKILLS:
      return { ...state, skills: action.payload };
    case types.CHANGE_PROFILE_WEBSITE:
      return { ...state, website: action.payload };
    case types.CHANGE_PROFILE_COMPANY:
      return { ...state, company: action.payload };
    case types.CHANGE_PROFILE_GITHUB_USERNAME:
      return { ...state, githubUsername: action.payload };
    case types.CHANGE_PROFILE_BIO:
      return { ...state, bio: action.payload };
    case types.CHANGE_PROFILE_TWITTER:
      return { ...state, twitter: action.payload };
    case types.CHANGE_PROFILE_FACEBOOK:
      return { ...state, facebook: action.payload };
    case types.CHANGE_PROFILE_INSTAGRAM:
      return { ...state, instagram: action.payload };
    case types.CHANGE_PROFILE_LINKEDIN:
      return { ...state, linkedin: action.payload };
    case types.CHANGE_PROFILE_YOUTUBE:
      return { ...state, youtube: action.payload };
    case types.CHANGE_PROFILE_DISPLAY_INPUTS:
      return { ...state, displaySocialInputs: action.payload };
    case types.SUBMIT_PROFILE_DATA_FAIL:
      return { ...state, errors: action.payload };
    case types.EDIT_PROFILE_DATA:
      const data = action.payload;
      console.log("this is data from reducer", data);
      data.status = !isEmpty(data.status) ? data.status : "";
      data.handle = !isEmpty(data.handle) ? data.handle : "";
      data.skills = !isEmpty(data.skills.toString())
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

      return {
        ...state,
        handle: data.handle,
        status: data.status,
        location: data.location,
        company: data.company,
        bio: data.bio,
        skills: data.skills,
        website: data.website,
        githubUsername: data.githubUsername,
        twitter: data.twitter,
        facebook: data.facebook,
        linkedin: data.linkedin,
        instagram: data.instagram,
        youtube: data.youtube
      };
    case types.RESET_PROFILE:
      return initial;
    default:
      return state;
  }
}
