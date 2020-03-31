import { put, call } from "redux-saga/effects";
import * as actions from "../actions";
import * as api from "../api";
import { push } from "react-router-redux";

export default function* deleteEducationSaga(action) {
  const id = action.payload;
  if (confirm("Are you confirm to permanent Delete Education")) {
    yield put(actions.deleteEducationAttempt());
    try {
      const res = yield call(api.deleteEducationApi, id);
      yield put(actions.deleteEducationSuccess(res));
      alert("Education Deleted Successfuly");
      yield put(push("/dashboard"));
    } catch (e) {
      yield put(actions.deleteEducationError(e.response.data));
    }
  }
}
