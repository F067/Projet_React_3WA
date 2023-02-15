import React, {useEffect, useState} from 'react'
import { Card, Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { fetchproducts } from "../store/productsSlice";
// import { fonctiondemort } from "../store/usersSlice";

function Items() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchproducts())
  },[]);
  let user = (localStorage.getItem('user') == null) ? [{firstName:"firstName"}] : localStorage.getItem('user')
  console.log(user);
  const [quantity, setQuantity] = useState(0);
  const object = useSelector((state) => state.products.products);
  function addToBasket(){
    
    console.log(product);
  }

  function handleChange(event){
    setQuantity(event.target.value);
  }

  return (
    <div>
      {object.map((product) =>{
        return (
          <Card style={{ width: '18rem' }} key={product.id}>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text className='category'>{product.category}</Card.Text>  
              <Card.Text>
                {product.description}
              </Card.Text>
              <Card.Text className='price'>${product.price}</Card.Text>
              <div><p>Quantity :</p><Form.Control type="number" onChange={handleChange} value={quantity} /></div>
              <Button variant="warning" onClick={addToBasket}>Add to basket</Button>
            </Card.Body>
          </Card>
        )
      })}  
    </div>
  )
}

export default Items