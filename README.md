# Expense Manager Project

## Project Overview

This is a React.js class component-based Expense Manager application that tracks income and expenses. It offers features such as:

- Date selection with a calendar (select by date, month, year).
- An expense form with fields for title, amount, comment, and type (income/expense).
- An expense list that reflects the exact selected date and time.
- A balance component showing income, expenses, and balance with icons.
- A pie chart comparing monthly, quarterly, half-yearly, and yearly data.
- A downloadable PDF formatted like a bank statement with comments and credit/debit labels.

## How to Run the Project

1. Clone the repository:
2. Install dependencies:
   npm install
3. Run the application:
   npm start
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

The project is organized into the following components:

- **Balance.js**: Displays the income, expenses, and balance.
- **Calendar.js**: Provides date selection.
- **ExpenseForm.js**: Allows users to input expense details.
- **ExpenseList.js**: Displays the list of transactions.
- **PDFDownload.js**: Generates a downloadable PDF report.
- **PieChart.js**: Displays comparison charts.

## Advanced CSS Styling

- The project includes advanced CSS for both desktop and mobile views.
- Font styles, hover effects, and responsive layouts ensure a polished design.

## Common Issues Resolved

- Proper handling of date formatting using `moment.js`.
- Correct rendering of icons and layout in the expense list and balance.
- Smooth integration of the calendar with date reflection in the expense list.
  Project Components and Flow
  Balance (Balance.js): Displays income, expenses, and the final balance with icons.
  Calendar (Calendar.js): A date picker for selecting dates, which will be reflected in the expense list.
  ExpenseForm (ExpenseForm.js): Allows users to input details for income or expenses, including title, amount, type (income/expense), and a comment section.
  ExpenseList (ExpenseList.js): Lists all transactions for the selected date, showing the date, time, title, amount, and comments.
  PieChart (PieChart.js): Displays a comparison chart for monthly, quarterly, half-yearly, and yearly expenses.
  PDFDownload (PDFDownload.js): Allows users to download a PDF with transactions formatted as a bank statement.
  Detailed Flow
  Calendar Date Selection: The selected date will be passed to both the ExpenseForm and ExpenseList components.
  Expense Entry: Users can add income or expense transactions with details like title, amount, and comments.
  Expense List Update: The transactions will display along with the selected date and time.
  Balance Update: The balance component will calculate income minus expenses.
  PDF Download: The downloaded PDF will display all transactions in a table format, showing details such as date, amount, comments, and whether it’s a debit or credit.
  Key Points Addressed:
  Icons: Will include up-arrow for income, down-arrow for expenses, and a wallet icon for balance.
  Currency Format: All amounts will be displayed in rupees with appropriate formatting.
  Styling: Advanced CSS will ensure a polished, responsive layout.
