import React from 'react';
import classes from './NavBar.module.css';
import Item from './Item/Item.jsx';

const NavBar = () => {
  return (
    <nav className={classes.nav}>
      <Item name='Profile' path='/profile' />
      <Item name='Messages' path='/messages' />
      <Item name='News' path='/news' />
      <Item name='Music' path='/music' />
      <Item name='Settings' path='/settings' />
      <Item name='Users' path='/users'/>
    </nav>
  )
};

export default NavBar;