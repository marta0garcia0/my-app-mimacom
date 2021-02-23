import userListReducer from './userListReducer';
import { combineReducers } from 'redux';

const rootReducer: any = combineReducers({
  users: userListReducer
});

export default rootReducer;