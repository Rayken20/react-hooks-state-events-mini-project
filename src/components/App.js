import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [filteredCategory, setFilteredCategory] = useState("All");

  const handleCategorySelect = (category) => {
    setFilteredCategory(category);
  };

  const handleTaskFormSubmit = (formData) => {
    const newTask = {
      text: formData.text,
      category: formData.category,
    };
    setTasks([...tasks, newTask]);
  };

  const filteredTasks =
    filteredCategory === "All"
      ? tasks
      : tasks.filter((task) => task.category === filteredCategory);

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        onSelectCategory={handleCategorySelect}
      />
      <NewTaskForm
        categories={CATEGORIES}
        onTaskFormSubmit={handleTaskFormSubmit}
      />
      <TaskList tasks={filteredTasks} />
    </div>
  );
}

export default App;
