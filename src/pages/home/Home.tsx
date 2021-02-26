import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { Product, ProductCart } from '../../models/product';
import ProductBox from '../../components/product-box/ProductBox';
import './Home.scss';
import Cart from '../../components/cart/Cart';
import { Button } from '../../App';
import loading from './../../loading.gif';
import { FaShoppingCart, FaChevronLeft } from 'react-icons/fa';

interface Props {
  products: Product[];
  cart: ProductCart[];
  history: any;
  onRemoveFromCart: Function;
  onAddToCart: Function;
  onSetFavorite: Function;
}
const listRef = React.createRef<HTMLDivElement>();

function Home(props: Props) {
  const [showCart, setShowCart] = useState(false);
  const [pagination, setPagination] = useState(1);
  useEffect(() => {
    document.addEventListener('scroll', () => {
      if (listRef.current && listRef.current.getBoundingClientRect().bottom <= window.innerHeight) {
        setPagination(pagination + 1);
      }
    });

  });
  const products: Product[] = props.products && props.products.length ? props.products.slice(0, pagination * 20) : [];
  return (
    <div className='container'>
      <div className={`list-container ${showCart ? 'hidden' : ''}`}>
        <h2>New product</h2>
        <div className='list-cart'><FaShoppingCart size={ 20 } onClick={ () => setShowCart(true) } /></div>
        <div className='list-wrapper' ref={listRef}>
          {
            products.map((product: Product, index: number) => {
              return <ProductBox addProductToCart={props.onAddToCart}
                setFavorite={(value: number) => props.onSetFavorite(value, product)} product={product} key={'product' + index}/>;
            })
          }
        </div>
        { products.length < props.products.length ?
          <img className='loading-icon' src={loading} />
          : ''}
      </div>
      <div className={`cart-container ${showCart ? 'show' : ''}`}>
        <h2>Cart</h2>
        <div className='list-back'><FaChevronLeft size={20} onClick={ () => setShowCart(false) } /></div>
        <div className='cart-wrapper-container'>
          {
            props.cart && props.cart.length > 0 ?
              props.cart.map((product: ProductCart, index) => {
                return <Cart addItem={props.onAddToCart} removeItem={props.onRemoveFromCart} product={product} key={'product' + index}/>;
              })
              : <h3>Empty cart</h3>
          }
        </div>
        { props.cart && props.cart.length > 0 ?
          <div className='home-payment'>
            <div> Total Amount {props.cart.reduce((total, item) => {
              return total + (item.quantity * item.price);
            }, 0)}$</div>
            <Button>Make a payment</Button>
          </div>
          : ''
        }
      </div>
    </div>
  );
}

export default withRouter<any, any>(Home);
