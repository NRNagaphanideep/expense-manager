import React from "react";
import Balance from "./components/Balance";
import Calendar from "./components/Calendar";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import ExpensePieChart from "./components/PieChart";
import PDFDownload from "./components/PDFDownload";
import "./App.css";

class App extends React.Component {
  state = {
    selectedDate: new Date(),
    transactions: [],
    income: 0,
    expense: 0,
  };

  handleDateChange = (date) => {
    this.setState({ selectedDate: date });
  };

  addTransaction = (transaction) => {
    this.setState((prevState) => {
      const updatedTransactions = [...prevState.transactions, transaction];
      const income = updatedTransactions
        .filter((txn) => txn.type === "income")
        .reduce((acc, txn) => acc + txn.amount, 0);
      const expense = updatedTransactions
        .filter((txn) => txn.type === "expense")
        .reduce((acc, txn) => acc + txn.amount, 0);

      return { transactions: updatedTransactions, income, expense };
    });
  };

  deleteTransaction = (id) => {
    this.setState((prevState) => {
      const updatedTransactions = prevState.transactions.filter(
        (txn) => txn.id !== id
      );
      const income = updatedTransactions
        .filter((txn) => txn.type === "income")
        .reduce((acc, txn) => acc + txn.amount, 0);
      const expense = updatedTransactions
        .filter((txn) => txn.type === "expense")
        .reduce((acc, txn) => acc + txn.amount, 0);

      return { transactions: updatedTransactions, income, expense };
    });
  };

  render() {
    const { selectedDate, transactions, income, expense } = this.state;
    const chartData = [
      { name: "Income", value: income },
      { name: "Expense", value: expense },
    ];

    return (
      <div className="app-container">
        <Balance income={income} expense={expense} />
        <Calendar
          selectedDate={selectedDate}
          onDateChange={this.handleDateChange}
        />
        <ExpenseForm
          selectedDate={selectedDate}
          addTransaction={this.addTransaction}
        />
        <ExpenseList
          transactions={transactions.filter(
            (txn) => txn.date.toDateString() === selectedDate.toDateString()
          )}
          deleteTransaction={this.deleteTransaction}
        />
        <ExpensePieChart data={chartData} />
        <PDFDownload transactions={transactions} />
      </div>
    );
  }
}

export default App;
