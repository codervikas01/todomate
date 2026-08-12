function Header() {
    return (
        <header className="header">

            <div className="header-left">
                <h2>TodoMate</h2>
            </div>

            <div className="header-right">
                <button className="notification-btn">
                    🔔
                </button>

                <div className="user-profile">
                    <div className="user-avatar">
                        V
                    </div>

                    <span>Vikas</span>
                </div>
            </div>

        </header>
    );
}

export default Header;