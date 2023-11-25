import React from 'react'
import '../../App.css'
import './sidebarStyles.css';
import { NavLink } from 'react-router-dom';

let SidebarData = [
    {title: "Centro de Ayuda", 
    icon:<i className='bi bi-question-circle'></i>, 
    link:"/centrodeayuda"},
    
    {title: "Cerrar Sesión", 
    icon:<i className='bi bi-box-arrow-right'></i>, 
    link:"/cerrarsesion"},
]


function Sidebatbottom() {
  return (
    <div>
        <ul className='SidebarList'>
        {SidebarData.map((val, key)=>{
        return(
          <li key={key} 
          className={`SidebarRow bottom`}
          >
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



export default Sidebatbottom

