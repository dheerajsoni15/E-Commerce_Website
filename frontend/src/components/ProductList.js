// // // import React, { useState } from 'react';

// // // // Sample data for products
// // // const initialProducts = [
// // //   { id: 1, name: 'Product Name 1', price: '$19.99', imageUrl: 'https://via.placeholder.com/100' },
// // //   { id: 2, name: 'Product Name 2', price: '$29.99', imageUrl: 'https://via.placeholder.com/100' },
// // //   { id: 3, name: 'Product Name 3', price: '$39.99', imageUrl: 'https://via.placeholder.com/100' }
// // // ];

// // // // Inline styles
// // // const styles = {
// // //   body: {
// // //     fontFamily: 'Arial, sans-serif',
// // //     margin: '20px',
// // //     backgroundColor: '#f4f4f4',
// // //   },
// // //   productList: {
// // //     listStyleType: 'none',
// // //     padding: 0,
// // //   },
// // //   productItem: {
// // //     backgroundColor: '#fff',
// // //     border: '1px solid #ddd',
// // //     marginBottom: '10px',
// // //     padding: '15px',
// // //     borderRadius: '5px',
// // //     display: 'flex',
// // //     alignItems: 'center',
// // //     position: 'relative',
// // //   },
// // //   productImage: {
// // //     marginRight: '15px',
// // //   },
// // //   productImageImg: {
// // //     maxWidth: '100px',
// // //     maxHeight: '100px',
// // //     borderRadius: '5px',
// // //   },
// // //   productInfo: {
// // //     flex: 1,
// // //   },
// // //   productInfoTitle: {
// // //     margin: 0,
// // //     fontSize: '18px',
// // //   },
// // //   productInfoText: {
// // //     margin: '5px 0',
// // //   },
// // //   productInfoPrice: {
// // //     fontSize: '16px',
// // //     color: '#333',
// // //   },
// // //   deleteButton: {
// // //     position: 'absolute',
// // //     right: '15px',
// // //     top: '15px',
// // //     backgroundColor: '#e74c3c',
// // //     color: '#fff',
// // //     border: 'none',
// // //     padding: '8px 12px',
// // //     borderRadius: '5px',
// // //     cursor: 'pointer',
// // //     fontSize: '14px',
// // //   },
// // //   deleteButtonHover: {
// // //     backgroundColor: '#c0392b',
// // //   },
// // // };

// // // const ProductList = () => {
// // //   const [products, setProducts] = useState(initialProducts);

// // //   const handleDelete = (id) => {
// // //     setProducts(products.filter(product => product.id !== id));
// // //   };

// // //   return (
// // //     <div style={styles.body}>
// // //       <h1>Product List</h1>
// // //       <ul style={styles.productList}>
// // //         {products.map(product => (
// // //           <li key={product.id} style={styles.productItem}>
// // //             <div style={styles.productImage}>
// // //               <img src={product.imageUrl} alt={`Product ${product.id} Image`} style={styles.productImageImg} />
// // //             </div>
// // //             <div style={styles.productInfo}>
// // //               <h2 style={styles.productInfoTitle}>{product.name}</h2>
// // //               <p style={styles.productInfoText}>ID: {product.id.toString().padStart(3, '0')}</p>
// // //               <p style={styles.productInfoPrice}>{product.price}</p>
// // //             </div>
// // //             <button 
// // //               style={styles.deleteButton} 
// // //               onClick={() => handleDelete(product.id)}
// // //               onMouseOver={(e) => e.target.style.backgroundColor = styles.deleteButtonHover.backgroundColor}
// // //               onMouseOut={(e) => e.target.style.backgroundColor = styles.deleteButton.backgroundColor}
// // //             >
// // //               Delete
// // //             </button>
// // //           </li>
// // //         ))}
// // //       </ul>
// // //     </div>
// // //   );
// // // };

// // // export default ProductList;

// // import React, { useState, useEffect } from 'react';

// // // Inline styles
// // const styles = {
// //   body: {
// //     fontFamily: 'Arial, sans-serif',
// //     margin: '20px',
// //     backgroundColor: '#f4f4f4',
// //   },
// //   productList: {
// //     listStyleType: 'none',
// //     padding: 0,
// //   },
// //   productItem: {
// //     backgroundColor: '#fff',
// //     border: '1px solid #ddd',
// //     marginBottom: '10px',
// //     padding: '15px',
// //     borderRadius: '5px',
// //     display: 'flex',
// //     alignItems: 'center',
// //     position: 'relative',
// //   },
// //   productImage: {
// //     marginRight: '15px',
// //   },
// //   productImageImg: {
// //     maxWidth: '100px',
// //     maxHeight: '100px',
// //     borderRadius: '5px',
// //   },
// //   productInfo: {
// //     flex: 1,
// //   },
// //   productInfoTitle: {
// //     margin: 0,
// //     fontSize: '18px',
// //   },
// //   productInfoText: {
// //     margin: '5px 0',
// //   },
// //   productInfoPrice: {
// //     fontSize: '16px',
// //     color: '#333',
// //   },
// //   deleteButton: {
// //     position: 'absolute',
// //     right: '15px',
// //     top: '15px',
// //     backgroundColor: '#e74c3c',
// //     color: '#fff',
// //     border: 'none',
// //     padding: '8px 12px',
// //     borderRadius: '5px',
// //     cursor: 'pointer',
// //     fontSize: '14px',
// //   },
// //   deleteButtonHover: {
// //     backgroundColor: '#c0392b',
// //   },
// // };

// // const ProductList = () => {
// //   const [products, setProducts] = useState([]);

// //   useEffect(() => {
// //     // Fetch products from the server
// //     const fetchProducts = async () => {
// //       try {
// //         const response = await fetch('http://localhost:5000/products');
// //         if (!response.ok) {
// //           throw new Error('Network response was not ok');
// //         }
// //         const data = await response.json();
// //         setProducts(data);
// //       } catch (error) {
// //         console.error('Error fetching products:', error);
// //       }
// //     };

// //     fetchProducts();
// //   }, []);

// //   const handleDelete = async (id) => {
// //     try {
// //       const response = await fetch(`http://localhost:5000/products/${id}`, {
// //         method: 'DELETE',
// //       });

// //       if (!response.ok) {
// //         const errorData = await response.json();
// //         console.error('Failed to delete product:', errorData.message);
// //         return;
// //       }

// //       // Remove the product from the local state
// //       setProducts(products.filter(product => product._id !== id));
// //     } catch (error) {
// //       console.error('Error deleting product:', error);
// //     }
// //   };

// //   return (
// //     <div style={styles.body}>
// //       <h1>Product List</h1>
// //       <ul style={styles.productList}>
// //         {products.map(product => (
// //           <li key={product._id} style={styles.productItem}>
// //             <div style={styles.productImage}>
// //               <img src={product.filePath} alt={`Product ${product._id} Image`} style={styles.productImageImg} />
// //             </div>
// //             <div style={styles.productInfo}>
// //               <h2 style={styles.productInfoTitle}>{product.productName}</h2>
// //               <p style={styles.productInfoText}>ID: {product._id}</p>
// //               <p style={styles.productInfoPrice}>{product.price}</p>
// //             </div>
// //             <button 
// //               style={styles.deleteButton} 
// //               onClick={() => handleDelete(product._id)}
// //               onMouseOver={(e) => e.target.style.backgroundColor = styles.deleteButtonHover.backgroundColor}
// //               onMouseOut={(e) => e.target.style.backgroundColor = styles.deleteButton.backgroundColor}
// //             >
// //               Delete
// //             </button>
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // };

// // export default ProductList;
// import React, { useState, useEffect } from 'react';

// // Inline styles
// const styles = {
//   body: {
//     fontFamily: 'Arial, sans-serif',
//     margin: '20px',
//     backgroundColor: '#f4f4f4',
//   },
//   productList: {
//     listStyleType: 'none',
//     padding: 0,
//   },
//   productItem: {
//     backgroundColor: '#fff',
//     border: '1px solid #ddd',
//     marginBottom: '10px',
//     padding: '15px',
//     borderRadius: '5px',
//     display: 'flex',
//     alignItems: 'center',
//     position: 'relative',
//   },
//   productImage: {
//     marginRight: '15px',
//   },
//   productImageImg: {
//     maxWidth: '100px',
//     maxHeight: '100px',
//     borderRadius: '5px',
//   },
//   productInfo: {
//     flex: 1,
//   },
//   productInfoTitle: {
//     margin: 0,
//     fontSize: '18px',
//   },
//   productInfoText: {
//     margin: '5px 0',
//   },
//   productInfoPrice: {
//     fontSize: '16px',
//     color: '#333',
//   },
//   deleteButton: {
//     position: 'absolute',
//     right: '15px',
//     top: '15px',
//     backgroundColor: '#e74c3c',
//     color: '#fff',
//     border: 'none',
//     padding: '8px 12px',
//     borderRadius: '5px',
//     cursor: 'pointer',
//     fontSize: '14px',
//   },
//   deleteButtonHover: {
//     backgroundColor: '#c0392b',
//   },
// };

// const ProductList = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     // Fetch products from the server
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch('http://localhost:5000/products');
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         setProducts(data);
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   const handleDelete = async (id) => {
//     try {
//       const response = await fetch(`http://localhost:5000/products/${id}`, {
//         method: 'DELETE',
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         console.error('Failed to delete product:', errorData.message);
//         return;
//       }

//       // Remove the product from the local state
//       setProducts(products.filter(product => product._id !== id));
//     } catch (error) {
//       console.error('Error deleting product:', error);
//     }
//   };

//   return (
//     <div style={styles.body}>
//       <h1>Product List</h1>
//       <ul style={styles.productList}>
//         {products.map(product => (
//           <li key={product._id} style={styles.productItem}>
//             <div style={styles.productImage}>
//               <img 
//                 src={`http://localhost:5000/${product.filePath}`} 
//                 alt={`Product ${product._id} Image`} 
//                 style={styles.productImageImg} 
//               />
//             </div>
//             <div style={styles.productInfo}>
//               <h2 style={styles.productInfoTitle}>{product.productName}</h2>
//               <p style={styles.productInfoText}>ID: {product._id}</p>
//               <p style={styles.productInfoPrice}>{product.price}</p>
//             </div>
//             <button 
//               style={styles.deleteButton} 
//               onClick={() => handleDelete(product._id)}
//               onMouseOver={(e) => e.target.style.backgroundColor = styles.deleteButtonHover.backgroundColor}
//               onMouseOut={(e) => e.target.style.backgroundColor = styles.deleteButton.backgroundColor}
//             >
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ProductList;

import React, { useState, useEffect } from 'react';

// Inline styles
const styles = {
  body: {
    fontFamily: 'Arial, sans-serif',
    margin: '20px',
    backgroundColor: '#f4f4f4',
  },
  productList: {
    listStyleType: 'none',
    padding: 0,
  },
  productItem: {
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    marginBottom: '10px',
    padding: '15px',
    borderRadius: '5px',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
  },
  productImage: {
    marginRight: '15px',
  },
  productImageImg: {
    maxWidth: '100px',
    maxHeight: '100px',
    borderRadius: '5px',
  },
  productInfo: {
    flex: 1,
  },
  productInfoTitle: {
    margin: 0,
    fontSize: '18px',
  },
  productInfoText: {
    margin: '5px 0',
  },
  productInfoPrice: {
    fontSize: '16px',
    color: '#333',
  },
  deleteButton: {
    position: 'absolute',
    right: '15px',
    top: '15px',
    backgroundColor: '#e74c3c',
    color: '#fff',
    border: 'none',
    padding: '8px 12px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '14px',
  },
  deleteButtonHover: {
    backgroundColor: '#c0392b',
  },
};

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from the server
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/products');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/products/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Failed to delete product:', errorData.message);
        return;
      }

      // Remove the product from the local state
      setProducts(products.filter(product => product._id !== id));
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <div style={styles.body}>
      <h1>Product List</h1>
      <ul style={styles.productList}>
        {products.map(product => (
          <li key={product._id} style={styles.productItem}>
            <div style={styles.productImage}>
              <img 
                src={`http://localhost:5000/${product.filePath}`} 
                alt={`Product ${product._id} Image`} 
                style={styles.productImageImg} 
              />
            </div>
            <div style={styles.productInfo}>
              <h2 style={styles.productInfoTitle}>{product.productName}</h2>
              <p style={styles.productInfoText}>ID: {product._id}</p>
              <p style={styles.productInfoPrice}>{product.price}</p>
            </div>
            <button 
              style={styles.deleteButton} 
              onClick={() => handleDelete(product._id)}
              onMouseOver={(e) => e.target.style.backgroundColor = styles.deleteButtonHover.backgroundColor}
              onMouseOut={(e) => e.target.style.backgroundColor = styles.deleteButton.backgroundColor}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;

