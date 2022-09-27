import "./Task.css";

const Task = ({ onDelete, id, children }) => {
  const deleteHandler = () => {
    onDelete(id);
  };

  return (
    <li className="task-item" onClick={deleteHandler}>
      {children}
    </li>
  );
};

export default Task;
