const CHANGE_LIKE = 'CHANGE-LIKE';
const ADD_POST = 'ADD-POST';
const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT';

const initialState = {
  posts : {
    post : {},
    postItems : [
      {message : 'Ultima ratio', likeCount : 5, liked : false,},
      {message : 'Ave Maria', likeCount : 12, liked : false,},
      {message : 'Veni, vidi, vici', likeCount : 6, liked : false,},
    ],
    newPostText : 'Some shit',
  },
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LIKE : {
      const stateCopy = {
        ...state,
        posts : {
          ...state.posts,
          postItems : [
            ...state.posts.postItems,
          ],
        }
      };
      const isLikedBefore = state.posts.postItems[action.postItemId].liked;
      const likeChange = (isLikedBefore) => {
        if (isLikedBefore) return -1;
        else return 1;
      };
      stateCopy.posts.postItems[action.postItemId] = {
        ...state.posts.postItems[action.postItemId],
        likeCount : state.posts.postItems[action.postItemId].likeCount + likeChange(isLikedBefore),
        liked : !isLikedBefore,
      };
      return stateCopy;
    }
    case ADD_POST : {
      return {
        ...state,
        posts : {
          ...state.posts,
          postItems : [
            ...state.posts.postItems,
            {message : state.posts.newPostText, likeCount : 0, liked : false,}
          ],
          newPostText : '',
        }
      }
    }
    case CHANGE_NEW_POST_TEXT : {
      return {
        ...state,
        posts : {
          ...state.posts,
          newPostText : action.text,
        }
      }
    }
    default : {
      return state
    }
  }
  /*
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

  return state;*/
};

export default profileReducer;