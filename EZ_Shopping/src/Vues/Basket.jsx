import React, { useEffect } from 'react';
import Click from '../Components/Click';
import Navigation from '../Components/Navigation';
import Items from '../Components/Items';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Container } from 'react-bootstrap';
import { fetchproducts } from "../store/productsSlice";


function Basket() {
  const profile = useSelector((state) => state.user.profile);
  const basket = useSelector((state) => state.basket.orders);
  const products = useSelector((state) => state.products.products);
  const basket_products_ref = basket.map(e => parseInt(e.product));
  const basket_list = products.filter(product => basket_products_ref.includes(product.id))
  
  const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchproducts())
    },[]);

    
  return (
    <Container fluid>
      <Row>
        <Col>
          <Navigation />
        </Col>
      </Row>
      <Row>
        <Col>
          <h1>Hi {profile == null ? "User" : profile.firstName} !</h1>
          <p>There are 0 items in your basket</p>
          <Click />
        </Col>
      </Row>
      <Row>
        <Col>
          <Items list={basket_list}/>
        </Col>
      </Row>
    </Container>

  )
}

export default Basket