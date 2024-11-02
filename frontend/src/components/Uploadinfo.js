// import React, { useState } from 'react';
// import axios from 'axios';

// export default function Uploadinfo() {
//   const [productName, setProductName] = useState('');
//   const [priceId, setPriceId] = useState('');
//   const [price, setPrice] = useState('');
//   const [file, setFile] = useState(null);

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append('productName', productName);
//     formData.append('priceId', priceId);
//     formData.append('price', price);
//     formData.append('file', file);

//     try {
//       await axios.post('http://localhost:5000/upload', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       alert('Upload successful!');
//     } catch (error) {
//       console.error('Error uploading file', error);
//       alert('Upload failed');
//     }
//   };

//   return (
//     <div>
//       <section className="vh-100" style={{ backgroundColor: '#2779e2' }}>
//         <div className="container h-100">
//           <div className="row d-flex justify-content-center align-items-center h-100">
//             <div className="col-xl-9">
//               <div className="card" style={{ borderRadius: '15px' }}>
//                 <div className="card-body">
//                   <form onSubmit={handleSubmit}>
//                     <div className="row align-items-center pt-4 pb-3">
//                       <div className="col-md-3 ps-5">
//                         <h6 className="mb-0">Product Name</h6>
//                       </div>
//                       <div className="col-md-9 pe-5">
//                         <input
//                           type="text"
//                           className="form-control form-control-lg"
//                           value={productName}
//                           onChange={(e) => setProductName(e.target.value)}
//                         />
//                       </div>
//                     </div>
//                     <hr className="mx-n3" />
//                     <div className="row align-items-center py-3">
//                       <div className="col-md-3 ps-5">
//                         <h6 className="mb-0">Price Id</h6>
//                       </div>
//                       <div className="col-md-9 pe-5">
//                         <input
//                           type="text"
//                           className="form-control form-control-lg"
//                           placeholder="Price Id"
//                           value={priceId}
//                           onChange={(e) => setPriceId(e.target.value)}
//                         />
//                       </div>
//                     </div>
//                     <hr className="mx-n3" />
//                     <div className="row align-items-center py-3">
//                       <div className="col-md-3 ps-5">
//                         <h6 className="mb-0">Price</h6>
//                       </div>
//                       <div className="col-md-9 pe-5">
//                         <input
//                           type="text"
//                           className="form-control form-control-lg"
//                           placeholder="Price"
//                           value={price}
//                           onChange={(e) => setPrice(e.target.value)}
//                         />
//                       </div>
//                     </div>
//                     <hr className="mx-n3" />
//                     <div className="row align-items-center py-3">
//                       <div className="col-md-3 ps-5">
//                         <h6 className="mb-0">Upload Product</h6>
//                       </div>
//                       <div className="col-md-9 pe-5">
//                         <input
//                           className="form-control form-control-lg"
//                           id="formFileLg"
//                           type="file"
//                           onChange={handleFileChange}
//                         />
//                         <div className="small text-muted mt-2">Product Images relevant file. Max file size 50 MB</div>
//                       </div>
//                     </div>
//                     <hr className="mx-n3" />
//                     <div className="px-5 py-4">
//                       <button type="submit" className="btn btn-primary btn-lg">
//                         Upload
//                       </button>
//                     </div>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

import React, { useState } from 'react';
import axios from 'axios';

export default function Uploadinfo() {
  const [productName, setProductName] = useState('');
  const [priceId, setPriceId] = useState('');
  const [price, setPrice] = useState('');
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.size > 50 * 1024 * 1024) { // 50 MB limit
      setError('File size exceeds 50 MB');
      setFile(null);
    } else {
      setError('');
      setFile(selectedFile);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!productName || !priceId || !price || !file) {
      setError('Please fill out all fields and select a file.');
      return;
    }

    const formData = new FormData();
    formData.append('productName', productName);
    formData.append('priceId', priceId);
    formData.append('price', price);
    formData.append('file', file);

    try {
      await axios.post('http://localhost:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Upload successful!');
      // Clear fields after successful upload
      setProductName('');
      setPriceId('');
      setPrice('');
      setFile(null);
    } catch (error) {
      console.error('Error uploading file', error);
      setError('Upload failed. Please try again.');
    }
  };

  return (
    <div>
      <section className="vh-100" style={{ backgroundColor: '#2779e2' }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-xl-9">
              <div className="card" style={{ borderRadius: '15px' }}>
                <div className="card-body">
                  <form onSubmit={handleSubmit}>
                    {error && <div className="alert alert-danger">{error}</div>}
                    <div className="row align-items-center pt-4 pb-3">
                      <div className="col-md-3 ps-5">
                        <h6 className="mb-0">Product Name</h6>
                      </div>
                      <div className="col-md-9 pe-5">
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          value={productName}
                          onChange={(e) => setProductName(e.target.value)}
                        />
                      </div>
                    </div>
                    <hr className="mx-n3" />
                    <div className="row align-items-center py-3">
                      <div className="col-md-3 ps-5">
                        <h6 className="mb-0">Product Id</h6>
                      </div>
                      <div className="col-md-9 pe-5">
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          placeholder="Price Id"
                          value={priceId}
                          onChange={(e) => setPriceId(e.target.value)}
                        />
                      </div>
                    </div>
                    <hr className="mx-n3" />
                    <div className="row align-items-center py-3">
                      <div className="col-md-3 ps-5">
                        <h6 className="mb-0">Price</h6>
                      </div>
                      <div className="col-md-9 pe-5">
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          placeholder="Price"
                          value={price}
                          onChange={(e) => setPrice(e.target.value)}
                        />
                      </div>
                    </div>
                    <hr className="mx-n3" />
                    <div className="row align-items-center py-3">
                      <div className="col-md-3 ps-5">
                        <h6 className="mb-0">Upload Product</h6>
                      </div>
                      <div className="col-md-9 pe-5">
                        <input
                          className="form-control form-control-lg"
                          id="formFileLg"
                          type="file"
                          onChange={handleFileChange}
                        />
                        <div className="small text-muted mt-2">Product Images relevant file. Max file size 50 MB</div>
                      </div>
                    </div>
                    <hr className="mx-n3" />
                    <div className="px-5 py-4">
                      <button type="submit" className="btn btn-primary btn-lg">
                        Upload
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
