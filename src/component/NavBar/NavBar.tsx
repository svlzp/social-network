import React from 'react';
import { NavLink } from 'react-router-dom';
import nav from './NavBar.module.css'

const NavBar =()=>{



    return(
        <nav className={nav.NavBar} >
       <div >
      <NavLink to='/profile' className = { navData => navData.isActive ? nav.active : nav.item }>Profile</NavLink>
      </div>
      <div >
      <NavLink to='/dialogs' className = { navData => navData.isActive ? nav.active : nav.item }>Message</NavLink>
      </div>
      <div >
      <NavLink to='/users' className = { navData => navData.isActive ? nav.active : nav.item }>User</NavLink>
      </div>
      <div >
      <NavLink to='/news' className = { navData => navData.isActive ? nav.active : nav.item }>News</NavLink>
      </div>
      <div >
      <NavLink to='/music' className = { navData => navData.isActive ? nav.active : nav.item }>Music</NavLink>
      </div>
      <div >
      <NavLink to='/settings' className = { navData => navData.isActive ? nav.active : nav.item }>Settings</NavLink>
      </div>
        </nav>
    )
}
export default NavBar;