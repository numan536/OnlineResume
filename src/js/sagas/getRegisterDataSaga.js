import { call, put } from "redux-saga/effects";
import * as api from "../api";
import * as actions from "../actions";

export default function*() {
  yield put(actions.getRegisterDataAttempt());
  try {
    const res = yield call(api.getRegisterDataApi);
    yield put(actions.getRegisterDataSuccess(res.data));
  } catch (e) {
    yield put(actions.getRegisterDataFail(e));
  }
}
