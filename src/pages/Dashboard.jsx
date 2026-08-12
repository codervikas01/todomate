import StatCard from "../components/StatCard";
import RecentTasks from "../components/RecentTasks";

function Dashboard({ tasks }) {

    const totalTasks = tasks.length;

    const completedTasks = tasks.filter((task) => task.completed).length;

    const pendingTasks = tasks.filter((task) => !task.completed).length;

    return (
        <div className="dashboard">

            <div className="dashboard-header">

                <h1>Dashboard</h1>

                <p>
                    Welcome back! Here's what's happening with your tasks.
                </p>

            </div>

            <div className="stats-container">

                <StatCard
                    title="Total Tasks"
                     value={totalTasks}
                />

                <StatCard
                    title="Completed"
                    value={completedTasks}
                />

                <StatCard
                    title="Pending"
                    value={pendingTasks}
                />

                <StatCard
                    title="Overdue"
                    value="2"
                />

            </div>

            <div className="dashboard-grid">

                <RecentTasks />

            </div>

        </div>
    );
}

export default Dashboard;