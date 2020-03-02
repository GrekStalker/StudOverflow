import {addPostActionCreator, onPostChangeActionCreator, changeLikeActionCreator} from '../../../../Redux/reduxStore.js';
import Posts from "./Posts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
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
    changeLike : (postItemId) => {
      dispatch(changeLikeActionCreator(postItemId));
    },
  }
};

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;