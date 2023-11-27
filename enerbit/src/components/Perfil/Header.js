import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import ProfilePhoto from '../../images/unsplash_WMD64tMfc4k.png'
import '../../styles.css'
import './Header.css'

function Header() {
    return (
    <><Navbar id='navbar-top' >
        <div className='header-title'>Perfil</div>
        <div id="noti-perfil">
        <div class="icono-container">
            <div class="icono">
            <i class="bi bi-bell"></i>
            <div class="notificacion">4</div>
                </div>
            </div> 
        <Image src={ProfilePhoto} roundedCircle />
        </div>
    </Navbar>
    </>);

}

export default Header