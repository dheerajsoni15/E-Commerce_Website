import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember_me: false
  });

  const [responseMessage, setResponseMessage] = useState('');
  const navigate = useNavigate();

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
      const response = await fetch('http://localhost:5000/loginsubmit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok) {
        // Save user data and token to localStorage or sessionStorage
        if (formData.remember_me) {
          localStorage.setItem('user', JSON.stringify(result.user));
          localStorage.setItem('token', result.token); // Assuming your backend sends a token
        } else {
          sessionStorage.setItem('user', JSON.stringify(result.user));
          sessionStorage.setItem('token', result.token); // Assuming your backend sends a token
        }
        
        setResponseMessage(result.message);
        
        // Check if the user is an admin
        if (result.user.role === 'admin') {
          navigate('/adminindex');
        } else {
          navigate('/'); // Or another route for regular users
        }
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
      <section className="bg-warning p-3 p-md-4 p-xl-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6 col-xxl-5">
              <div className="card border-0 shadow-sm rounded-4">
                <div className="card-body p-3 p-md-4 p-xl-5">
                  <div className="row">
                    <div className="col-12">
                      <div className="mb-5">
                        <h3>Log in</h3>
                      </div>
                    </div>
                  </div>
                  <form onSubmit={handleSubmit}>
                    <div className="row gy-3 overflow-hidden">
                      <div className="col-12">
                        <div className="form-floating mb-3">
                          <input
                            type="email"
                            className="form-control"
                            name="email"
                            id="email"
                            placeholder="name@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                          <label htmlFor="email" className="form-label">Email</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating mb-3">
                          <input
                            type="password"
                            className="form-control"
                            name="password"
                            id="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                          />
                          <label htmlFor="password" className="form-label">Password</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="remember_me"
                            id="remember_me"
                            checked={formData.remember_me}
                            onChange={handleChange}
                          />
                          <label className="form-check-label text-secondary" htmlFor="remember_me">
                            Keep me logged in
                          </label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="d-grid">
                          <button className="btn bsb-btn-2xl btn-primary" type="submit">Log in now</button>
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
                      <div className="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-md-end">
                        <a href="/signup" className="link-secondary text-decoration-none">Create new account</a>
                        <a href="/reset" className="link-secondary text-decoration-none">Forgot password</a>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <p className="mt-5 mb-4">Or continue with</p>
                      <div className="d-flex gap-3 flex-column">
                        <a href="#!" className="btn bsb-btn-xl btn-danger">
                          <span className="ms-2 fs-6 text-uppercase">Sign in With Google</span>
                        </a>
                        <a href="#!" className="btn bsb-btn-xl btn-primary">
                          <span className="ms-2 fs-6 text-uppercase">Sign in With Facebook</span>
                        </a>
                        <a href="#!" className="btn bsb-btn-xl btn-info">
                          <span className="ms-2 fs-6 text-uppercase">Sign in With Twitter</span>
                        </a>
                      </div>
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
