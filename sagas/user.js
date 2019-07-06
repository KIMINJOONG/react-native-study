import { call, put, all, fork, takeLatest, takeEvery } from "redux-saga/effects";
import { SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE } from "../reducers/user";
import axios from 'axios';

function signUpAPI(signUpData){
  //return axios.post("/user/", signUpData);
  console.log(signUpData);
  return '성공';
}

function* signUp(action) {
  console.log('dd');
  try{
    const result = yield call(signUpAPI, action.data);
    yield put({
      type: SIGN_UP_SUCCESS,
      data: result
    });
  }catch(e){
    console.error(e);
    yield put({
      type: SIGN_UP_FAILURE
    });
  }
  
}
function* watchSignUp(){
  yield takeEvery(SIGN_UP_REQUEST, signUp)
}

export default function* userSaga() {
  yield all([fork(watchSignUp)]);
}
