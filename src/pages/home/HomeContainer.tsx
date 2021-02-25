import { connect } from 'react-redux';
import Home from './Home';
import { State } from './../../state/reducers/rootReducer';
import { getUser } from '../../state/actions/userLIstActions';

const mapDispatchToProps = (dispatch: (arg0: any) => void) => {
  return {
    onGetUser: (id: number) => {
      dispatch(getUser(id));
    }
  };
};
const mapStateToProps = (state: State) => ({
  users: state.users && state.users.users,
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
