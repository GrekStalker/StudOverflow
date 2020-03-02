import React from 'react';
import classes from './DialogsArea.module.css';
import DialogItem from './DialogItem/DialogItem.jsx';

const DialogsArea = (props) => {
	const dialogsArea = {
		dialogsArea : [
			{name : 'GrekStalker', id : '0'},
			{name : 'Sashamaro', id : '3.1'},
		],}
	return(
		<div className={classes.dialogsArea}>
			{dialogsArea.dialogsArea.map(user => (<DialogItem name={user.name} id={user.id} className={classes.dialog}/>))}
		</div>
	)
};

export default DialogsArea