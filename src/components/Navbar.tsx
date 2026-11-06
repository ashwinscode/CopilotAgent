import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar" aria-label="Main navigation">
      <NavLink className="brand" to="/" end>
        CopilotAgent
      </NavLink>
      <div className="nav-links">
        <NavLink className="nav-link" to="/" end>
          Home
        </NavLink>
        <NavLink className="nav-link" to="/about">
          About
        </NavLink>
        <NavLink className="nav-link" to="/contact">
          Contact
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar
