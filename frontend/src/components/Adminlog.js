// // // import React, { useState } from 'react';
// // // import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

// // // const AdminLogin = () => {
// // //   const [username, setUsername] = useState('');
// // //   const [password, setPassword] = useState('');
// // //   const [error, setError] = useState('');

// // //   const handleSubmit = (event) => {
// // //     event.preventDefault();
// // //     if (username === '' || password === '') {
// // //       setError('Username and password are required.');
// // //       return;
// // //     }
// // //     // Handle login logic here
// // //     console.log('Username:', username);
// // //     console.log('Password:', password);
// // //     setError(''); // Clear error on successful submission
// // //   };

// // //   return (
// // //     <div className="container d-flex justify-content-center align-items-center vh-100">
// // //       <div className="card p-4 shadow" style={{ maxWidth: '400px', width: '100%' }}>
// // //         <h3 className="card-title mb-4">Admin Login</h3>
// // //         {error && <div className="alert alert-danger" role="alert">{error}</div>}
// // //         <form onSubmit={handleSubmit}>
// // //           <div className="mb-3">
// // //             <label htmlFor="username" className="form-label">Username</label>
// // //             <input
// // //               type="text"
// // //               id="username"
// // //               className="form-control"
// // //               value={username}
// // //               onChange={(e) => setUsername(e.target.value)}
// // //               required
// // //             />
// // //           </div>
// // //           <div className="mb-3">
// // //             <label htmlFor="password" className="form-label">Password</label>
// // //             <input
// // //               type="password"
// // //               id="password"
// // //               className="form-control"
// // //               value={password}
// // //               onChange={(e) => setPassword(e.target.value)}
// // //               required
// // //             />
// // //           </div>
// // //           <button type="submit" className="btn btn-primary w-100">Login</button>
// // //         </form>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default AdminLogin;

// // import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

// // const AdminLogin = () => {
// //   const [username, setUsername] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [error, setError] = useState('');

// //   const navigate = useNavigate(); // Hook to navigate programmatically

// //   const handleSubmit = (event) => {
// //     event.preventDefault();
// //     if (username === '' || password === '') {
// //       setError('Username and password are required.');
// //       return;
// //     }
// //     // Handle login logic here
// //     console.log('Username:', username);
// //     console.log('Password:', password);
// //     setError(''); // Clear error on successful submission

// //     // Navigate to the AdminIndex component
// //     navigate('/adminindex');
// //   };

// //   return (
// //     <div className="container d-flex justify-content-center align-items-center vh-100">
// //       <div className="card p-4 shadow" style={{ maxWidth: '400px', width: '100%' }}>
// //         <h3 className="card-title mb-4">Admin Login</h3>
// //         {error && <div className="alert alert-danger" role="alert">{error}</div>}
// //         <form onSubmit={handleSubmit}>
// //           <div className="mb-3">
// //             <label htmlFor="username" className="form-label">Username</label>
// //             <input
// //               type="text"
// //               id="username"
// //               className="form-control"
// //               value={username}
// //               onChange={(e) => setUsername(e.target.value)}
// //               required
// //             />
// //           </div>
// //           <div className="mb-3">
// //             <label htmlFor="password" className="form-label">Password</label>
// //             <input
// //               type="password"
// //               id="password"
// //               className="form-control"
// //               value={password}
// //               onChange={(e) => setPassword(e.target.value)}
// //               required
// //             />
// //           </div>
// //           <button type="submit" className="btn btn-primary w-100">Login</button>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default AdminLogin;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

// const AdminLogin = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const navigate = useNavigate(); // Hook to navigate programmatically

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     if (email === '' || password === '') {
//       setError('Email and password are required.');
//       return;
//     }

//     try {
//       // Send login request to the server
//       const response = await fetch('http://localhost:5000/loginsubmit', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         // Login successful
//         console.log('Login successful:', data);
//         navigate('/adminindex');
//       } else {
//         // Login failed
//         setError(data.message);
//       }
//     } catch (error) {
//       console.error('Error during login:', error);
//       setError('Internal server error');
//     }
//   };

//   return (
//     <div className="container d-flex justify-content-center align-items-center vh-100">
//       <div className="card p-4 shadow" style={{ maxWidth: '400px', width: '100%' }}>
//         <h3 className="card-title mb-4">Admin Login</h3>
//         {error && <div className="alert alert-danger" role="alert">{error}</div>}
//         <form onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <label htmlFor="email" className="form-label">Email</label>
//             <input
//               type="email"
//               id="email"
//               className="form-control"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="password" className="form-label">Password</label>
//             <input
//               type="password"
//               id="password"
//               className="form-control"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <button type="submit" className="btn btn-primary w-100">Login</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AdminLogin;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (email === '' || password === '') {
      setError('Email and password are required.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/loginsubmit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('user', JSON.stringify(data.user)); // Save user data to local storage
        navigate('/adminindex');
      } else {
        setError(data.message);
      }
    } catch (error) {
      console.error('Error during login:', error);
      setError('Internal server error');
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow" style={{ maxWidth: '400px', width: '100%' }}>
        <h3 className="card-title mb-4">Admin Login</h3>
        {error && <div className="alert alert-danger" role="alert">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              id="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              id="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Login</button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
