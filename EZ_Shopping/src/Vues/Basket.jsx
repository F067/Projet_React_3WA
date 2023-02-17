import React, { useEffect } from 'react';
import Navigation from '../Components/Navigation';
import BasketList from '../Components/BasketList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchproducts } from "../store/productsSlice";
import { removeBasket } from "../store/basketSlice"
import styled from 'styled-components';


function Basket() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user.profile);
  const basket = useSelector((state) => state.basket.orders);
  const products = useSelector((state) => state.products.products);
  const basket_products_ref = basket.map(e => parseInt(e.product));
  const basket_list = products.filter(product => basket_products_ref.includes(product.id))

  const global_qty = basket.reduce(function (accumulateur, valeurCourante) {
    return accumulateur + valeurCourante.quantity;
  }, 0);

  useEffect(() => {
    dispatch(fetchproducts())
  }, []);

  return (
    <div>
      <div>
        <Navigation />
      </div>
      <StyledbasketTop>
        <h1>Hi {profile == null ? "User" : profile.firstName} !</h1>
        <h2>There are {global_qty} items in your basket</h2>
        <StyledButton onClick={() => dispatch(removeBasket())}>Clear basket</StyledButton>
      </StyledbasketTop>
      <div>
        <BasketList list={basket_list} />
      </div>
    </div>
  )
}

export default Basket


const StyledButton = styled.button`
  background-color: #FFCA2C;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  outline: none;
  -webkit-user-select: none;
  text-decoration: none;
  cursor: pointer;
  border-style: none;
`

const StyledbasketTop = styled.div`
display: flex;
flex-direction: column;
align-items: center;

`