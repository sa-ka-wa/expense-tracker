import React, { useState } from "react";
import ExpenseList from "./output.jsx";
import Input from "./input.jsx";
import Initialtasks from "./constants/tasks.js";
function App() {
  const [tasks, setTasks] = useState(Initialtasks);
  const addExpense = (newExpense) => {
    setTasks([...tasks, { id: Date.now(), ...newExpense }]);
  };
  return (
    <>
      <Input onAddExpense={addExpense} />
      <ExpenseList tasks={tasks} />
    </>
  );
}

export default App;
