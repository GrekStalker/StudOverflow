import React from 'react';
import classes from './Users.module.css';

const User = (props) => {
  const userId = props.userId;
  const Listen = props.user.isListening ? 'Stop listening' : 'Listen';
  const toggleListening = () => {
    props.toggleListening(userId);
  };

  return (
    <div>
      <img src={props.user.avatar} className={classes.usersImg}/>
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
  const showMoreUsers = () => {
    props.showMoreUsers();
  };

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