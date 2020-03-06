import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import messageReducer from "./messageReducer";
import usersReducer from "./usersReducer";
//TODO add navbar reducer
const reducers = combineReducers({
  profile : profileReducer,
  messages : messageReducer,
  users : usersReducer,
});

const store = createStore(reducers);

export default store;