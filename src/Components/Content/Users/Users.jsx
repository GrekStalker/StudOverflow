import React from 'react';
import classes from './Users.module.css';
import * as axios from 'axios';
import defaultImg from '../../Img/defaultImg.png';

const User = (props) => {
  const userId = props.userId;
  const Listen = props.user.followed ? 'Stop listening' : 'Listen';
  const toggleListening = () => {
    props.toggleListening(userId);
  };
  const userPhoto = props.user.photos.small ? props.user.photos.small : defaultImg;
  return (
    <div>
      <img src={userPhoto} className={classes.usersImg} />
      <button onClick={toggleListening}>{Listen}</button>
      <div className={classes.userInfo}>
        <div>
          <div>
            {props.user.name}
          </div>
          <div>
            {props.user.status}
          </div>
        </div>
        <div>
          <div>
            {props.user.country}
          </div>
          <div>
            {props.user.city}
          </div>
        </div>
      </div>
    </div>
  )
};

const Users = (props) => {
  const page = props.users.length / 10 + 1;
  const showMoreUsers = () => {debugger
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}`).then(response => {
      props.showMoreUsers(response.data.items);
    })
  };

  if (props.users.length === 0) showMoreUsers();

  return (
    <div>
      {
        props.users.map((user, userId) =>
          <User
            user={user}
            userId={userId}
            toggleListening={props.toggleListening}
          />
        )
      }
      <button onClick={showMoreUsers}>Show more users</button>
    </div>
  );
};

export default Users;