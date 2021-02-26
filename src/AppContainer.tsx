import { connect } from 'react-redux';
import App from './App';
import { addProducts } from './state/actions/productsLIstActions';

const mapDispatchToProps = (dispatch: (arg0: any) => void) => {
  return {
    onAddProducts: () => {
      dispatch(addProducts());
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(App);
