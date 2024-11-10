import React, { useState } from 'react';
import './ChangeAdminCredentials.css';

function ChangeAdminCredentials() {
  const [adminId, setAdminId] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSave = (e) => {
    e.preventDefault();
    // Save new admin ID and password in localStorage
    localStorage.setItem('adminId', adminId);
    localStorage.setItem('adminPassword', adminPassword);
    setSuccessMessage('Admin credentials updated successfully!');
    setAdminId('');
    setAdminPassword('');
  };

  return (
    <div className="form-container">
      <h1>Change Admin Credentials</h1>
      {successMessage && <p className="success-message">{successMessage}</p>}
      <form onSubmit={handleSave}>
        <div className="form-group">
          <label htmlFor="adminId">New Admin ID</label>
          <input
            type="text"
            id="adminId"
            value={adminId}
            onChange={(e) => setAdminId(e.target.value)}
            placeholder="Enter new admin ID"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="adminPassword">New Admin Password</label>
          <input
            type="password"
            id="adminPassword"
            value={adminPassword}
            onChange={(e) => setAdminPassword(e.target.value)}
            placeholder="Enter new admin password"
            required
          />
        </div>
        <button type="submit" className="save-button">Save Changes</button>
      </form>
    </div>
  );
}

export default ChangeAdminCredentials;
