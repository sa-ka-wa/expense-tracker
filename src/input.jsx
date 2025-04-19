import React from "react";

function Input() {
  function Input({ onAddExpense }) {
  const [expense, setExpense] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!expense || !amount || !date) return;

    onAddExpense({
      expense,
      description,
      category,
      amount: parseFloat(amount),
      date,
    });

    // Clear inputs
    setExpense("");
    setDescription("");
    setCategory("");
    setAmount("");
    setDate("");
  };
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
