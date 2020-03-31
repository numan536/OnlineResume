import { put, call } from "redux-saga/effects";
import * as actions from "../actions";
import * as api from "../api";
import { push } from "react-router-redux";

export default function* deleteProfileDataSaga() {
  if (confirm("Are you sure to permanent delete Profile")) {
    yield put(actions.deleteProfileDataAttempt());
    try {
      yield call(api.deleteProfileApi);
      const res = yield put(actions.deleteProfileDataSuccess(res));
      alert("Profile Deleted Successfuly");
      yield put(push("/"));
    } catch (e) {
      yield put(actions.deleteProfileDataError(e.response.data));
    }
  }
}
