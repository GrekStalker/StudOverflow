import profileReducer from "./profileReducer.js";
import messageReducer from "./messageReducer.js";

const ADD_MESSAGE = 'ADD-MESSAGE';
const CHANGE_NEW_MESSAGE_TEXT = 'CHANGE-NEW-MESSAGE-TEXT';
const ADD_LIKE = 'ADD-LIKE';
const ADD_POST = 'ADD-POST';
const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT';

let store = {

  _subscriber() {
    console.log('No subscribers');
  },

  subscribe(subscriber) {
    this._subscriber = subscriber;
  },

  get state() {
    return this._state;
  },

  dispatch(action) {
    this._state.contentWrapper.profile = profileReducer(this._state.contentWrapper.profile, action);
    this._state.contentWrapper.messages = messageReducer(this._state.contentWrapper.messages, action);
    this._subscriber(this);

    if (action.type === 'SUBSCRIBE') {
      this._subscribe(action.subscriber)
    }
  },

  _state : {
    contentWrapper : {

      profile : {

        posts : {

          post : {
          },

          postItems : [
            {message : 'Ultima ratio', likeCount : 5},
            {message : 'Ave Maria', likeCount : 12},
            {message : 'Veni, vidi, vici', likeCount : 6},
          ],

          newPostText : 'Some shit',
        }
      },

      messages : {

        dialogsArea : [
          {name : 'GrekStalker', id : '0'},
          {name : 'Sashamaro', id : '3.1'},
        ],

        messagesArea : {

          message : [
            {text : 'Veni'},
            {text : 'Vidi'},
            {text : 'Vici'},
          ],

          newMessageText : 'anotherShit',
        }
      },
    }
  },
};

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
//window.store = store;