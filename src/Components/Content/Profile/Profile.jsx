import React from 'react';
import classes from './Profile.module.css';
import PostsContainer from './Posts/PostsContainer.jsx';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className={classes.profile}>
      <ProfileInfo />
      <PostsContainer />
    </div>
  );
};

export default Profile;