import React from 'react';
import classes from './ContentWrapper.module.css';
import Profile from './Profile/Profile.jsx';
import Messages from './Messages/Messages.jsx';
import News from './News/News.jsx';
import Music from './Music/Music.jsx';
import Settings from './Settings/Settings.jsx';
import Main from './Main/Main';
import {Route} from 'react-router-dom';

const ContentWrapper = (props) => {
	return(
		<div className={classes.contentWrapper}>
			<Route exact path="/" render={() => <Main />} />
			<Route path="/Profile" render={() => <Profile profile={props.contentWrapper.profile} dispatch={props.dispatch} />} />
			<Route path="/Messages" render={() => <Messages messages={props.contentWrapper.messages} dispatch={props.dispatch} />} />
			<Route path="/News" render={() => <News />} />
			<Route path="/Music" render={() => <Music />} />
			<Route path="/Settings" render={() => <Settings />} />
		</div>
	)
};

export default ContentWrapper