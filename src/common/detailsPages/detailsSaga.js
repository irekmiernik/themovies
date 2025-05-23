import { all, call, put, takeLatest, delay } from "redux-saga/effects";
import { timeDelay } from "./timeDelay";

export function* detailsSaga({ getData, actions }) {
  function* fetchDetailsHandler({ payload: id }) {
    yield delay(timeDelay);

    try {
      const [data] = yield all([
        call(getData, { id }),
      ]);

      yield put(actions.fetchSuccess(data));

    } catch (error) {
      yield put(actions.fetchError());
    }
  }

  yield takeLatest(actions.fetch.type, fetchDetailsHandler);
}