import React, { useEffect } from 'react'
import Items from '../Components/Items'
import Navigation from "../Components/Navigation"
import { useDispatch, useSelector } from "react-redux";
import { fetchproducts } from "../store/productsSlice";

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
            <div>
                <Items list={products} />
            </div>
        </div>
    )
}

export default Home


