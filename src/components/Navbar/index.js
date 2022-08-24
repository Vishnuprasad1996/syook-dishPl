import { Link } from "react-router-dom";

import "./index.css";

const Navbar = () => (
  <nav className="navbar">
    <Link className="nav-link" to="/home">
      <h1 className="nav-item">Home</h1>
    </Link>
    <div className="navbar-content">
      <Link className="nav-link" to="/poll">
        <h1 className="nav-item">Dish Poll</h1>
      </Link>
      <Link className="nav-link" to="/login">
        <h1 className="nav-item">Logout</h1>
      </Link>
    </div>
  </nav>
);

export default Navbar;
