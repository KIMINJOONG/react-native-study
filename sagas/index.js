import { all, call } from "redux-saga/effects";
import user from "./user";
import axios from "axios";

axios.defaults.baseURL = 'http://192.168.0.4:3011/api';

export default function* rootSaga() {
  yield all([call(user)]);
}
