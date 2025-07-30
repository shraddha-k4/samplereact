import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios'

const Lipstick = () => {
    const [product,setProduct]=useState([]);
    const API="http://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl&product_type=lipstick";
    
    useEffect(()=>{
        const fetchProducts = async()=>{
            try{
            const response=await axios.get(API);
            setProduct(response.data);
            console.log(response.data);
        }catch(error)
        {
            console.log(error);
        }
        };
        fetchProducts();
    })
  return (
    <>
      <div className='grid grid-cols-2 gap-5'>
      {product.map((products)=>{
        return(
            <div key={products.id} className='bg-white shadow-xl flex justify-center items-center p-4 transition-transform duration-300 cursor-pointer hover:-translate-y-2'>
                <img src={products.image_link} alt={products.name}/>
                <div>
                    <h2 className='text-xl'>{products.name}</h2>
                    <p>Price:${products.price}</p>
                    <button className='bg-green-600 h-9 w-15 text-white'>{products.rating}</button>
                </div>
            </div>
        );
      })};

      </div>
    </>
  )
}

export default Lipstick
