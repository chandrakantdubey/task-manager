import React from "react";

function TaskItem({ task, onToggle, onDelete }) {
  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      <div className="task-content">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          className="task-checkbox"
        />
        <span className="task-name">{task.name}</span>
        <span
          className={`status-badge ${task.completed ? "status-completed" : "status-pending"}`}
        >
          {task.completed ? "Completed" : "Pending"}
        </span>
      </div>
      <button onClick={() => onDelete(task.id)} className="delete-button">
        Delete
      </button>
    </div>
  );
}

export default TaskItem;
