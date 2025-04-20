import React from "react";
// import { tasks } from "../constants/tasks.js";

const ExpenseList = ({ tasks }) => {
  console.log(tasks);

  return (
    <>
      <div className="expense-list">
        <h1>Expense List</h1>
        <table>
          <thead>
            <tr>
              <th>Expense</th>
              <th>Description</th>
              <th>Category</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id}>
                <td>{task.expense}</td>
                <td>{task.description}</td>
                <td>{task.category}</td>
                <td>{task.amount}</td>
                <td>{task.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default ExpenseList;
