import React from 'react'
import { Link } from 'react-router-dom'
import { lifecycle, compose } from 'recompose'


const Navbar = props => (
  <div className="container">
  <nav className="navbar">
    <div className="navbar-brand">
       <Link to="/" className="navbar-item">Home</Link>
       <div className="navbar-burger burger">
	     <span></span>
	     <span></span>
	     <span></span>
	   </div>
    </div>
    <div className="navbar-menu">
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


const NavbarWithLife = compose(
  lifecycle({
    componentDidMount(){
      const toggleButton = document.querySelector('.burger');
      const menu = document.querySelector('.navbar-menu');
      toggleButton.addEventListener('click',()=>{
        menu.classList.toggle('is-active');
        toggleButton.classList.toggle('is-active');
      })
    }
  })
)(Navbar);

export default NavbarWithLife;
