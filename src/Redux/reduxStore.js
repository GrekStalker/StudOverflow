import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import messageReducer from "./messageReducer";
//TODO add navbar reducer
const reducers = combineReducers({
  profile : profileReducer,
  messages : messageReducer,
});

const store = createStore(reducers);
//TODO actionCreators put in reducers
const ADD_MESSAGE = 'ADD-MESSAGE';
const CHANGE_NEW_MESSAGE_TEXT = 'CHANGE-NEW-MESSAGE-TEXT';
const ADD_LIKE = 'ADD-LIKE';
const ADD_POST = 'ADD-POST';
const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT';

const addMessageActionCreator = () => ({type : ADD_MESSAGE,});
const changeNewMessageTextActionCreator = (text) => ({type : CHANGE_NEW_MESSAGE_TEXT, text : text,});
const addLikeActionCreator = (postItemId) => ({type : ADD_LIKE, postItemId : postItemId,});
const addPostActionCreator = () => ({type : ADD_POST,});
const onPostChangeActionCreator = (text) => ({type : CHANGE_NEW_POST_TEXT, text : text,});

export {
  addMessageActionCreator,
  changeNewMessageTextActionCreator,
  addLikeActionCreator,
  addPostActionCreator,
  onPostChangeActionCreator,
}

export default store;