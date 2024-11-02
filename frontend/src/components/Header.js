import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user')) || JSON.parse(sessionStorage.getItem('user'));

  const handleLogout = () => {
    // Clear user data from storage
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('token');

    // Redirect to home page
    navigate('/');
  };

  return (
    <div className="row bg-warning py-2">
      <div className="col-sm-3 pt-2">
        <i className="fa-solid fa-phone fw-bolder fs-3"></i>
        Call Us +91 9170121679
      </div>
      <div className="col-sm-3 pt-2">
        <i className="fa-regular fa-envelope fw-bold fs-3"></i>
        Mail Us : dmprajapati98@gmail.com
      </div>
      <div className="col-sm-6 text-end pt-2">
        <ul className="social">
          <a href="/addcart">
            <Link to="/addtocart"><li><i className="fa-solid fa-cart-shopping"></i></li></Link>
          </a>
          <li><i className="fa-brands fa-facebook-f"></i></li>
          <li><i className="fa-brands fa-square-instagram"></i></li>
          <li><i className="fa-brands fa-square-twitter"></i></li>
          <li><i className="fa-brands fa-google-plus"></i></li>
        </ul>
        {user ? (
          <>
            <div className="text-light">Hello, {user.name}</div>
            <button onClick={handleLogout} className="btn btn-outline-light ms-2">Logout</button>
          </>
        ) : (
          <a href="/login" className="btn btn-outline-light bg-black">Login</a>
        )}
      </div>
    </div>
  );
}
