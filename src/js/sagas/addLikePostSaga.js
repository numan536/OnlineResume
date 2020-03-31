import { put, call } from "redux-saga/effects";
import * as actions from "../actions";
import * as api from "../api";

export default function* addLikePostSaga(action) {
  const id = action.payload;
  yield put(actions.addLikePostAttempt());
  try {
    const res = yield call(api.addLikePostApi, id);
    yield put(actions.addLikePostSuccess(res));
  } catch (e) {
    yield put(actions.addLikePostError(e.response.data));
  }
}
