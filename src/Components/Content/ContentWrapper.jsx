import React from 'react';
import classes from './ContentWrapper.module.css';
import Profile from './Profile/Profile.jsx';
import Messages from './Messages/Messages.jsx';
import News from './News/News.jsx';
import Music from './Music/Music.jsx';
import Settings from './Settings/Settings.jsx';
import Main from './Main/Main';
import {Route} from 'react-router-dom';
import UsersContainer from "./Users/UsersContainer";

const ContentWrapper = (props) => {
	return(
		<div className={classes.contentWrapper}>
			<Route exact path="/" render={() => <Main />} />
			<Route path="/profile" render={() => <Profile />} />
			<Route path="/messages" render={() => <Messages />} />
			<Route path="/news" render={() => <News />} />
			<Route path="/music" render={() => <Music />} />
			<Route path="/settings" render={() => <Settings />} />
			<Route path="/users" render={() => <UsersContainer />} />
		</div>
	)
};

export default ContentWrapper