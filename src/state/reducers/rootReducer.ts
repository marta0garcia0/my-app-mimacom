import userListReducer, { State as UsersState } from './userListReducer';
import { combineReducers } from 'redux';

export interface State {
  users: UsersState,
}

const rootReducer: any = combineReducers({
  users: userListReducer,
});

export default rootReducer;
