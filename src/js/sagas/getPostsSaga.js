import { call, put } from "redux-saga/effects";
import * as api from "../api";
import * as actions from "../actions";

export default function*() {
  yield put(actions.getPostsAttempt());
  try {
    const res = yield call(api.getPostsApi);
    yield put(actions.getPostsSuccess(res));
  } catch (e) {
    yield put(actions.getPostsError(e.response.data));
  }
}
