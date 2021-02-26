import { Product } from '../../models/product';
import { ADD_PRODUCTS_SUCCESS, ADD_PRODUCTS_FAILURE, ADD_PRODUCTS_STARTED, SET_FAVORITE_PRODUCT } from '../actions/productsLIstActions';

export interface State {
  products: Product[],
}

type Action = {
  type: string;
  payload: any;
}

const initialState = {
  products: []
};

const userListReducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
  case ADD_PRODUCTS_SUCCESS:
    return { ...state, products: action.payload };
  case ADD_PRODUCTS_STARTED:
    return { ...state };
  case ADD_PRODUCTS_FAILURE:
    return { ...state, products: action.payload.products };
  case SET_FAVORITE_PRODUCT:
    const products = state.products.map((product: Product) => {
      if (product.id === action.payload.product.id) {
        return { ...product, favorite: action.payload.value };
      }
      return product;
    });
    return { ...state, products };
  default:
    return state;
  }
};

export default userListReducer;
