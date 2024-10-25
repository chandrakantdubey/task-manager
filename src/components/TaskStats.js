import React from "react";

function TaskStats({ tasks }) {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;
  const pendingTasks = totalTasks - completedTasks;

  return (
    <div className="task-stats">
      <div className="stat-item">
        <span className="stat-label">Total Tasks:</span>
        <span className="stat-value">{totalTasks}</span>
      </div>
      <div className="stat-item">
        <span className="stat-label">Completed:</span>
        <span className="stat-value">{completedTasks}</span>
      </div>
      <div className="stat-item">
        <span className="stat-label">Pending:</span>
        <span className="stat-value">{pendingTasks}</span>
      </div>
    </div>
  );
}

export default TaskStats;
