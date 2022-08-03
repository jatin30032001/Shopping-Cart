import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { add } from '../Stores/cartSlice';

const Products = () => {

    const dispatch = useDispatch();

const[products , Setproducts] = useState([]);

useEffect(()=> async ()=>{

    const fetchProducts = async ()=>{
          const res = await fetch ('https://fakestoreapi.com/products')
          const data = await res.json();

          console.log(data)
          Setproducts(data);
    }

       fetchProducts();
} , []);


const handleAdd =(product)=>{
dispatch(add(product));
}

  return  <div className='productsWrapper'>
{

    products.map(product =>(
        <div className='card' key={product.id}>

            <img src={product.image} alt="Loading..." />
            <h4>{product.title}</h4>
            <h5>{product.price}</h5>

            <button onClick={()=> handleAdd(product)}    className='btn' > Add To Cart</button>


        </div>
    ))
}


  </div>
    
  
}

export default Products
