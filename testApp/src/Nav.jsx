import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faGlobe, faCog } from "@fortawesome/free-solid-svg-icons";
import "./Nav.css"
function Nav() {
  return (
    <div>
       <nav className="navbar">
        <div className="navbar-brand">ADMIN</div>
        <div className="navbar-icons">
          <FontAwesomeIcon icon={faBell} className="icon" />
          <FontAwesomeIcon icon={faGlobe} className="icon" />
          <FontAwesomeIcon icon={faCog} className="icon" />
        </div>
      </nav>
    </div>
  )
}

export default Nav
