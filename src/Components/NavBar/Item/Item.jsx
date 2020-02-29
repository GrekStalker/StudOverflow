import React from 'react';
import classes from './Item.module.css';
import {NavLink} from 'react-router-dom';

const Item = (props) => {
	return (
        <div className={classes.item}>
          <NavLink to={props.path} activeClassName={classes.activeLink}>{props.name}</NavLink>
        </div>
      )
};

export default Item;