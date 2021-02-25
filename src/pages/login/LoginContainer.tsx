import { connect } from 'react-redux';
import Login from './Login';
import { login } from '../../state/actions/userLIstActions';
import { UserLogin } from '../../models/user';
import { State } from './../../state/reducers/rootReducer';

const mapDispatchToProps = (dispatch: (arg0: any) => void) => {
  return {
    onLogin: (user: UserLogin) => {
      dispatch(login(user));
    },
  };
};
const mapStateToProps = (state: State) => ({
  users: state.users && state.users.users,
  token: state.users && state.users.token && state.users.token.token,
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
