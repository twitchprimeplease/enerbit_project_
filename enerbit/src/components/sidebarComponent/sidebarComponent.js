import React from 'react'
import SideBar from './sidebar.js';
import Sidebatbottom from './sidebatbottom.js';
import './sidebarStyles.css';


function SidebarComponent() {
  return (
    <div className='sidebarComponent'>
        <SideBar className="Sidebar"/>
        <Sidebatbottom id='buttom'/>
    </div>
  )
}

export default SidebarComponent