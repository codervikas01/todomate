import { NavLink } from "react-router-dom";

function Sidebar() {

  const getNavClass = ({ isActive }) => {
    return isActive ? "active" : "";
  };

  return (
    <aside className="sidebar">

      <div className="sidebar-title">
        <h3>Menu</h3>
      </div>

      <nav>

        <ul className="nav-list">

          <li>
            <NavLink
              to="/dashboard"
              className={getNavClass}
            >
              <span>📊</span>
              Dashboard
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/tasks"
              className={getNavClass}
            >
              <span>📝</span>
              My Tasks
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/categories"
              className={getNavClass}
            >
              <span>📁</span>
              Categories
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/completed"
              className={getNavClass}
            >
              <span>✅</span>
              Completed
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/reports"
              className={getNavClass}
            >
              <span>📈</span>
              Reports
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/settings"
              className={getNavClass}
            >
              <span>⚙️</span>
              Settings
            </NavLink>
          </li>

        </ul>

      </nav>

    </aside>
  );
}

export default Sidebar;