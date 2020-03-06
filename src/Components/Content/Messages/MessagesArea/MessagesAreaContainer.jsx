import React from 'react';
import MessagesArea from "./MessagesArea";
import {connect} from "react-redux";
import {addMessageActionCreator, changeNewMessageTextActionCreator} from "../../../../Redux/messageReducer";

const mapStateToProps = (state) => {
  return {
    messagesArea : state.messages.messagesArea,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addMessage : () => {
      dispatch(addMessageActionCreator())
    },
    changeNewMessage : (text) => {
      dispatch(changeNewMessageTextActionCreator(text))
    },
  }
};

const MessagesAreaContainer = connect(mapStateToProps, mapDispatchToProps)(MessagesArea);

export default MessagesAreaContainer