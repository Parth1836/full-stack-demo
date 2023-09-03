import { all, call } from "redux-saga/effects";
import { watchCSSaga } from "./csSaga";
import { watchAgeSaga } from "./ageSaga";


function* rootSaga() {
    yield all([
        call(watchCSSaga), // this is alternate way of calling function
        watchAgeSaga(),
    ])
}

export default rootSaga;