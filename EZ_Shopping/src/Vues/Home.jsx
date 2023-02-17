import React, { useEffect } from 'react'
import Items from '../Components/Items'
import Navigation from "../Components/Navigation"
import { useDispatch, useSelector } from "react-redux";
import { fetchproducts } from "../store/productsSlice";
import styled from 'styled-components';

function Home() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchproducts())
    }, []);

    const products = useSelector((state) => state.products.products);

    return (
        <div>
            <div>
                <Navigation />
            </div>
            <StyledMain>
                <Items list={products} />
            </StyledMain>
        </div>
    )
}

export default Home


const StyledMain = styled.div`
display: flex;
flex-direction:column;
align-items: center;
margin: 10px;
padding: 10px;
`