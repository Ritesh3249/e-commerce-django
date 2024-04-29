import {takeEvery,put} from "redux-saga/effects"
import { registerUserApi } from "../../Api"
import { REGISTER_USER, SET_REGISTER_USER } from "../constant"

function* registerUser(data) {
    console.log("api call")
    let result = yield registerUserApi(data.data)
    yield put({type:SET_REGISTER_USER,data:result})
}

function* userSaga() {
    
    yield takeEvery(REGISTER_USER,registerUser)
}

export default userSaga