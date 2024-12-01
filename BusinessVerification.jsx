import React from 'react';
import { Check, X, Clock, AlertCircle } from 'lucide-react';
import './BusinessVerification.css';

const BusinessVerification = () => {
  const verificationRequests = [
    {
      id: 1,
      businessName: "Tech Solutions Inc",
      registrationDate: "2024-03-15",
      documentType: "Business License",
      status: "Approved",
      submittedBy: "james@techsolutions.com"
    },
    {
      id: 2,
      businessName: "Green Energy Co",
      registrationDate: "2024-03-18",
      documentType: "Tax Certificate",
      status: "Waiting",
      submittedBy: "contact@greenenergy.com"
    },
    {
      id: 3,
      businessName: "Local Cafe Chain",
      registrationDate: "2024-03-17",
      documentType: "Health Permit",
      status: "Rejected",
      submittedBy: "admin@localcafe.com"
    },
    {
      id: 4,
      businessName: "Global Traders Ltd",
      registrationDate: "2024-03-19",
      documentType: "Import License",
      status: "Waiting",
      submittedBy: "info@globaltraders.com"
    }
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Approved':
        return <Check className="status-icon approved" />;
      case 'Rejected':
        return <X className="status-icon rejected" />;
      case 'Waiting':
        return <Clock className="status-icon waiting" />;
      default:
        return <AlertCircle className="status-icon" />;
    }
  };

  return (
    <div className="business-verification-container">
      <div className="business-verification-content">
        <div className="business-verification-header">
          <h2 className="section-title">Business Verification</h2>
          <div className="header-actions">
            <select className="status-filter">
              <option value="all">All Status</option>
              <option value="approved">Approved</option>
              <option value="rejected">Rejected</option>
              <option value="waiting">Waiting</option>
            </select>
          </div>
        </div>
        
        <div className="verification-table-container">
          <table className="verification-table">
            <thead>
              <tr>
                <th>Business Name</th>
                <th>Registration Date</th>
                <th>Document Type</th>
                <th>Submitted By</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {verificationRequests.map(request => (
                <tr key={request.id}>
                  <td>{request.businessName}</td>
                  <td>{request.registrationDate}</td>
                  <td>{request.documentType}</td>
                  <td>{request.submittedBy}</td>
                  <td>
                    <div className={`status-badge ${request.status.toLowerCase()}`}>
                      {getStatusIcon(request.status)}
                      <span>{request.status}</span>
                    </div>
                  </td>
                  <td>
                    <div className="action-buttons">
                      <button className="view-button">View Details</button>
                      {request.status === 'Waiting' && (
                        <>
                          <button className="approve-button">Approve</button>
                          <button className="reject-button">Reject</button>
                        </>
                      )}
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

export default BusinessVerification;
