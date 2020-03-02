const CHANGE_LIKE = 'CHANGE-LIKE';
const ADD_POST = 'ADD-POST';
const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT';
//TODO img trough reducers
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
};

export default profileReducer;