const ADD_MESSAGE = 'ADD-MESSAGE';
const CHANGE_NEW_MESSAGE_TEXT = 'CHANGE-NEW-MESSAGE-TEXT';

const initialState = {
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
        }
      }
    }
    default : {
      return state
    }
  }
};
  /*
  const _changeNewMessageText = (text) => {
    state.messagesArea.newMessageText = text;
  };
  const _addMessage = () => {
    let message = state.messagesArea.newMessageText;
    state.messagesArea.message.push({text : message});
    state.messagesArea.newMessageText = '';
  };

  if (action.type === CHANGE_NEW_MESSAGE_TEXT) {
    _changeNewMessageText(action.text)
  }
  if (action.type === ADD_MESSAGE) {
    _addMessage()
  }

  return state;
  */

export default messageReducer;