import React from 'react';
import classes from './MessagesArea.module.css';
import Message from './Message/Message.jsx';

const MessagesArea = (props) => {

	const textarea = React.createRef();

	const changeNewMessage = () => {
		const text = textarea.current.value;
		props.changeNewMessage(text);
	};

	const addMessage = () => {
		props.addMessage();
	};

	return(
		<div className={classes.messagesArea}>
			{props.messagesArea.message.map(message => (<Message text={message.text} />))}
			<div>
				<textarea 
					ref={textarea} 
					value={props.messagesArea.newMessageText} 
					onChange={changeNewMessage}
				/>
			</div>
			<div>
				<button onClick={addMessage}>Send</button>
			</div>
		</div>
	)
};

export default MessagesArea