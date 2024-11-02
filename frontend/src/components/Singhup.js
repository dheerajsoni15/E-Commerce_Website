import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordcon: '',
    address: '',
    iAgree: false
  });

  const [responseMessage, setResponseMessage] = useState('');
  const navigate = useNavigate(); // Hook to handle redirection

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok) {
        setResponseMessage(result.message);
        // Redirect to login page
        navigate('/login');
      } else {
        setResponseMessage(result.message);
      }
    } catch (error) {
      console.error('Error:', error);
      setResponseMessage('An unexpected error occurred.');
    }
  };

  return (
    <div>
      <section className="p-3 p-md-4 p-xl-5">
        <div className="container">
          <div className="row bg-warning">
            <div className="col-12 col-md-6">
              <div className="d-flex flex-column justify-content-between h-100 p-3 p-md-4 p-xl-5">
                <h3 className="m-0">Welcome!</h3>
                <img src="images/images.png" alt=""/>
                <p className="mb-0">Not a member yet? <a href="/signup" className="link-secondary text-decoration-none">Register now</a></p>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="p-3 p-md-4 p-xl-5">
                <div className="row">
                  <div className="col-12">
                    <div className="mb-5">
                      <h2 className="h3">Registration</h2>
                      <h3 className="fs-6 fw-normal text-secondary m-0">Enter your details to register</h3>
                    </div>
                  </div>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="row gy-3 gy-md-4 overflow-hidden">
                    <div className="col-12">
                      <label htmlFor="firstName" className="form-label">First Name <span className="text-danger">*</span></label>
                      <input type="text" className="form-control" name="firstName" id="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required/>
                    </div>
                    <div className="col-12">
                      <label htmlFor="lastName" className="form-label">Last Name <span className="text-danger">*</span></label>
                      <input type="text" className="form-control" name="lastName" id="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required/>
                    </div>
                    <div className="col-12">
                      <label htmlFor="email" className="form-label">Email <span className="text-danger">*</span></label>
                      <input type="email" className="form-control" name="email" id="email" placeholder="name@example.com" value={formData.email} onChange={handleChange} required/>
                    </div>
                    <div className="col-12">
                      <label htmlFor="password" className="form-label">Password <span className="text-danger">*</span></label>
                      <input type="password" className="form-control" name="password" id="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
                    </div>
                    <div className="col-12">
                      <label htmlFor="passwordcon" className="form-label">Confirm Password <span className="text-danger">*</span></label>
                      <input type="password" className="form-control" name="passwordcon" id="passwordcon" placeholder="Confirm Password" value={formData.passwordcon} onChange={handleChange} required/>
                    </div>
                    <div className="col-12">
                      <label htmlFor="address" className="form-label">Address <span className="text-danger">*</span></label>
                      <input type="text" className="form-control" name="address" id="address" placeholder="Address" value={formData.address} onChange={handleChange} required/>
                    </div>
                    <div className="col-12">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="iAgree" id="iAgree" checked={formData.iAgree} onChange={handleChange} required/>
                        <label className="form-check-label text-secondary" htmlFor="iAgree">
                          I agree to the <a href="#!" className="link-primary text-decoration-none">terms and conditions</a>
                        </label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="d-grid">
                        <button className="btn bsb-btn-xl btn-primary" type="submit">Sign up</button>
                      </div>
                    </div>
                  </div>
                </form>
                {responseMessage && (
                  <div className="mt-3">
                    <p className="alert alert-info">{responseMessage}</p>
                  </div>
                )}
                <div className="row">
                  <div className="col-12">
                    <hr className="mt-5 mb-4 border-secondary-subtle"/>
                    <p className="m-0 text-secondary text-end">Already have an account? <a href="/login" className="link-primary text-decoration-none">Sign in</a></p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <p className="mt-5 mb-4">Or continue with</p>
                    <div className="d-flex gap-3 flex-column">
                      <a href="#!" className="btn bsb-btn-xl btn-danger">
                        <span className="ms-2 fs-6 text-uppercase">Sign up With Google</span>
                      </a>
                      <a href="#!" className="btn bsb-btn-xl btn-primary">
                        <span className="ms-2 fs-6 text-uppercase">Sign up With Facebook</span>
                      </a>
                      <a href="#!" className="btn bsb-btn-xl btn-info">
                        <span className="ms-2 fs-6 text-uppercase">Sign up With Twitter</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}