import React from 'react';
import classes from './Profile.module.css';
import PostsContainer from './Posts/PostsContainer.jsx';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className={classes.profile}>
      <ProfileInfo />
      <PostsContainer posts={props.profile.posts} dispatch={props.dispatch} />
    </div>
  );
};

export default Profile;