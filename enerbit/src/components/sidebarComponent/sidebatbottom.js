import React from 'react'
import '../../App.css'
import './sidebarStyles.css';

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
          className={`SidebarRow ${window.location.pathname === val.link ? 'active' : ''}`}
          onClick={() => {window.location.pathname = val.link}}
          >
            <div id='sidebar-icon'>{val.icon}</div>{" "}
            <div id='sidebar-title'>{val.title}</div>
          </li>
        )
      })}
    </ul>
    </div>
  )
}



export default Sidebatbottom

