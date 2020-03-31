import { push } from "react-router-redux";
import { put } from "redux-saga/effects";
import * as actions from "../actions";
export default function*() {
  localStorage.removeItem("token");
  localStorage.removeItem("name");
  localStorage.removeItem("avatar");
  yield put(push("/"));
}
