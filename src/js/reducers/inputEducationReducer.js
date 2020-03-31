import * as types from "../constants";

const initial = {
  degree: "",
  location: "",
  description: "",
  to: "",
  from: "",
  school: "",
  current: false,
  disableField: false,
  errors: {}
};

export default function(state = initial, action) {
  switch (action.type) {
    case types.CHANGE_EDUCATION_DEGREE:
      return { ...state, degree: action.payload };
    case types.CHANGE_EDUCATION_LOCATION:
      return { ...state, location: action.payload };
    case types.CHANGE_EDUCATION_SCHOOL:
      return { ...state, school: action.payload };
    case types.CHANGE_EDUCATION_TO:
      return { ...state, to: action.payload };
    case types.CHANGE_EDUCATION_FROM:
      return { ...state, from: action.payload };
    case types.CHANGE_EDUCATION_DESCRIPTION:
      return { ...state, description: action.payload };
    case types.CHANGE_EDUCATION_CURRENT:
      return { ...state, current: action.payload, to: "" };
    case types.RESET_EDUCATION:
      return initial;
    case types.SUBMIT_EDUCATION_DATA_FAIL:
      return { ...state, errors: action.payload };

    default:
      return state;
  }
}
