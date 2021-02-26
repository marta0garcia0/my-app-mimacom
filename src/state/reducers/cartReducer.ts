import { ProductCart } from '../../models/product';
import { ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_TO_CART } from '../actions/cartActions';

export interface State {
  cart: ProductCart[]
}

type Action = {
  type: string;
  payload: any;
}

const initialState = {
  cart: []
};

const cartReducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
  case ADD_PRODUCT_TO_CART:
    const product = state.cart.find((prod: ProductCart) => prod.id === action.payload.id);
    let cart: ProductCart[] = [];
    if (action.payload.stock > 0) {
      if (product) {
        cart = state.cart.map((prod: ProductCart) => {
          if (prod.id === action.payload.id) {
            return { ...prod, quantity: prod.quantity + 1 <= prod.stock ? prod.quantity + 1 : prod.quantity };
          }
          return prod;
        });
        return { ...state, cart };
      }
      cart = state.cart.concat({ ...action.payload, quantity: 1 });
      return { ...state, cart };
    }
    return { ...state };
  case REMOVE_PRODUCT_TO_CART:
    let removeFromCart = [];
    if (action.payload.quantity === 1) {
      removeFromCart = state.cart.filter((prod: ProductCart) => prod.id !== action.payload.id);
    } else {
      removeFromCart = state.cart.map((prod: ProductCart) => {
        if (prod.id === action.payload.id) {
          return { ...prod, quantity: prod.quantity - 1 };
        }
        return prod;
      });
    }
    return { ...state, cart: removeFromCart };
  default:
    return state;
  }
};

export default cartReducer;
