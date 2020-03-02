import React from 'react';
import classes from './Messages.module.css';
import DialogsArea from './DialogsArea/DialogsArea.jsx';
import MessagesAreaContainer from './MessagesArea/MessagesAreaContainer.jsx';

const Messages = (props) => {
	return(
		<div className={classes.messages}>
			<DialogsArea />
			<MessagesAreaContainer />
		</div>
	)
};

export default Messages