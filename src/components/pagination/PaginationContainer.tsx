import { connect } from 'react-redux';
import { State } from './../../state/reducers/rootReducer';
import Pagination from './Pagination';
import { addUsers } from '../../state/actions/userLIstActions';

const mapDispatchToProps = (dispatch: (arg0: any) => void) => {
  return {
    onAddUsers: (page: number = 1, perPage: number = 6) => {
      dispatch(addUsers(page, perPage));
    }
  };
};
const mapStateToProps = (state: State) => ({
  usersApiData: state.users && state.users.usersApiData,
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pagination);
