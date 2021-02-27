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
    <div className='box-container' key={product.id} >
      <div className={`box-wrapper  ${product.stock === 0 ? 'disabled' : ''}` } >
        <div className='box-icon' ><FaHeart
          onClick={() => props.setFavorite(product.favorite === 0 ? 1 : 0)}
          color={product.favorite ? 'red' : 'white'}/>
        </div>
        <img src={product.imageUrl} onClick={() => props.addProductToCart(product)} />
        <div className='box-title'>{product.productName}</div>
        <div> <span className='box-price'>{`$${product.price}`}</span>Stock: {product.stock}</div>
      </div>
    </div>
  );
}

export default ProductBox;
