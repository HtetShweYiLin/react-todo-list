import { NavLink } from "react-router-dom";
import './navBar.css';

export function NavBar() {
  return (
    <nav className="navbar-container">
        <NavLink className="navItem" to="/">Todo</NavLink>
        <NavLink className="navItem" to="/counter">Counter</NavLink>
        <NavLink className="navItem" to="/quote">Quote</NavLink>
    </nav>
  );
}