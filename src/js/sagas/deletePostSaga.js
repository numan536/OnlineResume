import { put, call } from "redux-saga/effects";
import * as actions from "../actions";
import * as api from "../api";
import { push } from "react-router-redux";

export default function* deletePostSaga(action) {
  const id = action.payload;
  if (confirm("Are you sure to permanent delete Post")) {
    yield put(actions.deletePostAttempt());
    try {
      const res = yield call(api.deletePostApi, id);
      yield put(actions.deletePostSuccess(res));
      alert("Post Deleted Successfuly");
    } catch (e) {
      yield put(actions.deletePostError(e.response.data));
    }
  }
}
