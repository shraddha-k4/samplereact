import axios from 'axios'
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const Makeup = () => {
    const [product,setProduct] = useState([]);
    const API="http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

    useEffect(()=>{
        const fetchProducts =async()=>{
            try{
                const response =await axios.get(API);
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
      <div className='grid grid-cols-4 gap-4'>
      {product.map((products)=>{
        return(
            <div key={products.id} className='bg-white shadow-xl flex flex-col rounded justify-center items-center p-2 transition-transform duration-300 cursor-pointer  hover:-translate-y-2'>

                <img src={products.image_link} alt={products.name}/>
                <div className='flex flex-col justify-center items-center'>
                    <h2>{products.name}</h2>
                    <p>Price: ${products.price}</p>
                    <button className='bg-green-600 rounded h-9 w-15 text-white'>{products.rating}</button>
                </div>

            </div>
            

        );
      })}

      </div>
    </>
  )
}

export default Makeup
