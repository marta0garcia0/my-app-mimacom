import { connect } from 'react-redux';
import Home from './Home';
import { State } from './../../state/reducers/rootReducer';
import { addProductToCart, removeProductToCart } from '../../state/actions/cartActions';
import { ProductCart } from '../../models/product';
import { setFavorite } from '../../state/actions/productsLIstActions';

const mapDispatchToProps = (dispatch: (arg0: any) => void) => {
  return {
    onAddToCart: (product: ProductCart) => {
      dispatch(addProductToCart(product));
    },
    onRemoveFromCart: (product: ProductCart) => {
      dispatch(removeProductToCart(product));
    },
    onSetFavorite: (value: number, product: ProductCart) => {
      dispatch(setFavorite(value, product));
    },
  };
};
const mapStateToProps = (state: State) => ({
  products: state.products.products,
  cart: state.cart.cart,
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
