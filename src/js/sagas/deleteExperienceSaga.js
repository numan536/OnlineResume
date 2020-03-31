import { put, call } from "redux-saga/effects";
import * as actions from "../actions";
import * as api from "../api";
import { push } from "react-router-redux";

export default function* deleteExperienceSaga(action) {
  const id = action.payload;
  if (confirm("Are you confirm to permanent delete Experience")) {
    yield put(actions.deleteExperienceAttempt());
    try {
      const res = yield call(api.deleteExperienceApi, id);
      yield put(actions.deleteExperienceSuccess(res));
      alert("Experience Deleted Successfuly");
      yield put(push("/dashboard"));
    } catch (e) {
      yield put(actions.deleteExperienceError(e));
    }
  }
}
