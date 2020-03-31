import React from "react";
import ReactDom from "react-dom";
import App from "./components/App";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";
import rootReducer from "./reducers";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import {
  ConnectedRouter as Router,
  routerMiddleware,
  push
} from "react-router-redux";
import createHistory from "history/createBrowserHistory";
import { isTokenValid } from "./utils";
import * as actions from "./actions";

const history = createHistory();
const middleware = routerMiddleware(history);

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  process.env.NODE_ENV !== "production" &&
    window.devToolsExtension &&
    window.devToolsExtension(),
  process.env.NODE_ENV !== "production"
    ? applyMiddleware(middleware, sagaMiddleware, logger)
    : applyMiddleware(middleware, sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

if (isTokenValid()) {
  store.dispatch(actions.submitLoginDataSuccess());
} else if (
  history.location.pathname === "/dashboard" ||
  history.location.pathname === "/dashboard/createProfile" ||
  history.location.pathname === "/dashboard/editProfile" ||
  history.location.pathname === "/dashboard/addEducation" ||
  history.location.pathname === "/dashboard/addExperience"
) {
  store.dispatch(push("/"));
}

ReactDom.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.querySelector("#app")
);
