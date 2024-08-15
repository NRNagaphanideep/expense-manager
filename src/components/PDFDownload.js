import React from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import "./styles/PDFDownload.css";

class PDFDownload extends React.Component {
  generatePDF = () => {
    const doc = new jsPDF();
    const transactions = this.props.transactions.map((transaction) => ({
      date: transaction.date.toLocaleDateString(),
      time: transaction.date.toLocaleTimeString(),
      title: transaction.title,
      amount: `₹${transaction.amount.toLocaleString()}`,
      comment: transaction.comment,
      type: transaction.type === "income" ? "Cr" : "Dr",
    }));

    const headers = [["Date", "Time", "Title", "Amount", "Comment", "Type"]];

    const rows = transactions.map((txn) => [
      txn.date,
      txn.time,
      txn.title,
      txn.amount,
      txn.comment,
      txn.type,
    ]);

    doc.text("Transaction Report", 14, 16);
    doc.autoTable({
      startY: 20,
      head: headers,
      body: rows,
    });

    doc.save("transactions.pdf");
  };

  render() {
    return (
      <div className="pdf-download-container">
        <button onClick={this.generatePDF} className="download-button">
          Download PDF
        </button>
      </div>
    );
  }
}

export default PDFDownload;
