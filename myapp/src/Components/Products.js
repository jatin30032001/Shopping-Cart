import React, { useEffect, useState } from 'react'

const Products = () => {

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


  return  <div className='productsWrapper'>
{

    products.map(product =>(
        <div className='card' key={product.id}>

            <img src={product.image} alt="Loading..." />
            <h4>{product.title}</h4>
            <h5>{product.price}</h5>


        </div>
    ))
}


  </div>
    
  
}

export default Products
