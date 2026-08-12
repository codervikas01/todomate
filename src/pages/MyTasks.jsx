import { useState } from "react";
import TodoItem from "../components/TodoItem";

function MyTasks({ tasks, setTasks }) {

  const [taskText, setTaskText] = useState("");

  const addTask = () => {

    if (taskText.trim() === "") {
      return;
    }

    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false
    };

    setTasks([...tasks, newTask]);

    setTaskText("");
  };

  const toggleTask = (id) => {

    setTasks(
      tasks.map((task) => {

        if (task.id === id) {

          return {
            ...task,
            completed: !task.completed
          };

        }

        return task;

      })
    );
  };

  const deleteTask = (id) => {

    setTasks(
      tasks.filter((task) => task.id !== id)
    );

  };

  return (
    <div className="my-tasks">

      <div className="page-header">

        <h1>My Tasks</h1>

        <p>
          Manage all your tasks from one place.
        </p>

      </div>

      <div className="add-task-card">

        <h2>Add New Task</h2>

        <div className="add-task-form">

          <input
            type="text"
            placeholder="Enter a new task"
            value={taskText}
            onChange={(event) =>
              setTaskText(event.target.value)
            }
          />

          <button onClick={addTask}>
            Add Task
          </button>

        </div>

      </div>

      <div className="tasks-card">

        <h2>All Tasks ({tasks.length})</h2>

        <div className="task-list">

          {tasks.map((task) => (

            <TodoItem
              key={task.id}
              id={task.id}
              text={task.text}
              completed={task.completed}
              onToggle={toggleTask}
              onDelete={deleteTask}
            />

          ))}

        </div>

      </div>

    </div>
  );
}

export default MyTasks;