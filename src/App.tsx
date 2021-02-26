import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';
import './App.scss';
import React, { useEffect, useState } from 'react';
import { store } from './state/store';
import HomeContainer from './pages/home/HomeContainer';
import styled, { keyframes } from 'styled-components';
import { Product } from './models/product';

const jump = keyframes`
  from{
    transform: translateY(0)
  }
  to{
    transform: translateY(-3px)
  }
`;

export const Button = styled.button`
  max-width: 100%;
  padding: 11px 13px;
  color: rgb(253, 249, 243);
  font-weight: 600;
  text-transform: uppercase;
  background: #f03d4e;
  border: none;
  border-radius: 3px;
  outline: 0;
  cursor: pointer;
  margin-top: 0.6rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-out;
  :hover {
    background: rgb(200, 50, 70);
    animation: ${jump} 0.2s ease-out forwards;
  }
`;

const baseUrl: string = (document.getElementsByTagName('base')[0] || {}).href;

interface Props {
  onAddProducts: Function;
}

function App(props: Props) {
  const [products, setProducts] = useState<Product[]>();
  props.onAddProducts();
  useEffect(() => {
    const productsStore = store.getState().products.products;
    if (productsStore && productsStore.length > 0 &&
          JSON.stringify(productsStore) !== JSON.stringify(products)) {
      setProducts(productsStore);
    }
  });

  return (
    <BrowserRouter
      basename={baseUrl}>
      <Route exact={true} path='/' component={HomeContainer} />
    </BrowserRouter>
  );
}

export default App;
