/*import avatarGrekStalker from '../Components/Content/Profile/Img/Avatar.jpg';
import avatarSashamaro from '../Components/Img/27b7a3d7-5025-4eca-88c7-3b431122465d.jpg';
import avatar26ABr from '../Components/Img/26abr_2019_gaslo.png';
import avatarMarkusAurelius from '../Components/Img/Metropolitan_Marcus_Aurelius_Roman_2C_AD.jpg';
import avatarGunslinger from '../Components/Img/Roland_Deschain_by_Michael_Whelan.png';*/

const TOGGLE_LISTENING = 'TOGGLE-LISTENING';
const SHOW_MORE_USERS = 'SHOW_MORE_USERS';

const initialState = {
  users : [/*
    {id : 0, name : 'GrekStalker', avatar : avatarGrekStalker, country : 'Ukraine', city : 'Lviv', status : 'Searching for a job, creating StudOverflow', isListening : false,},
    {id : 3.1, name : 'Sashamaro', avatar : avatarSashamaro, country : 'Ukraine', city : 'Dniprorudne', status : 'Scelus', isListening : false,},
    {id : 26, name : '26ABr', avatar : avatar26ABr, country : 'Ukraine', city : 'Berdichiv', status : 'Bamboo smoking', isListening : false,},
    {id : 5, name : 'Markus Aurelius', avatar : avatarMarkusAurelius, country : 'Imperium Romanum', city : '', status : 'Ta eis heauton', isListening : false,},
  */],
};

const toggleListeningActionCreator = (userId) => ({type : TOGGLE_LISTENING, userId : userId});
const showMoreUsersActionCreator = (users) => ({type : SHOW_MORE_USERS, users : users});

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_LISTENING : {
      const stateCopy = {
        ...state,
        users : [...state.users],
      };
      const isListenedBefore = state.users[action.userId].followed;
      stateCopy.users[action.userId] = {
        ...state.users[action.userId],
        followed : !isListenedBefore,
      };
      return stateCopy
    }
    case SHOW_MORE_USERS : {
      const downloadedUsers = action.users/*[
        {id : 7, name : 'Gunslinger', avatar : avatarGunslinger, country : 'Gilead', city : '', status : 'Going to Dark Tower', isListening : false,},
      ]*/;
      return {
        ...state,
        users : [
          ...state.users,
          ...downloadedUsers,
        ]
      }
    }
    default : {
      return state
    }
  }
};

export default usersReducer;
export {toggleListeningActionCreator, showMoreUsersActionCreator}