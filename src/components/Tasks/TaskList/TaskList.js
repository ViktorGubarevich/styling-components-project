import React from "react";

import Task from "../Task/Task";
import "./TaskList.css";

const TaskList = ({ items, onDeleteTask }) => {
  return (
    <ul className="task-list">
      {items.map((task) => (
        <Task key={task.id} id={task.id} onDelete={onDeleteTask}>
          {task.text}
        </Task>
      ))}
    </ul>
  );
};

export default TaskList;
