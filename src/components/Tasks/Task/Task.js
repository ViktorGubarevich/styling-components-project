import React from "react";

import "./Task.css";

const Task = ({ onDelete, id, children }) => {
  // const [deleteText, setDeleteText] = useState('');

  const deleteHandler = () => {
    // setDeleteText('(Deleted!)');
    onDelete(id);
  };

  return (
    <li className="task-item" onClick={deleteHandler}>
      {children}
    </li>
  );
};

export default Task;
