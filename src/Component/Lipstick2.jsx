import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Lipstick2 = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  const API = "http://makeup-api.herokuapp.com/api/v1/products.json?product_type=lipstick";

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get(API);
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <>
      {loading ? (
        <p className="text-center text-xl font-semibold text-gray-500">Loading...</p>
      ) : (
        <div className='grid grid-cols-4 gap-5 p-4'>
          {product.map((products) => {
            return (
              <div
                key={products.id}
                className='bg-white shadow-xl rounded p-4 transition-transform duration-300 cursor-pointer hover:-translate-y-2 flex flex-col items-center'
              >
                <img
                  src={products.image_link || "https://via.placeholder.com/150"}
                  alt={products.name}
                  className="h-40 object-contain mb-3"
                />
                <h2 className='text-lg font-semibold text-center'>{products.name}</h2>
                <p className='text-gray-600'>Price: ${products.price || "N/A"}</p>
                <button className='mt-2 bg-green-600 px-4 py-2 text-white rounded'>
                  {products.rating ? products.rating : "No Rating"}
                </button>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Lipstick2;
