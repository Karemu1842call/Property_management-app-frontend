import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../../images/Homely.png'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='sideBar container mt-5'>
      <div className="row">
        <img style={{maxWidth :"70%"}}src={Logo}className="p-2" alt="Hao logo"/>
      </div>
      <div className="navbar_elements row mt-3 px-3 ">
        <NavLink activeClassName="active" to='/dashboard'>
          <div className="menu-cols">
            <p>Dashboard</p>
          </div>
        </NavLink>
      </div>

      <div className="navbar_elements row mt-3 px-3 ">
      <NavLink activeClassName="active" to='/properties'>
          <div className="menu-cols">
            <p>Properties</p>
          </div>
        </NavLink>
      </div>

      <div className="navbar_elements row mt-3 px-3 ">
      <NavLink activeClassName="active" to='/tenants'>
          <div className="menu-cols">
            <p>Tenants</p>
          </div>
        </NavLink>
      </div>

      <div className="navbar_elements row mt-3 px-3 ">
      <NavLink activeClassName="active" to='/about_us'>
          <div className="menu-cols">
            <p>About Us</p>
          </div>
        </NavLink>
      </div>

      <div className="navbar_elements row mt-3 mb-3 px-3 ">
      <NavLink activeClassName="active" to='/contact_us'>
          <div className="menu-cols">
            <p>Contact Us</p>
          </div>
        </NavLink>
      </div>
    </div>
  )
}

export default Navbar