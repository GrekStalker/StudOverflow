import React from 'react';
import classes from './NavBar.module.css';
import Item from './Item/Item.jsx';

const NavBar = () => {
  return (
    <nav className={classes.nav}>
      <Item name='Profile' path='/profile' />
      <Item name='Messages' path='/messages' />
      <Item name='News' path='/news' />
      <Item name='Users' path='/users' />
      <Item name='Music' path='/music' />
      <Item name='Settings' path='/settings' />
    </nav>
  )
};

export default NavBar;