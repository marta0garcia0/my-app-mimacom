import { ProductCart } from '../../models/product';

//Action Types
export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
export const REMOVE_PRODUCT_TO_CART = 'REMOVE_PRODUCT_TO_CART';


const addProductToCartAction = (product: ProductCart) => ({
  type: ADD_PRODUCT_TO_CART,
  payload: product
});

const removeProductToCartAction = (product: ProductCart) => ({
  type: REMOVE_PRODUCT_TO_CART,
  payload: product
});

export const addProductToCart = (product: ProductCart) =>
  (dispatch: (arg0: { type: string; payload?: any; }) => void) => {
    dispatch(addProductToCartAction(product));
  };

export const removeProductToCart = (product: ProductCart) =>
  (dispatch: (arg0: { type: string; payload?: any; }) => void) => {
    dispatch(removeProductToCartAction(product));
  };
