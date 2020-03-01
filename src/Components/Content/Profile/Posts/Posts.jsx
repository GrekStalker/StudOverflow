import React from 'react';
import classes from './Posts.module.css';
import img from "./Post/img.jpg";

const Post = (props) => {
  const changeLike = () => {
    props.changeLike(props.postItemId)
  };

  return (
    <div>
      <img src={img} className={classes.postImg} />
      <div>{props.message}</div>
      <div>
        <button onClick={changeLike}>Like</button>
        {props.likeCount}
      </div>
    </div>
  );
};

const Posts = (props) => {
  const textarea = React.createRef();
  const addPost = () => {
    props.addPost();
  };
  const onPostChange = () => {
    const text = textarea.current.value;
    props.onPostChange(text);
  };
  const changeLike = (postItemId) => {
    props.changeLike(postItemId);
  };

  return (
    <div className={classes.posts}>
      My posts
      <div>
        <div>New post</div>
        <div>
          <textarea ref={textarea} value={props.posts.newPostText} onChange={onPostChange} />
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      {props.posts.postItems.map((post, postItemId) => 
        (<Post 
          message={post.message} 
          likeCount={post.likeCount}
          postItemId={postItemId}
          changeLike={changeLike}
        />)
      )}
    </div>
  );
};

export default Posts;