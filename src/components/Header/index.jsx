import "./styles.css";

const Header = () => {
    return (
        <header className="header">
            <div className="logo_wrapper">
                <h1 className="logo">TCO</h1>
            </div>
            <div className="nav">
                <ul className="nav_list">
                    <li className="nav_item">Home</li>
                    <li className="nav_item">About</li>
                    <li className="nav_item">Contact</li>
                </ul>
            </div>
        </header>
    );
}

export default Header;