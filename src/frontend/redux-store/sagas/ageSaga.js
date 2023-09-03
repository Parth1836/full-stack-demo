import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects'

const delay = (ms) => new Promise(res => setTimeout(res, ms))

// ...

// Our worker Saga: will perform the async increment task
export function* ageAsync(value) {
  console.log("inside age async saga", value);
  delay(2000);
  yield put({ type: "ageSlice/updateAge", payload: value.age })
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchAgeSaga() {
  console.log("inside age watch saga");
  yield takeEvery('updateAgeBySaga', ageAsync)
} 