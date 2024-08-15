import React from "react";
import "./styles/ExpenseList.css";

class ExpenseList extends React.Component {
  render() {
    const { transactions } = this.props;

    return (
      <div className="expense-list-container">
        <h3>Transactions</h3>
        <ul>
          {transactions.map((transaction) => (
            <li key={transaction.id} className={transaction.type}>
              <span>
                {transaction.date.toLocaleDateString()}{" "}
                {transaction.date.toLocaleTimeString()}
              </span>
              <span>{transaction.title}</span>
              <span>₹{transaction.amount.toLocaleString()}</span>
              <span>{transaction.comment}</span>
              <button
                onClick={() => this.props.deleteTransaction(transaction.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ExpenseList;
