import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Dashboard = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });

    const [editMode, setEditMode] = useState(false);
    const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('/127.0.0.1:27017/Customers')
      .then(res => setUser(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    try {
      const res = await axios.put('/api/user/update', user);
      setMessage('Profile updated successfully!');
      setEditMode(false);
    } catch (err) {
      setMessage('Error updating profile.');
    }
  };

  const navigate = useNavigate();
  const handleLogout = () => {
    navigate('/login');

  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-2xl">
      <h2 className="text-2xl font-semibold mb-4">User Dashboard</h2>

      <div className="space-y-4">
        <div>
          <label className="block font-medium">Name:</label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            disabled={!editMode}
            className="w-full border rounded p-2"
          />
        </div>

        <div>
          <label className="block font-medium">Email:</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            disabled={!editMode}
            className="w-full border rounded p-2"
          />
        </div>

        <div>
          <label className="block font-medium">Password:</label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            disabled={!editMode}
            className="w-full border rounded p-2"
            placeholder={editMode ? 'Enter new password' : '********'}
          />
        </div>

        <div className="flex gap-4 mt-4">
          {editMode ? (
            <>
              <button onClick={handleUpdate}>Save</button>
              <button  onClick={() => setEditMode(false)}>Cancel</button>
            </>
          ) : (
            <button onClick={() => setEditMode(true)}>Edit Profile</button>
          )}
          <button onClick={handleLogout}>Logout</button>
        </div>

        {message && <p className="text-sm text-green-600 mt-2">{message}</p>}
      </div>
    </div>
  );
};

export default Dashboard;
