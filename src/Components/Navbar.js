import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'


const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-logo">
        <p>RJ</p>
      </div>
      <div>
        <ul className="list-itemm">
          <li><Link className="link" to="/main">Home</Link></li>
          <li><Link className="link" to="/main1">Projects</Link></li>
          <li><Link className="link" to="/main2">Work</Link></li>
          <li><Link className="link" to="/main3">Contact</Link></li>
          <li><Link className="link" to="/main4">About</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar