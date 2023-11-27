import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logoEnerbit from '../../images/Logo-enerBit 2.svg'
import Image from 'react-bootstrap/Image';
import ProfilePhoto from '../../images/unsplash_WMD64tMfc4k.png'
import '../../styles.css'
import '../navbar/navBarComponent.css'

function NavBarComponent() {
  return (
    <><Navbar id='navbar-top' >

        <Nav.Link className='ener-pay-logo' href="/"><Image src={logoEnerbit} alt='Logo Enerbit' /></Nav.Link> 
        <div id="noti-perfil">
        <div class="icono-container">
            <div class="icono">
            <i class="bi bi-bell"></i>
            <div class="notificacion">4</div>
                </div>
            </div>
            <Nav.Link href="/perfil"><Image src={ProfilePhoto} roundedCircle /></Nav.Link> 
        
        </div>
    </Navbar>
    </>);
  
}

export default NavBarComponent