import React from 'react';
import classes from './ProfileInfo.module.css';
import Avatar from './../Img/Avatar.jpg';

const ProfileInfo = (props) => {
  return (
    <div className={classes.profileInfo}>
      <div>
        <img src={Avatar} />
      </div>
      <div>
      	Description
      </div>
    </div>
  );
}

export default ProfileInfo;