import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import "./styles/PieChart.css";

class ExpensePieChart extends React.Component {
  render() {
    const data = this.props.data;

    const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

    return (
      <div className="pie-chart-container">
        <h3>Expense Breakdown</h3>
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx={200}
            cy={200}
            innerRadius={60}
            outerRadius={120}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    );
  }
}

export default ExpensePieChart;
