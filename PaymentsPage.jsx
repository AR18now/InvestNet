import React, { useState, useEffect } from "react";
import Header from "../components/Header/Header"; // Import your existing Header component
import Sidebar from "../components/Sidebar/Sidebar"; // Import Sidebar
import "./PaymentsPage.css";

const PaymentsPage = () => {
  const [paymentHistory, setPaymentHistory] = useState([]);
  const [currentDeal, setCurrentDeal] = useState(null);

  useEffect(() => {
    // Simulated API call for payment data
    const fetchPayments = async () => {
      // Mock current deal data
      const deal = {
        id: "deal123",
        title: "Seed Funding for Project Alpha",
        amount: 50000,
        invest: 25000,
        deadline: "2024-12-31",
      };
      setCurrentDeal(deal);

      // Mock payment history data
      const history = [
        {
          id: "tx001",
          date: "2024-01-10",
          investor: "John Doe Ventures",
          amount: 10000,
          status: "Completed",
        },
        {
          id: "tx002",
          date: "2024-02-15",
          investor: "Innovate Partners",
          amount: 15000,
          status: "Completed",
        },
        {
          id: "tx003",
          date: "2024-03-20",
          investor: "TechCorp",
          amount: 25000,
          status: "Pending",
        },
      ];
      setPaymentHistory(history);
    };

    fetchPayments();
  }, []);

  return (
    <div className="payments-page">
      <Header />
      <div className="content-container">
        <Sidebar />
        <div className="payments-content">
          {/* Current Deal Section */}
          <div className="current-deal">
            {currentDeal && (
              <>
                <h2>Current Deal</h2>
                <div className="deal-card">
                  <h3>{currentDeal.title}</h3>
                  <p>
                    Amount to Invest: <strong>${currentDeal.amount}</strong>
                  </p>
                  <p>
                    Amount Invested: <strong>${currentDeal.invest}</strong> (
                    {(
                      (currentDeal.received / currentDeal.amount) *
                      100
                    ).toFixed(2)}
                    %)
                  </p>
                  <p>Deadline: {currentDeal.deadline}</p>
                  <div className="progress-bar">
                    <div
                      className="progress"
                      style={{
                        width: `${
                          (currentDeal.received / currentDeal.amount) * 100
                        }%`,
                      }}
                    ></div>
                  </div>
                  <button>View Details</button>
                </div>
              </>
            )}
          </div>

          {/* Payment History Section */}
          <div className="payment-history">
            <h2>Payment History</h2>
            <table className="history-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Investor</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {paymentHistory.map((payment) => (
                  <tr key={payment.id}>
                    <td>{payment.date}</td>
                    <td>{payment.investor}</td>
                    <td>${payment.amount}</td>
                    <td>
                      <span
                        className={`status ${payment.status.toLowerCase()}`}
                      >
                        {payment.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Summary Section */}
          <div className="summary">
            <h2>Summary</h2>
            <div className="summary-card">
              <p>Total Amount Raised: ${currentDeal?.received || 0}</p>
              <p>
                Total Payments Completed:{" "}
                {paymentHistory.filter((p) => p.status === "Completed").length}
              </p>
              <p>
                Pending Payments:{" "}
                {paymentHistory.filter((p) => p.status === "Pending").length}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentsPage;
