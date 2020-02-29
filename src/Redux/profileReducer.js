const ADD_LIKE = 'ADD-LIKE';
const ADD_POST = 'ADD-POST';
const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT';

const initialState = {
  posts : {
    post : {},
    postItems : [
      {message : 'Ultima ratio', likeCount : 5},
      {message : 'Ave Maria', likeCount : 12},
      {message : 'Veni, vidi, vici', likeCount : 6},
    ],
    newPostText : 'Some shit',
  },
};

const profileReducer = (state = initialState, action) => {

  const _addLike = (postItemId) => {
    state.posts.postItems[postItemId].likeCount++;
  };

  const _changeNewPostText = (text) => {
    state.posts.newPostText = text;
  };

  const _addPost = () => {
    let text = state.posts.newPostText;
    state.posts.postItems.push({message : text, likeCount : 0});
    state.posts.newPostText = '';
  };

  if (action.type === ADD_LIKE) {
    _addLike(action.postItemId)
  }
  if (action.type === CHANGE_NEW_POST_TEXT) {
    _changeNewPostText(action.text)
  }
  if (action.type === ADD_POST) {
    _addPost()
  }

  return state;
};

export default profileReducer;