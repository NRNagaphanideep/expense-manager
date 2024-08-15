import React from "react";
import "./styles/ExpenseForm.css";

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      amount: "",
      type: "expense",
      comment: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { title, amount, type, comment } = this.state;
    const transaction = {
      id: Date.now(),
      title,
      amount: parseFloat(amount),
      type,
      comment,
      date: this.props.selectedDate,
    };

    this.props.addTransaction(transaction);
    this.setState({ title: "", amount: "", comment: "" });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="expense-form-container">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Title:</label>
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Amount:</label>
            <input
              type="number"
              name="amount"
              value={this.state.amount}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Type:</label>
            <select
              name="type"
              value={this.state.type}
              onChange={this.handleChange}
            >
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
          </div>
          <div className="form-group">
            <label>Comment:</label>
            <input
              type="text"
              name="comment"
              value={this.state.comment}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit" className="submit-button">
            Add Transaction
          </button>
        </form>
      </div>
    );
  }
}

export default ExpenseForm;
