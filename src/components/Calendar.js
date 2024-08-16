import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./styles/Calendar.css";

class Calendar extends React.Component {
  handleChange = (date) => {
    this.props.onDateChange(date);
  };

  render() {
    return (
      <div className="calendar-container">
        <DatePicker
          selected={this.props.selectedDate}
          onChange={this.handleChange}
          dateFormat="dd/MM/yyyy"
          className="date-picker"
          showMonthDropdown
          showYearDropdown
          dropdownMode="select" // Optional: Changes dropdown style to a select menu
        />
      </div>
    );
  }
}

export default Calendar;
