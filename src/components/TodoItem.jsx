function TodoItem({
    id,
    text,
    completed,
    onToggle,
    onDelete
}) {

    return (
        <div className="todo-item">

            <div className="todo-left">

                <input
                    type="checkbox"
                    checked={completed}
                    onChange={() => onToggle(id)}
                />

                <span className={completed ? "completed-task" : ""}>
                    {text}
                </span>

            </div>

            <button
                className="delete-btn"
                onClick={() => onDelete(id)}
            >
                Delete
            </button>

        </div>
    );
}

export default TodoItem;