import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects'

const delay = (ms) => new Promise(res => setTimeout(res, ms))

// ...

// Our worker Saga: will perform the async increment task
export function* customerSolutionAsync() {
  console.log("inside async saga");
  const result = yield  axios.get("/api/getAllCS");
  const data = result?.data?.data;
  console.log("result", result?.data?.data);
  yield put({ type: "customerSlice/storeCSData", payload: data })
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchCSSaga() {
  console.log("inside watch saga");
  yield takeEvery('getAllCS', customerSolutionAsync)
} 