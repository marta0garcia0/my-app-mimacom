import { connect } from 'react-redux';
import User from './User';
import { State } from '../../state/reducers/rootReducer';
import { getUser, setDeleteUser, setUserData } from '../../state/actions/userLIstActions';
import { UserUpdate } from '../../models/user';

const mapDispatchToProps = (dispatch: (arg0: any) => void) => {
  return {
    onGetUser: (id: number) => {
      dispatch(getUser(id));
    },
    onUpdateUser: (id: number, user: UserUpdate) => {
      dispatch(setUserData(id, user));
    },
    onDeleteUser: (id: number) => {
      dispatch(setDeleteUser(id));
    }
  };
};
const mapStateToProps = (state: State) => ({
  selectedUser: state.users && state.users.selectedUser,
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
