import { connect } from 'react-redux';
import { addUsers } from './state/actions/userLIstActions';
import App from './App';

const mapDispatchToProps = (dispatch: (arg0: any) => void) => {
  return {
    onAddUsers: (page: number = 1, perPage: number = 6) => {
      dispatch(addUsers(page, perPage));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(App);
