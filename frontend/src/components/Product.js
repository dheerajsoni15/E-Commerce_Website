import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Product({ onAddToCart }) {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user')) || JSON.parse(sessionStorage.getItem('user'));
  
  useEffect(() => {
    axios.get('http://localhost:5000/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleAddToCart = (product) => {
    if (!user) {
      navigate('/login'); // Redirect to login if not authenticated
      return;
    }
    const cartItem = { ...product, userId: user._id };
    onAddToCart(cartItem);
    navigate('/addtocart'); // Navigate to Addtocart component
  };

  return (
    <div>
      <div className="row mt-2">
        {products.map(product => (
          <div className="col-sm-3 text-center" key={product._id}>
            <div className="section shadow-lg">
              <img src={`http://localhost:5000/${product.filePath}`} alt={product.productName} />
            </div>
            <button
              type="button"
              className="btn btn-warning mt-2"
              onClick={() => handleAddToCart(product)}
            >
              {product.productName}
            </button>
          </div>
        ))}
      </div>

      <div className="row mt-4">
        {products.map(product => (
          <div className="col-sm-3" key={product._id}>
            <div className="card">
              <img
                src={`http://localhost:5000/${product.filePath}`}
                className="card-img-top"
                alt={product.productName}
                height="200"
              />
              <div className="card-body">
                <h5 className="card-title">Rs.{product.price}</h5>
                <p className="fw-bolder d-block">Name:- {product.productName}</p>
                <small>Some quick example text to build on the card title and make up the bulk of the card's content.</small>
                <div>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="btn btn-warning"
                  >
                    Add To Cart
                  </button>
                  <a href="#" className="btn btn-warning float-end">Buy Now</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

