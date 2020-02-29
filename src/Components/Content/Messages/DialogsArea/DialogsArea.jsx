import React from 'react';
import classes from './DialogsArea.module.css';
import DialogItem from './DialogItem/DialogItem.jsx';

const DialogsArea = (props) => {
	return(
		<div className={classes.dialogsArea}>
			{props.dialogsArea.map(user => (<DialogItem name={user.name} id={user.id} className={classes.dialog}/>))}
		</div>
	)
};

export default DialogsArea