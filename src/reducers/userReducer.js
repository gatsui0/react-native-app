import {USER_LOGIN_SUCESS, USER_LOGOUT} from '../actions/userActions';

export default function userReducer(state = null, action){

    switch(action.type){
        case USER_LOGIN_SUCESS: 
            return action.user;
        case USER_LOGOUT:
            return null;
        default:
            return state;
    }
}