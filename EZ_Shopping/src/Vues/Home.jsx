import React, { useEffect } from 'react'
import Items from '../Components/Items'
import Navigation from "../Components/Navigation"
import { Row, Col, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux";
import { fetchproducts } from "../store/productsSlice";

function Home() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchproducts())
    },[]);

    const products = useSelector((state) => state.products.products);
    return (
        <Container fluid>
            <Row>
                <Col>
                    <Navigation />
                </Col>
            </Row>
            <Row>
                <Items list={products}/>
            </Row>
        </Container>
    )
}

export default Home