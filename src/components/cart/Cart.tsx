import React, { ReactElement } from 'react';
import { FaHeart, FaPlus, FaMinus } from 'react-icons/fa';
import { ProductCart } from '../../models/product';
import './Cart.scss';

interface Props {
  product: ProductCart;
  children?: ReactElement;
  removeItem: Function;
  addItem: Function;
}

function Cart(props: Props) {
  const product = props.product;
  return (
    <div className='cart-box' key={props.product.id}>
      <div className='cart-wrapper'>
        <div className='cart-icon' ><FaHeart size={12} color={props.product.favorite ? 'red' : 'white'}/></div>
        <img src={product.imageUrl} />
        <div className='cart-info__container' >
          <div className='cart-title'>{product.productName}</div>
          <div className='cart-info'><span className='cart-price'>{`$${product.price}`}</span></div>
          <div className='cart-modification'>
            <div className='cart-add__icon' onClick={() => props.addItem(product)}>
              <FaPlus size={12} />
            </div>
            <div className='cart-quantity'>{product.quantity}</div>
            <div className='cart-add__icon' onClick={() => props.removeItem(product)}>
              <FaMinus size={12} />
            </div>
            {` Stock: ${product.stock} `}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
