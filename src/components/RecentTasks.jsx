function RecentTasks() {
  return (
    <div className="dashboard-card">

      <div className="card-header">
        <h2>Recent Tasks</h2>
      </div>

      <div className="task-list">

        <div className="recent-task">
          <span>☑</span>
          <span>Learn React</span>
        </div>

        <div className="recent-task">
          <span>☐</span>
          <span>Build TodoMate</span>
        </div>

        <div className="recent-task">
          <span>☐</span>
          <span>Learn useState</span>
        </div>

        <div className="recent-task">
          <span>☐</span>
          <span>Create dashboard</span>
        </div>

      </div>

    </div>
  );
}

export default RecentTasks;