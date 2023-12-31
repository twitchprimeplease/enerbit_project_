import React from 'react'
import '../../App.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { SidebarData } from './sidebarData.js'
import logoEnerbit from '../../images/Logo-enerBit 2.svg'
import { Nav, Image} from 'react-bootstrap'
import { NavLink } from 'react-router-dom';

function Sidebar() {
  return (
    <div className='Sidebar'>
      <Image src={logoEnerbit} alt='Logo Enerbit' />
      <ul className='SidebarList'>
        {SidebarData.map((val, key)=>{
        return(
          <li key={key} 
          className={`SidebarRow`}>
          <NavLink to={val.link} className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                    }>
              <div id='sidebar-icon'>{val.icon}</div>{" "}
              <div id='sidebar-title'>{val.title}</div>
              </NavLink>
          </li>
        )
      })}
    </ul>
    </div>
  )
  
}

export default Sidebar