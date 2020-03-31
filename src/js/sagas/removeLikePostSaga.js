import { put, call } from "redux-saga/effects";
import * as actions from "../actions";
import * as api from "../api";
import { push } from "react-router-redux";

export default function* removeLikePostSaga(action) {
  const id = action.payload;
  yield put(actions.removeLikePostAttempt());
  try {
    const res = yield call(api.removeLikePostApi, id);
    yield put(actions.removeLikePostSuccess(res));
  } catch (e) {
    yield put(actions.removeLikePostError(e.response.data));
  }
}
