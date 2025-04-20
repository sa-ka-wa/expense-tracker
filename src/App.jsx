import React, { useState } from "react";
import ExpenseList from "./output.jsx";
import Input from "./input.jsx";
import SearchBar from "./Search.jsx";
import Initialtasks from "./constants/tasks.js";
function App() {
  const [search, setSearch] = useState("");
  const [tasks, setTasks] = useState(Initialtasks);
  const addExpense = (newExpense) => {
    setTasks([...tasks, { id: Date.now(), ...newExpense }]);
  };
  const filteredTasks = tasks.filter(
    (task) =>
      task.description.toLowerCase().includes(search.toLowerCase()) ||
      task.category.toLowerCase().includes(search.toLowerCase()) ||
      task.expense.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <>
      <div className="App">
        <Input onAddExpense={addExpense} />
        <div className="expense-list-wrapper">
          <SearchBar search={search} setSearch={setSearch} />
          <ExpenseList tasks={filteredTasks} />
        </div>
      </div>
    </>
  );
}

export default App;
