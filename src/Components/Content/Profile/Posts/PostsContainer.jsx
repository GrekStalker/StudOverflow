import React from 'react';
import {addPostActionCreator, onPostChangeActionCreator} from '../../../../Redux/reduxStore.js';
import Posts from "./Posts";
import {connect} from "react-redux";
import {addLikeActionCreator} from "../../../../Redux/reduxStore";

const mapStateToProps = (state) => {
  debugger
  return {
    posts : state.profile.posts,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPost : () => {
      dispatch(addPostActionCreator())
    },

    onPostChange : (text) => {
      dispatch(onPostChangeActionCreator(text))
    },

    addLike : (postItemId) => {
      dispatch(addLikeActionCreator(postItemId));
    },
  }
};

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;