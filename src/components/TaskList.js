import React, { useState } from "react";
import Task from "./Task";

function TaskList({ tasks }) {
  const [taskList, setTaskList] = useState(tasks);

  const handleDelete = (taskToDelete) => {
    const updatedTaskList = taskList.filter((task) => task !== taskToDelete);
    setTaskList(updatedTaskList);
  };

  return (
    <div className="tasks">
      {/* Map through the tasks array and render Task component for each task */}
      {taskList.map((task) => (
        <Task key={task.text} task={task} onDelete={handleDelete} />
      ))}
    </div>
  );
}

export default TaskList;
