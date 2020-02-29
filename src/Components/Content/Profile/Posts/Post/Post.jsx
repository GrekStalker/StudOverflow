import React from 'react';
import classes from './Post.module.css';
import img from './img.jpg';
import {addLikeActionCreator} from '../../../../../Redux/reduxStore.js'

const Post = (props) => {

	const addLike = () => {
		const addLike = addLikeActionCreator(props.postItemId);
		props.dispatch(addLike);
	};

	return (
		<div>
			<img src={img} className={classes.img} />
			<div>{props.message}</div>
			<div>
				<button onClick={addLike}>Like</button>
				{props.likeCount}
			</div>
		</div>
  );
};

export default Post;