import { call, put } from "redux-saga/effects";
import * as api from "../api";
import * as actions from "../actions";

export default function*(action) {
  const id = action.payload;
  yield put(actions.getSinglePostAttempt());
  try {
    const res = yield call(api.getSinglePostApi, id);
    yield put(actions.getSinglePostSuccess(res));
  } catch (e) {
    yield put(actions.getSinglePostError(e.response.data));
  }
}
