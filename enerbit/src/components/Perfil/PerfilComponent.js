import React from 'react'
import './PerfilComponent.css'
import profileImg from '../../images/profile.jpg'
import profileImg2 from '../../images/profile2.jpg'
import profileImg3 from '../../images/profile3.jpg'
import profileImg4 from '../../images/profile4.jpg'
import profileImg5 from '../../images/profile5.jpg'
import ComunityProfile from './ComunityProfile.js'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Image from 'react-bootstrap/Image';





function PerfilComponent() {
  return (
    <>
        <div className='all-profile'>
            <div className='profile-content'>
            <div className='profile-display'>
                <div className='profile-img'>
                    <Image src={profileImg} alt='' fluid/>
                </div>
                <div className='profile-display-text'>
                    <h5 className='profile-display-name'>Luis Ordoñez</h5>
                    <h6 className='profile-display-bank'>Bancolombia</h6>
                </div>

            </div>
            <div className='profile-options'>
                <Tabs
                    defaultActiveKey="config-profile"
                    id="fill-tab-example"
                    className="mb-3"
                    fill
                    >
                        <Tab eventKey="config-profile" title="Configuración Perfil">
                        <div class="config-profile-content">
                            <div class="config-slot config-profile-slot1"> 
                                <h5 className='config-profile-title'>Nombre</h5>
                                <h6 className='config-profile-para'>Luis</h6>
                            </div>
                            <div class="config-slot config-profile-slot2"> 
                                <h5 className='config-profile-title'>Apellido</h5>
                                <h6 className='config-profile-para'>Ordoñez</h6>
                            </div>
                            <div class="config-slot config-profile-slot3"> 
                                <h5 className='config-profile-title'>Numero celular</h5>
                                <h6 className='config-profile-para'>+57 318 3871565</h6>
                            </div>
                            <div class="config-slot config-profile-slot4"> 
                                <h5 className='config-profile-title'>Correo</h5>
                                <h6 className='config-profile-para'>luisordoñez@bancolombia.com</h6>
                            </div>
                            <div class="config-slot config-profile-slot5"> 
                                <h5 className='config-profile-title'>Ciudad</h5>
                                <h6 className='config-profile-para'>Cali</h6>
                            </div>
                            <div class="config-slot config-profile-slot6"> 
                                <h5 className='config-profile-title'>Departamento</h5>
                                <h6 className='config-profile-para'>Valle del Cauca</h6>
                            </div>
                            <div class="config-slot config-profile-slot7">
                            <h5 className='config-profile-title'>Código postal</h5>
                                <h6 className='config-profile-para'>760031</h6> 
                                
                            </div>
                            <div class="config-slot config-profile-slot8"> 
                                <h5 className='config-profile-title'>País</h5>
                                <h6 className='config-profile-para'>Colombia</h6>
                            </div>
                        </div>
                        </Tab>
                        <Tab eventKey="comunidad" title="Comunidad">
                            <div className='perfiles'>
                                <div className='comunity-profiles'>
                                <ComunityProfile
                                    ComunityProfileImg={profileImg}
                                    ComunityCargo='Administrador General'
                                    ComunityName='Luis Ordoñez'
                                />
                                <ComunityProfile
                                    ComunityProfileImg={profileImg2}
                                    ComunityCargo='Product Manager'
                                    ComunityName='María Sanchez'
                                />
                                <ComunityProfile
                                    ComunityProfileImg={profileImg3}
                                    ComunityCargo='Gerente de estrategia'
                                    ComunityName='Andrés Martinez'
                                />
                                <ComunityProfile
                                    ComunityProfileImg={profileImg4}
                                    ComunityCargo='Andrés Martinez'
                                    ComunityName='José Hernandez'
                                />
                                <ComunityProfile
                                    ComunityProfileImg={profileImg5}
                                    ComunityCargo='Líder de contaduría'
                                    ComunityName='Luisa Torres'
                                />
                                </div>
                                <div className='new-preofile-form'>
                                <Container>
                                    <h5 className='new-preofile-title'>Crear nuevo perfil</h5>
                                    <Row>
                                        <Col>
                                        <Form.Group controlId="input1">
                                            <Form.Control type="text" placeholder="Cargo dentro de la empresa" Outline/>
                                        </Form.Group>
                                        </Col>
                                        <Col>
                                        <Form.Group controlId="input2">
                                            <Form.Control type="text" placeholder="Correo electrónico" />
                                        </Form.Group>
                                        </Col>
                                    </Row>
                                    <Button variant="primary" className="mt-3 new-profile-button">
                                        Enviar solicitud
                                    </Button>
                                </Container>
                                </div>
                            </div>
                            
                            
                        </Tab>
                        <Tab eventKey="form-profile" title="Formulario">
                        <Container>
                            
                            <Row>
                                <Col>
                                <Form.Group controlId="tipoPersona">
                                    <Form.Label>Tipo de Persona:</Form.Label>
                                    <Form.Control type="text" placeholder="Ingrese el tipo de persona" />
                                </Form.Group>
                                </Col>
                                <Col>
                                <Form.Group controlId="nit">
                                    <Form.Label>NIT:</Form.Label>
                                    <Form.Control type="text" placeholder="Ingrese el NIT" />
                                </Form.Group>
                                </Col>
                            </Row>

                        
                            <h2>Información de la Organización</h2>
                            <Row>
                                <Col>
                                <Form.Group controlId="tipoIndustria">
                                    <Form.Label>Tipo de Industria:</Form.Label>
                                    <Form.Control type="text" placeholder="Ingrese el tipo de industria" />
                                </Form.Group>
                                </Col>
                                <Col>
                                <Form.Group controlId="nombreOrganizacion">
                                    <Form.Label>Nombre de la Organización:</Form.Label>
                                    <Form.Control type="text" placeholder="Ingrese el nombre de la organización" />
                                </Form.Group>
                                </Col>
                                <Col>
                                <Form.Group controlId="razonSocial">
                                    <Form.Label>Razón Social:</Form.Label>
                                    <Form.Control type="text" placeholder="Ingrese la razón social" />
                                </Form.Group>
                                </Col>
                            </Row>

                            
                            <h2>Contacto</h2>
                            <Row>
                                <Col>
                                <Form.Group controlId="numeroCelular">
                                    <Form.Label>Número de Celular:</Form.Label>
                                    <Form.Control type="text" placeholder="Ingrese el número de celular" />
                                </Form.Group>
                                </Col>
                                <Col>
                                <Form.Group controlId="correoElectronico">
                                    <Form.Label>Correo Electrónico:</Form.Label>
                                    <Form.Control type="email" placeholder="Ingrese el correo electrónico" />
                                </Form.Group>
                                </Col>
                            </Row>
                        </Container>
                    </Tab>
                </Tabs>
            </div>

            </div>
        </div>
    
    </>
  )
}

export default PerfilComponent