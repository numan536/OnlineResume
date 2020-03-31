import * as types from "../constants";

const initial = {
  title: "",
  location: "",
  description: "",
  to: "",
  from: "",
  company: "",
  current: false,
  disableField: false,
  errors: {}
};

export default function(state = initial, action) {
  switch (action.type) {
    case types.CHANGE_EXPERIENCE_TITLE:
      return { ...state, title: action.payload };
    case types.CHANGE_EXPERIENCE_LOCATION:
      return { ...state, location: action.payload };
    case types.CHANGE_EXPERIENCE_COMPANY:
      return { ...state, company: action.payload };
    case types.CHANGE_EXPERIENCE_TO:
      return { ...state, to: action.payload };
    case types.CHANGE_EXPERIENCE_FROM:
      return { ...state, from: action.payload };
    case types.CHANGE_EXPERIENCE_DESCRIPTION:
      return { ...state, description: action.payload };
    case types.CHANGE_EXPERIENCE_CURRENT:
      return { ...state, current: action.payload, to: "" };
    case types.RESET_EXPERIENCE:
      return initial;
    case types.SUBMIT_EXPERIENCE_DATA_FAIL:
      return { ...state, errors: action.payload };

    default:
      return state;
  }
}
