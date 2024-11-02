// import React, { useState } from 'react';
// import UserList from './UserList'; // Adjust path as necessary
// import ProductList from './ProductList'; // Adjust path as necessary

// const App = () => {
//   const [view, setView] = useState('users'); // Default to 'users' view

//   const handleViewChange = (view) => {
//     setView(view);
//   };

//   return (
//     <div>
//       <button onClick={() => handleViewChange('users')}>Show User List</button>
//       <button onClick={() => handleViewChange('products')}>Show Product List</button>

//       {view === 'users' && <UserList />}
//       {view === 'products' && <ProductList />}
//     </div>
//   );
// };

//  export default App;

// import React, { useState } from 'react';
// import UserList from './UserList'; // Adjust path as necessary
// import ProductList from './ProductList'; // Adjust path as necessary

// const App = () => {
//   const [view, setView] = useState('users'); // Default to 'users' view

//   const handleViewChange = (view) => {
//     setView(view);
//   };

//   // Inline styles
//   const containerStyle = {
//     textAlign: 'center', // Center-align the text (including buttons)
//     margin: '20px',
//   };

//   const buttonStyle = {
//     margin: '10px', // Space between buttons
//     padding: '10px 20px', // Padding for better button appearance
//     fontSize: '16px',
//     cursor: 'pointer',
//   };

//   return (
//     <div style={containerStyle}>
//       <button style={buttonStyle} onClick={() => handleViewChange('users')}>
//         Show User List
//       </button>
//       <button style={buttonStyle} onClick={() => handleViewChange('products')}>
//         Show Product List
//       </button>

//       {view === 'users' && <UserList />}
//       {view === 'products' && <ProductList />}
//     </div>
//   );
// };

// export default App;

import React, { useState } from 'react';
import UserList from './UserList'; // Adjust path as necessary
import ProductList from './ProductList'; // Adjust path as necessary
import Uploadinfo from './Uploadinfo'; // Adjust path as necessary

const App = () => {
  const [view, setView] = useState('users'); // Default to 'users' view

  const handleViewChange = (view) => {
    setView(view);
  };

  // Inline styles
  const containerStyle = {
    textAlign: 'center', // Center-align the text (including buttons)
    margin: '20px',
  };

  const buttonStyle = {
    margin: '10px', // Space between buttons
    padding: '10px 20px', // Padding for better button appearance
    fontSize: '16px',
    cursor: 'pointer',
  };

  return (
    <div style={containerStyle}>
      <button style={buttonStyle} onClick={() => handleViewChange('users')}>
        Show User List
      </button>
      <button style={buttonStyle} onClick={() => handleViewChange('products')}>
        Show Product List
      </button>
      <button style={buttonStyle} onClick={() => handleViewChange('uploads')}>
        Upload Files
      </button>

      {view === 'users' && <UserList />}
      {view === 'products' && <ProductList />}
      {view === 'uploads' && <Uploadinfo />}
    </div>
  );
};

export default App;
