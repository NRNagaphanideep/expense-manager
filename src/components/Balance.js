import React from "react";
import "./styles/Balance.css";
import { FaArrowUp, FaArrowDown, FaWallet } from "react-icons/fa";

class Balance extends React.Component {
  render() {
    const { income, expense } = this.props;
    const balance = income - expense;

    return (
      <div className="balance-container">
        <div className="balance-item">
          <FaArrowUp className="icon income-icon" />
          <div>
            <h3>Income</h3>
            <p>₹{income.toLocaleString()}</p>
          </div>
        </div>
        <div className="balance-item">
          <FaArrowDown className="icon expense-icon" />
          <div>
            <h3>Expense</h3>
            <p>₹{expense.toLocaleString()}</p>
          </div>
        </div>
        <div className="balance-item">
          <FaWallet className="icon balance-icon" />
          <div>
            <h3>Balance</h3>
            <p>₹{balance.toLocaleString()}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Balance;
