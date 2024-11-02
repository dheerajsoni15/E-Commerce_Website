import React, { useState, useEffect } from 'react';

// Inline styles
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    margin: '20px',
    backgroundColor: '#f4f4f4',
  },
  userList: {
    listStyleType: 'none',
    padding: 0,
  },
  userItem: {
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    marginBottom: '10px',
    padding: '15px',
    borderRadius: '5px',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
  },
  userInfo: {
    marginBottom: '10px',
  },
  userInfoTitle: {
    margin: 0,
    fontSize: '18px',
  },
  userInfoText: {
    margin: '5px 0',
  },
  deleteButton: {
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

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users from the server
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:5000/users');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/users/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Failed to delete user:', errorData.message);
        return;
      }

      // Remove the user from the local state
      setUsers(users.filter(user => user._id !== id));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div style={styles.container}>
      <h1>User List</h1>
      <ul style={styles.userList}>
        {users.map(user => (
          <li key={user._id} style={styles.userItem}>
            <div style={styles.userInfo}>
              <h2 style={styles.userInfoTitle}>{user.firstName} {user.lastName}</h2>
              <p style={styles.userInfoText}>Email: {user.email}</p>
              <p style={styles.userInfoText}>Address: {user.address}</p>
              <p style={styles.userInfoText}>Password: {user.password}</p>
            </div>
            <button 
              style={styles.deleteButton} 
              onClick={() => handleDelete(user._id)}
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

export default UserList;
