import React from 'react';
import { Edit, Trash2 } from 'lucide-react';

const UserManagement = () => {
  const users = [
    { id: 1, name: 'John Smith', role: 'Investor', status: 'Active', email: 'john@example.com' },
    { id: 2, name: 'Sarah Wilson', role: 'Business', status: 'Pending', email: 'sarah@example.com' },
    { id: 3, name: 'Michael Brown', role: 'Admin', status: 'Active', email: 'michael@example.com' },
    { id: 4, name: 'Emma Davis', role: 'Investor', status: 'Inactive', email: 'emma@example.com' },
  ];
  
  return (
    <div className="user-management-container">
      <div className="user-management-content">
        <div className="user-management-header">
          <h2 className="section-title">User Management</h2>
          <button className="add-user-button">
            Add User
          </button>
        </div>
        
        <div className="table-container">
          <table className="users-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Role</th>
                <th>Status</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id}>
                  <td className="user-name">{user.name}</td>
                  <td className="user-role">{user.role}</td>
                  <td>
                    <span className={`status-badge status-${user.status.toLowerCase()}`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="user-email">{user.email}</td>
                  <td>
                    <div className="action-buttons">
                      <button className="edit-button">
                        <Edit className="action-icon" />
                      </button>
                      <button className="delete-button">
                        <Trash2 className="action-icon" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;