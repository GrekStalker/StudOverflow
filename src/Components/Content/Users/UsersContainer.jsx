import Users from './Users.jsx';
import {showMoreUsersActionCreator, toggleListeningActionCreator} from "../../../Redux/usersReducer";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
	return {
		users : [...state.users.users],
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		toggleListening : (userId) => {
			dispatch(toggleListeningActionCreator(userId));
		},
		showMoreUsers : (users) => {
			dispatch(showMoreUsersActionCreator(users))
		},
	}
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer