import React from 'react';
import classes from './Messages.module.css';
import DialogsArea from './DialogsArea/DialogsArea.jsx';
import MessagesAreaContainer from './MessagesArea/MessagesAreaContainer.jsx';

const Messages = (props) => {
	return(
		<div className={classes.messages}>
			<DialogsArea dialogsArea={props.messages.dialogsArea} dispatch={props.dispatch} />
			<MessagesAreaContainer messagesArea={props.messages.messagesArea} dispatch={props.dispatch} />
		</div>
	)
};

export default Messages