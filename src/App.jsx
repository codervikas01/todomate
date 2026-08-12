import { useState } from "react";

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import Layout from "./components/Layout";

import Dashboard from "./pages/Dashboard";
import MyTasks from "./pages/MyTasks";
import Categories from "./pages/Categories";
import Completed from "./pages/Completed";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";

function App() {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Learn React",
      completed: false
    },
    {
      id: 2,
      text: "Learn JSX",
      completed: true
    },
    {
      id: 3,
      text: "Build TodoMate",
      completed: false
    }
  ]);

  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Layout />}
        >

          <Route
            index
            element={
              <Navigate to="/dashboard" replace />
            }
          />

          <Route
            path="dashboard"
            element={
              <Dashboard
                tasks={tasks}
              />
            }
          />

          <Route
            path="tasks"
            element={
              <MyTasks
                tasks={tasks}
                setTasks={setTasks}
              />
            }
          />

          <Route
            path="categories"
            element={<Categories />}
          />

          <Route
            path="completed"
            element={<Completed />}
          />

          <Route
            path="reports"
            element={<Reports />}
          />

          <Route
            path="settings"
            element={<Settings />}
          />

        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;