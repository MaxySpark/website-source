import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = props => (
  <div className="container">
  <nav className="navbar">
    <div className="navbar-menu">
       <div className="navbar-brand">
          <Link to="/" className="navbar-item">Home</Link>
       </div>
       <div className="navbar-end">
          <Link to="/activities" className="navbar-item">Activities</Link>
          <Link to="/members" className="navbar-item">Members</Link>
          <Link to="/projects" className="navbar-item">Projects</Link>
          <Link to="/faq" className="navbar-item">FAQ</Link>
          <Link to="/contact" className="navbar-item">Contact</Link>
       </div>
    </div>
  </nav>
  </div>
)

export default Navbar;
