import React from "react";

function Input() {
  return (
    <>
      <h1>Add Expense</h1>
      <div>
        <input type="text" placeholder="Expense" />
        <input type="text" placeholder="Description" />
        <input type="text" placeholder="Category" />
        <input type="number" placeholder="Amount" />
        <input type="date" placeholder="Date" />
        <button type="submit">Add Expense</button>
      </div>
    </>
  );
}
export default Input;
