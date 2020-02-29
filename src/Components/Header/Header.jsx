import React from 'react';
import classes from './Header.module.css';
import logo from './Tagline.png'
import {NavLink} from 'react-router-dom'

const Header = (props) => {
	return (
		<header className={classes.header}>
			<NavLink to='/Main'>
        		<img src={logo} />
        	</NavLink>
      	</header>
      )
}

export default Header;