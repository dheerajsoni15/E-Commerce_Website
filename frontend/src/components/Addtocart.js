// // // // import React from 'react';

// // // // export default function Addtocart({ cart, onUpdateQuantity, onRemoveItem }) {
// // // //   const calculateTotal = () => {
// // // //     return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
// // // //   };

// // // //   return (
// // // //     <div>
// // // //       <div className="container-fluid">
// // // //         <div className="row">
// // // //           <aside className="col-lg-9">
// // // //             <div className="card">
// // // //               <div className="table-responsive">
// // // //                 <table className="table table-borderless table-shopping-cart">
// // // //                   <thead className="text-muted">
// // // //                     <tr className="small text-uppercase">
// // // //                       <th scope="col">Product</th>
// // // //                       <th scope="col" width="120">Quantity</th>
// // // //                       <th scope="col" width="120">Price</th>
// // // //                       <th scope="col" className="text-right d-none d-md-block" width="200"></th>
// // // //                     </tr>
// // // //                   </thead>
// // // //                   <tbody>
// // // //                     {cart.map(item => (
// // // //                       <tr key={item._id}>
// // // //                         <td>
// // // //                           <figure className="itemside align-items-center">
// // // //                             <div className="aside">
// // // //                               <img src={`http://localhost:5000/${item.filePath}`} className="img-sm" height="200" alt={item.productName} />
// // // //                             </div>
// // // //                             <figcaption className="info">
// // // //                               <a href="#" className="title text-dark">{item.productName}</a>
// // // //                               <p className="text-muted small">NAME: {item.productName}</p>
// // // //                             </figcaption>
// // // //                           </figure>
// // // //                         </td>
// // // //                         <td>
// // // //                           <select
// // // //                             className="form-control"
// // // //                             value={item.quantity}
// // // //                             onChange={(e) => onUpdateQuantity(item._id, parseInt(e.target.value))}
// // // //                           >
// // // //                             {[1, 2, 3, 4].map(q => (
// // // //                               <option key={q} value={q}>{q}</option>
// // // //                             ))}
// // // //                           </select>
// // // //                         </td>
// // // //                         <td>
// // // //                           <div className="price-wrap">
// // // //                             <var className="price">Rs.{item.price}</var>
// // // //                           </div>
// // // //                         </td>
// // // //                         <td className="text-right d-none d-md-block">
// // // //                           <a href="#" className="btn btn-light" onClick={() => onRemoveItem(item._id)}>Remove</a>
// // // //                         </td>
// // // //                       </tr>
// // // //                     ))}
// // // //                   </tbody>
// // // //                 </table>
// // // //               </div>
// // // //             </div>
// // // //           </aside>
// // // //           <aside className="col-lg-3">
// // // //             <div className="card mb-3">
// // // //               <div className="card-body">
// // // //                 <form>
// // // //                   <div className="form-group">
// // // //                     <label>Have coupon?</label>
// // // //                     <div className="input-group">
// // // //                       <input type="text" className="form-control coupon" name="" placeholder="Coupon code" />
// // // //                       <span className="input-group-append">
// // // //                         <button className="btn btn-primary btn-apply coupon">Apply</button>
// // // //                       </span>
// // // //                     </div>
// // // //                   </div>
// // // //                 </form>
// // // //               </div>
// // // //             </div>
// // // //             <div className="card">
// // // //               <div className="card-body">
// // // //                 <dl className="dlist-align">
// // // //                   <dt>Total price:</dt>
// // // //                   <dd className="text-right ml-3">Rs.{calculateTotal()}</dd>
// // // //                 </dl>
// // // //                 <dl className="dlist-align">
// // // //                   <dt>Discount:</dt>
// // // //                   <dd className="text-right text-danger ml-3">- Rs.0</dd>
// // // //                 </dl>
// // // //                 <dl className="dlist-align">
// // // //                   <dt>Total:</dt>
// // // //                   <dd className="text-right text-dark b ml-3"><strong>Rs.{calculateTotal()}</strong></dd>
// // // //                 </dl>
// // // //                 <hr />
// // // //                 <a href="#" className="btn btn-out btn-primary btn-square btn-main">Make Purchase</a>
// // // //                 <a href="/" className="btn btn-out btn-success btn-square btn-main mt-2">Continue Shopping</a>
// // // //               </div>
// // // //             </div>
// // // //           </aside>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // // src/components/Addtocart.js
// // // import React from 'react';
// // // import axios from 'axios'; // Make sure axios is installed

// // // export default function Addtocart({ cart, onUpdateQuantity, onRemoveItem }) {
// // //   const calculateTotal = () => {
// // //     return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
// // //   };

// // //   const handlePurchase = async () => {
// // //     const total = calculateTotal();
// // //     const email = 'prajapatidheeraj557@gmail.com'; // Replace with actual email from user login

// // //     try {
// // //       await axios.post('http://localhost:5000/api/send-purchase-email', {
// // //         email,
// // //         total,
// // //       });
// // //       alert('Purchase successful! Confirmation email sent.');
// // //     } catch (error) {
// // //       alert('Failed to send email. Please try again.');
// // //     }
// // //   };

// // //   return (
// // //     <div>
// // //       <div className="container-fluid">
// // //         <div className="row">
// // //           <aside className="col-lg-9">
// // //             <div className="card">
// // //               <div className="table-responsive">
// // //                 <table className="table table-borderless table-shopping-cart">
// // //                   <thead className="text-muted">
// // //                     <tr className="small text-uppercase">
// // //                       <th scope="col">Product</th>
// // //                       <th scope="col" width="120">Quantity</th>
// // //                       <th scope="col" width="120">Price</th>
// // //                       <th scope="col" className="text-right d-none d-md-block" width="200"></th>
// // //                     </tr>
// // //                   </thead>
// // //                   <tbody>
// // //                     {cart.map(item => (
// // //                       <tr key={item._id}>
// // //                         <td>
// // //                           <figure className="itemside align-items-center">
// // //                             <div className="aside">
// // //                               <img src={`http://localhost:5000/${item.filePath}`} className="img-sm" height="200" alt={item.productName} />
// // //                             </div>
// // //                             <figcaption className="info">
// // //                               <a href="#" className="title text-dark">{item.productName}</a>
// // //                               <p className="text-muted small">NAME: {item.productName}</p>
// // //                             </figcaption>
// // //                           </figure>
// // //                         </td>
// // //                         <td>
// // //                           <select
// // //                             className="form-control"
// // //                             value={item.quantity}
// // //                             onChange={(e) => onUpdateQuantity(item._id, parseInt(e.target.value))}
// // //                           >
// // //                             {[1, 2, 3, 4].map(q => (
// // //                               <option key={q} value={q}>{q}</option>
// // //                             ))}
// // //                           </select>
// // //                         </td>
// // //                         <td>
// // //                           <div className="price-wrap">
// // //                             <var className="price">Rs.{item.price}</var>
// // //                           </div>
// // //                         </td>
// // //                         <td className="text-right d-none d-md-block">
// // //                           <a href="#" className="btn btn-light" onClick={() => onRemoveItem(item._id)}>Remove</a>
// // //                         </td>
// // //                       </tr>
// // //                     ))}
// // //                   </tbody>
// // //                 </table>
// // //               </div>
// // //             </div>
// // //           </aside>
// // //           <aside className="col-lg-3">
// // //             <div className="card mb-3">
// // //               <div className="card-body">
// // //                 <form>
// // //                   <div className="form-group">
// // //                     <label>Have coupon?</label>
// // //                     <div className="input-group">
// // //                       <input type="text" className="form-control coupon" name="" placeholder="Coupon code" />
// // //                       <span className="input-group-append">
// // //                         <button className="btn btn-primary btn-apply coupon">Apply</button>
// // //                       </span>
// // //                     </div>
// // //                   </div>
// // //                 </form>
// // //               </div>
// // //             </div>
// // //             <div className="card">
// // //               <div className="card-body">
// // //                 <dl className="dlist-align">
// // //                   <dt>Total price:</dt>
// // //                   <dd className="text-right ml-3">Rs.{calculateTotal()}</dd>
// // //                 </dl>
// // //                 <dl className="dlist-align">
// // //                   <dt>Discount:</dt>
// // //                   <dd className="text-right text-danger ml-3">- Rs.0</dd>
// // //                 </dl>
// // //                 <dl className="dlist-align">
// // //                   <dt>Total:</dt>
// // //                   <dd className="text-right text-dark b ml-3"><strong>Rs.{calculateTotal()}</strong></dd>
// // //                 </dl>
// // //                 <hr />
// // //                 <button type="button" className="btn btn-out btn-primary btn-square btn-main" onClick={handlePurchase}>
// // //                   Make Purchase
// // //                 </button>
// // //                 <a href="/" className="btn btn-out btn-success btn-square btn-main mt-2">Continue Shopping</a>
// // //               </div>
// // //             </div>
// // //           </aside>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // import React from 'react';
// // import axios from 'axios';

// // export default function Addtocart({ cart, onUpdateQuantity, onRemoveItem }) {
// //   const calculateTotal = () => {
// //     return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
// //   };

// //   const handlePurchase = async () => {
// //     const total = calculateTotal();
// //     // Retrieve user information from local storage or session storage
// //     const user = JSON.parse(localStorage.getItem('user')) || JSON.parse(sessionStorage.getItem('user'));
// //     const email = user?.email; // Access the email property from user object

// //     if (!email) {
// //       alert('User email not found. Please log in again.');
// //       return;
// //     }

// //     try {
// //       await axios.post('http://localhost:5000/api/send-purchase-email', {
// //         email,
// //         total,
// //       });
// //       alert('Purchase successful! Confirmation email sent.');
// //     } catch (error) {
// //       console.error('Error sending purchase request:', error.response ? error.response.data : error.message);
// //       alert('Failed to send email. Please try again.');
// //     }
// //   };

// //   return (
// //     <div>
// //       <div className="container-fluid">
// //         <div className="row">
// //           <aside className="col-lg-9">
// //             <div className="card">
// //               <div className="table-responsive">
// //                 <table className="table table-borderless table-shopping-cart">
// //                   <thead className="text-muted">
// //                     <tr className="small text-uppercase">
// //                       <th scope="col">Product</th>
// //                       <th scope="col" width="120">Quantity</th>
// //                       <th scope="col" width="120">Price</th>
// //                       <th scope="col" className="text-right d-none d-md-block" width="200"></th>
// //                     </tr>
// //                   </thead>
// //                   <tbody>
// //                     {cart.map(item => (
// //                       <tr key={item._id}>
// //                         <td>
// //                           <figure className="itemside align-items-center">
// //                             <div className="aside">
// //                               <img src={`http://localhost:5000/${item.filePath}`} className="img-sm" height="200" alt={item.productName} />
// //                             </div>
// //                             <figcaption className="info">
// //                               <a href="#" className="title text-dark">{item.productName}</a>
// //                               <p className="text-muted small">NAME: {item.productName}</p>
// //                             </figcaption>
// //                           </figure>
// //                         </td>
// //                         <td>
// //                           <select
// //                             className="form-control"
// //                             value={item.quantity}
// //                             onChange={(e) => onUpdateQuantity(item._id, parseInt(e.target.value))}
// //                           >
// //                             {[1, 2, 3, 4].map(q => (
// //                               <option key={q} value={q}>{q}</option>
// //                             ))}
// //                           </select>
// //                         </td>
// //                         <td>
// //                           <div className="price-wrap">
// //                             <var className="price">Rs.{item.price}</var>
// //                           </div>
// //                         </td>
// //                         <td className="text-right d-none d-md-block">
// //                           <a href="#" className="btn btn-light" onClick={() => onRemoveItem(item._id)}>Remove</a>
// //                         </td>
// //                       </tr>
// //                     ))}
// //                   </tbody>
// //                 </table>
// //               </div>
// //             </div>
// //           </aside>
// //           <aside className="col-lg-3">
// //             <div className="card mb-3">
// //               <div className="card-body">
// //                 <form>
// //                   <div className="form-group">
// //                     <label>Have coupon?</label>
// //                     <div className="input-group">
// //                       <input type="text" className="form-control coupon" name="" placeholder="Coupon code" />
// //                       <span className="input-group-append">
// //                         <button className="btn btn-primary btn-apply coupon">Apply</button>
// //                       </span>
// //                     </div>
// //                   </div>
// //                 </form>
// //               </div>
// //             </div>
// //             <div className="card">
// //               <div className="card-body">
// //                 <dl className="dlist-align">
// //                   <dt>Total price:</dt>
// //                   <dd className="text-right ml-3">Rs.{calculateTotal()}</dd>
// //                 </dl>
// //                 <dl className="dlist-align">
// //                   <dt>Discount:</dt>
// //                   <dd className="text-right text-danger ml-3">- Rs.0</dd>
// //                 </dl>
// //                 <dl className="dlist-align">
// //                   <dt>Total:</dt>
// //                   <dd className="text-right text-dark b ml-3"><strong>Rs.{calculateTotal()}</strong></dd>
// //                 </dl>
// //                 <hr />
// //                 <button type="button" className="btn btn-out btn-primary btn-square btn-main" onClick={handlePurchase}>
// //                   Make Purchase
// //                 </button>
// //                 <a href="/" className="btn btn-out btn-success btn-square btn-main mt-2">Continue Shopping</a>
// //               </div>
// //             </div>
// //           </aside>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// import React from 'react';
// import axios from 'axios';

// export default function Addtocart({ cart, onUpdateQuantity, onRemoveItem }) {
//   const calculateTotal = () => {
//     return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
//   };

//   const handlePurchase = async () => {
//     const total = calculateTotal();
//     const user = JSON.parse(localStorage.getItem('user')) || JSON.parse(sessionStorage.getItem('user'));
//     const email = user?.email; // Access the email property from user object

//     if (!email) {
//       alert('User email not found. Please log in again.');
//       return;
//     }

//     // Prepare the products data
//     const products = cart.map(item => ({
//       name: item.productName,
//       quantity: item.quantity,
//       price: item.price,
//     }));

//     try {
//       await axios.post('http://localhost:5000/api/send-purchase-email', {
//         email,
//         products, // Send product details
//         total,
//       });
//       alert('Purchase successful! Confirmation email sent.');
//     } catch (error) {
//       console.error('Error sending purchase request:', error.response ? error.response.data : error.message);
//       alert('Failed to send email. Please try again.');
//     }
//   };

//   return (
//     <div>
//       <div className="container-fluid">
//         <div className="row">
//           <aside className="col-lg-9">
//             <div className="card">
//               <div className="table-responsive">
//                 <table className="table table-borderless table-shopping-cart">
//                   <thead className="text-muted">
//                     <tr className="small text-uppercase">
//                       <th scope="col">Product</th>
//                       <th scope="col" width="120">Quantity</th>
//                       <th scope="col" width="120">Price</th>
//                       <th scope="col" className="text-right d-none d-md-block" width="200"></th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {cart.map(item => (
//                       <tr key={item._id}>
//                         <td>
//                           <figure className="itemside align-items-center">
//                             <div className="aside">
//                               <img src={`http://localhost:5000/${item.filePath}`} className="img-sm" height="200" alt={item.productName} />
//                             </div>
//                             <figcaption className="info">
//                               <a href="#" className="title text-dark">{item.productName}</a>
//                               <p className="text-muted small">NAME: {item.productName}</p>
//                             </figcaption>
//                           </figure>
//                         </td>
//                         <td>
//                           <select
//                             className="form-control"
//                             value={item.quantity}
//                             onChange={(e) => onUpdateQuantity(item._id, parseInt(e.target.value))}
//                           >
//                             {[1, 2, 3, 4].map(q => (
//                               <option key={q} value={q}>{q}</option>
//                             ))}
//                           </select>
//                         </td>
//                         <td>
//                           <div className="price-wrap">
//                             <var className="price">Rs.{item.price}</var>
//                           </div>
//                         </td>
//                         <td className="text-right d-none d-md-block">
//                           <a href="#" className="btn btn-light" onClick={() => onRemoveItem(item._id)}>Remove</a>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </aside>
//           <aside className="col-lg-3">
//             <div className="card mb-3">
//               <div className="card-body">
//                 <form>
//                   <div className="form-group">
//                     <label>Have coupon?</label>
//                     <div className="input-group">
//                       <input type="text" className="form-control coupon" name="" placeholder="Coupon code" />
//                       <span className="input-group-append">
//                         <button className="btn btn-primary btn-apply coupon">Apply</button>
//                       </span>
//                     </div>
//                   </div>
//                 </form>
//               </div>
//             </div>
//             <div className="card">
//               <div className="card-body">
//                 <dl className="dlist-align">
//                   <dt>Total price:</dt>
//                   <dd className="text-right ml-3">Rs.{calculateTotal()}</dd>
//                 </dl>
//                 <dl className="dlist-align">
//                   <dt>Discount:</dt>
//                   <dd className="text-right text-danger ml-3">- Rs.0</dd>
//                 </dl>
//                 <dl className="dlist-align">
//                   <dt>Total:</dt>
//                   <dd className="text-right text-dark b ml-3"><strong>Rs.{calculateTotal()}</strong></dd>
//                 </dl>
//                 <hr />
//                 <button type="button" className="btn btn-out btn-primary btn-square btn-main" onClick={handlePurchase}>
//                   Make Purchase
//                 </button>
//                 <a href="/" className="btn btn-out btn-success btn-square btn-main mt-2">Continue Shopping</a>
//               </div>
//             </div>
//           </aside>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Addtocart({ cart, onUpdateQuantity, onRemoveItem }) {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handlePurchase = async () => {
    const total = calculateTotal();
    const user = JSON.parse(localStorage.getItem('user')) || JSON.parse(sessionStorage.getItem('user'));
    const email = user?.email; // Access the email property from user object

    if (!email) {
      alert('User email not found. Please log in again.');
      return;
    }

    // Prepare the products data
    const products = cart.map(item => ({
      name: item.productName,
      quantity: item.quantity,
      price: item.price,
    }));

    try {
      await axios.post('http://localhost:5000/api/send-purchase-email', {
        email,
        products, // Send product details
        total,
      });
      alert('Purchase successful! Confirmation email sent.');
      navigate('/'); // Redirect to home page
    } catch (error) {
      console.error('Error sending purchase request:', error.response ? error.response.data : error.message);
      alert('Failed to send email. Please try again.');
    }
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <aside className="col-lg-9">
            <div className="card">
              <div className="table-responsive">
                <table className="table table-borderless table-shopping-cart">
                  <thead className="text-muted">
                    <tr className="small text-uppercase">
                      <th scope="col">Product</th>
                      <th scope="col" width="120">Quantity</th>
                      <th scope="col" width="120">Price</th>
                      <th scope="col" className="text-right d-none d-md-block" width="200"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map(item => (
                      <tr key={item._id}>
                        <td>
                          <figure className="itemside align-items-center">
                            <div className="aside">
                              <img src={`http://localhost:5000/${item.filePath}`} className="img-sm" height="200" alt={item.productName} />
                            </div>
                            <figcaption className="info">
                              <a href="#" className="title text-dark">{item.productName}</a>
                              <p className="text-muted small">NAME: {item.productName}</p>
                            </figcaption>
                          </figure>
                        </td>
                        <td>
                          <select
                            className="form-control"
                            value={item.quantity}
                            onChange={(e) => onUpdateQuantity(item._id, parseInt(e.target.value))}
                          >
                            {[1, 2, 3, 4].map(q => (
                              <option key={q} value={q}>{q}</option>
                            ))}
                          </select>
                        </td>
                        <td>
                          <div className="price-wrap">
                            <var className="price">Rs.{item.price}</var>
                          </div>
                        </td>
                        <td className="text-right d-none d-md-block">
                          <a href="#" className="btn btn-light" onClick={() => onRemoveItem(item._id)}>Remove</a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </aside>
          <aside className="col-lg-3">
            <div className="card mb-3">
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label>Have coupon?</label>
                    <div className="input-group">
                      <input type="text" className="form-control coupon" name="" placeholder="Coupon code" />
                      <span className="input-group-append">
                        <button className="btn btn-primary btn-apply coupon">Apply</button>
                      </span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <dl className="dlist-align">
                  <dt>Total price:</dt>
                  <dd className="text-right ml-3">Rs.{calculateTotal()}</dd>
                </dl>
                <dl className="dlist-align">
                  <dt>Discount:</dt>
                  <dd className="text-right text-danger ml-3">- Rs.0</dd>
                </dl>
                <dl className="dlist-align">
                  <dt>Total:</dt>
                  <dd className="text-right text-dark b ml-3"><strong>Rs.{calculateTotal()}</strong></dd>
                </dl>
                <hr />
                <button type="button" className="btn btn-out btn-primary btn-square btn-main" onClick={handlePurchase}>
                  Make Purchase
                </button>
                <a href="/" className="btn btn-out btn-success btn-square btn-main mt-2">Continue Shopping</a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
