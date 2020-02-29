import React from 'react';
import classes from './DialogItem.module.css';
import {NavLink} from 'react-router-dom';

const DialogItem = (props) => {
	return(
		<div>
			<NavLink to={'/Messages/' + props.id} activeClassName={classes.activeLink}>{props.name}</NavLink>
		</div>
	)
};

export default DialogItem