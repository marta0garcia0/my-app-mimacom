import { getProducts } from '../../services/api';
import { Product, ProductCart } from '../../models/product';

//Action Types
export const ADD_PRODUCTS_FAILURE = 'ADD_PRODUCTS_FAILURE';
export const ADD_PRODUCTS_STARTED = 'ADD_PRODUCTS_STARTED';
export const ADD_PRODUCTS_SUCCESS = 'ADD_PRODUCTS_SUCCESS';
export const SET_FAVORITE_PRODUCT = 'SET_FAVORITE_PRODUCT';

const addProductsSuccess = (products: Product[]) => ({
  type: ADD_PRODUCTS_SUCCESS,
  payload: products
});

const addProductsStarted = () => ({
  type: ADD_PRODUCTS_STARTED
});

const addUsersFailure = (error: any) => ({
  type: ADD_PRODUCTS_FAILURE,
  payload: {
    error
  }
});

const setFavoriteProductAction = (value: number, product: ProductCart) => ({
  type: SET_FAVORITE_PRODUCT,
  payload: { product, value: value }
});

export const addProducts = () =>
  (dispatch: (arg0: { type: string; payload?: any; }) => void) => {
    dispatch(addProductsStarted());
    getProducts()
      .then((res: Product[]) => {
        dispatch(addProductsSuccess(res));
      })
      .catch((err) => {
        dispatch(addUsersFailure(err.message));
      });
  };

export const setFavorite = (value: number, product: ProductCart) =>
  (dispatch: (arg0: { type: string; payload?: any; }) => void) => {
    dispatch(setFavoriteProductAction(value, product));
  };
