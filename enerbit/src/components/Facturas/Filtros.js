import React from 'react';
import { Container, Row, Col, Dropdown } from 'react-bootstrap';

    const Filtros = () => {
    return (
        <Container>
        <h6>Filtros</h6>

        <Row>
            <Col>
            <Dropdown>
                <Dropdown.Toggle variant="outline-primary filtros-dropdow" id="dropdown-estado">
                Estado
                </Dropdown.Toggle>
                <Dropdown.Menu>
                <Dropdown.Item>Pagado</Dropdown.Item>
                <Dropdown.Item>Pendiente</Dropdown.Item>
                <Dropdown.Item>Sin pagar</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            </Col>

            <Col>
            <Dropdown>
                <Dropdown.Toggle variant="outline-primary filtros-dropdow" id="dropdown-ciudad">
                Ciudad
                </Dropdown.Toggle>
                <Dropdown.Menu>
                <Dropdown.Item>Action</Dropdown.Item>
                <Dropdown.Item>Another action</Dropdown.Item>
                <Dropdown.Item>Something else</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            </Col>

            <Col>
            <Dropdown>
                <Dropdown.Toggle variant="outline-primary filtros-dropdow" id="dropdown-sede">
                Sede
                </Dropdown.Toggle>
                <Dropdown.Menu>
                <Dropdown.Item>Action</Dropdown.Item>
                <Dropdown.Item>Another action</Dropdown.Item>
                <Dropdown.Item>Something else</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            </Col>

            <Col>
            <Dropdown>
                <Dropdown.Toggle variant="outline-primary filtros-dropdow" id="dropdown-fecha">
                Fecha
                </Dropdown.Toggle>
                <Dropdown.Menu>
                <Dropdown.Item>Action</Dropdown.Item>
                <Dropdown.Item>Another action</Dropdown.Item>
                <Dropdown.Item>Something else</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            </Col>

            <Col>
            <Dropdown>
                <Dropdown.Toggle variant="outline-primary filtros-dropdow" id="dropdown-fecha">
                Fecha
                </Dropdown.Toggle>
                <Dropdown.Menu>
                <Dropdown.Item>Action</Dropdown.Item>
                <Dropdown.Item>Another action</Dropdown.Item>
                <Dropdown.Item>Something else</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            </Col>
        </Row>
        </Container>
    );
    };

export default Filtros;
