import React from 'react'
import Logo from './images/logo.png'
import Search from './images/search.png'
import './Style.css'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
  <img src={Logo} alt="logo" width="200" height="54" id="logo"/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Service
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#"></a></li>
            <li><a className="dropdown-item" href="#">AZURE</a></li>
            <li><a className="dropdown-item" href="#">BOT</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Careers</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact   <img src={Search} alt="Bootstrap" width="20" height="20"/></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"><button type='button' id="talk">Lets's Talk</button></a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
  )
}

export default Navbar