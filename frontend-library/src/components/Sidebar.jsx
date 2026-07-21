function Sidebar() {
    return (
        <aside>
            <img src="" alt="Logo" />
            <nav>
                <ul>
                    <li><a href="/books">Books</a></li>
                    <li><a href="/authors">Authors</a></li>
                    <li><a href="/news">News</a></li>
                </ul>

                <hr />
                <ul>
                    <li><a href="/settings">Settings</a></li>
                    <li><a href="/support">Support</a></li>
                    <li><a href="/logout">Logout</a></li>
                </ul>
                <hr />
            </nav>

        </aside>
    );
}    

export default Sidebar;