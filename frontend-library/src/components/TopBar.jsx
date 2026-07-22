function TopBar() {
    return (
        <header>
            <form action="">
                <input type="text" placeholder="Search..." />
            </form>
            <button type="button"> + Add a Book</button>
            <div className="user-profile">
                <img src="" alt="User Profile Image" />
                <span>John Doe</span>
            </div>
            <img src="" alt="Notification Bell" />
        </header>
    );
}

export default TopBar;