import { call, put, all, fork, takeLatest, takeEvery } from "redux-saga/effects";
import { SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_IN_REQUEST, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE } from "../reducers/user";
import axios from 'axios';
import { AsyncStorage } from 'react-native';
function signUpAPI(signUpData){
  return axios.post("/user/", signUpData);
}

function* signUp(action) {
  try{
    const result = yield call(signUpAPI, action.data);
    yield put({
      type: SIGN_UP_SUCCESS,
      data: result.data
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

function loginAPI(loginData){
  return axios.post("/user/login", loginData);
}

function* login(action) {
  try{
    const result = yield call(loginAPI, action.data);
    yield AsyncStorage.setItem('token', result.data.token);
    yield put({
      type: LOG_IN_SUCCESS,
      data: result.data.user
    });
  }catch(e){
    console.error(e);
    yield put({
      type: LOG_IN_FAILURE
    });
  }
  
}
function* watchLogin(){
  yield takeEvery(LOG_IN_REQUEST, login)
}

function* logout() {
  try{
    yield AsyncStorage.removeItem('token');
    yield put({
      type: LOG_OUT_SUCCESS,
    });
  }catch(e){
    console.error(e);
    yield put({
      type: LOG_OUT_FAILURE
    });
  }
  
}
function* watchLogout(){
  yield takeEvery(LOG_OUT_REQUEST, logout);
}

export default function* userSaga() {
  yield all([
    fork(watchSignUp),
    fork(watchLogin),
    fork(watchLogout)
  ]);
}
