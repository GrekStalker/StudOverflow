const ADD_MESSAGE = 'ADD-MESSAGE';
const CHANGE_NEW_MESSAGE_TEXT = 'CHANGE-NEW-MESSAGE-TEXT';
//TODO img trough reducers
const initialState = {
  messagesArea : {
    message : [
      {text : 'Veni'},
      {text : 'Vidi'},
      {text : 'Vici'},
    ],
    newMessageText : 'anotherShit',
  },
};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_NEW_MESSAGE_TEXT : {
      return {
        ...state,
        messagesArea : {
          ...state.messagesArea,
          newMessageText : action.text,
        }
      }
    }
    case ADD_MESSAGE : {
      return {
        ...state,
        messagesArea : {
          ...state.messagesArea,
          message : [
            ...state.messagesArea.message,
            {text : state.messagesArea.newMessageText,}
          ],
          newMessageText : ''
        }
      }
    }
    default : {
      return state
    }
  }
};

const addMessageActionCreator = () => ({type : ADD_MESSAGE,});
const changeNewMessageTextActionCreator = (text) => ({type : CHANGE_NEW_MESSAGE_TEXT, text : text,});

export {
  addMessageActionCreator,
  changeNewMessageTextActionCreator,
};

export default messageReducer;