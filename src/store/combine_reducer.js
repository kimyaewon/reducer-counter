import { combineReducers } from "redux";
import store from "./store";

//import한 리듀서 이름그대로  사용하는 경우
export default combineReducers({
  counter: store, // 리듀서이름 :import한 리듀서
})
