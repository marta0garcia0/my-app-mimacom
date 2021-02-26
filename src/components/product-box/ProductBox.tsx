import React, { ReactElement, useEffect } from 'react';
import { FaHeart } from 'react-icons/fa';
import { Product } from '../../models/product';
import './ProductBox.scss';

interface Props {
  product: Product;
  children?: ReactElement;
  setFavorite: Function;
  addProductToCart: Function;
}

function ProductBox(props: Props) {
  useEffect(() => {
  });
  const product = props.product;
  return (
    <div className='box-container' key={props.product.id}>
      <div className='box-wrapper'>
        <div className='box-icon' ><FaHeart onClick={() => props.setFavorite(props.product.favorite === 0 ? 1 : 0)} color={props.product.favorite ? 'red' : 'white'}/></div>
        <img src={product.imageUrl} onClick={() => props.addProductToCart(props.product)} />
        <div className='box-title'>{product.productName}</div>
        <div> <span className='box-price'>{`$${product.price}`}</span>Stock: {product.stock}</div>
      </div>
    </div>
  );
}

export default ProductBox;
