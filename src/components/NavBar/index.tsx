import { NavLink } from 'react-router-dom';
import './NavBar.css';

export function NavBar() {
  const isAuthenticated = false; // Replace with real auth logic

  return (
    <nav className="navbar">
      <NavLink
        to="/"
        style={({ isActive }) => ({
          fontWeight: isActive ? 'bold' : 'normal',
          color: isActive ? 'var(--primary-color)' : 'var(--accent-color)',
        })}
      >
        Home
      </NavLink>
      {isAuthenticated ? (
        <NavLink
          to="/dashboard"
          style={({ isActive }) => ({
            fontWeight: isActive ? 'bold' : 'normal',
            color: isActive ? 'var(--primary-color)' : 'var(--accent-color)',
          })}
        >
          Dashboard
        </NavLink>
      ) : (
        <NavLink
          to="/login"
          style={({ isActive }) => ({
            fontWeight: isActive ? 'bold' : 'normal',
            color: isActive ? 'var(--primary-color)' : 'var(--accent-color)',
          })}
        >
          Login
        </NavLink>
      )}
    </nav>
  );
}