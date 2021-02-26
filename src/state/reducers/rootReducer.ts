import { combineReducers } from 'redux';
import { Product, ProductCart } from '../../models/product';
import productsListReducer from './productsListReducer';
import cartReducer from './cartReducer';

export interface State {
  products: {
    products: Product[],
  },
  cart: {
    cart: ProductCart[],
  }
}

const rootReducer: any = combineReducers({
  products: productsListReducer,
  cart: cartReducer,
});

export default rootReducer;
