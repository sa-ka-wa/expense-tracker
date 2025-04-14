import React from "react";
import ExpenseList from "./output.jsx";
import Input from "./input.jsx";
import tasks from "./constants/tasks.js";
function App() {
  return (
    <>
      <Input />
      <ExpenseList tasks={tasks} />
    </>
  );
}

export default App;
