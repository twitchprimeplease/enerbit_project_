import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Image from 'react-bootstrap/Image';
import ProfilePhoto from '../../images/unsplash_WMD64tMfc4k.png'
import '../../styles.css'
import './navBarComponent.css'

function NavBarComponent() {
  return (
    <><Navbar id='navbar-top' >
        <Form id="search-top-bar">
            <InputGroup>
                <InputGroup.Text>
                <i class="bi bi-search"></i>
                </InputGroup.Text>
                <Form.Control
                    placeholder="Buscar"
                    aria-label="Seach-input"
                    aria-describedby="searchbar" />
            </InputGroup>
        </Form>
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