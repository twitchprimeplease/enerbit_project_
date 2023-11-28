import React from 'react'
import {Table, Form, Button, Container, Row, Col,} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MonthsDropdown from '../components/MonthsDropdown/MonthsDropdown'
import YearsDropdown from '../components/YearDropdown/YearDropdown'

function PayMethod() {
  return (
    <>
            <div className='selection-pay-method-container'>
                    <div className='pay-method'>
                      <div className='pay-method-title'>
                        <h2>Seleccionar métodos de pago</h2>
                        <p>Su información de pago está segura y no se comparte con terceros.</p>
                      </div>
                      <Container>
                        <Form>
                          <Form.Group as={Row} controlId="numeroTarjeta">
                            <Form.Label column>
                              Número de Tarjeta:
                            </Form.Label>
                            <Col>
                              <Form.Control type="text" placeholder="Ingrese el número de tarjeta" />
                            </Col>
                            <Form.Label column>
                              Nombre y Apellido:
                            </Form.Label>
                            <Col>
                              <Form.Control type="text" placeholder="Nombre" />
                            </Col>
                          </Form.Group>

                          <Form.Group as={Row} controlId="fechaCaducidad">
                            <Form.Label column>
                              Fecha de Caducidad:
                            </Form.Label>
                            <Col>
                              <MonthsDropdown></MonthsDropdown>
                              <YearsDropdown></YearsDropdown>
                            </Col>
                            <Form.Label column>
                              CVV:
                            </Form.Label>
                            <Col>
                              <Form.Control type="text" placeholder="Ingrese el CVV" />
                            </Col>
                          </Form.Group>
                          <Form.Group controlId="terminosCondiciones" className="mb-3">
                            <Form.Check type="checkbox" label="Acepto los términos y condiciones" />
                          </Form.Group>
                        </Form>
                      </Container>
                    </div>
                    <div className='table-resumen'>
                        <h4>Resumen de pago</h4>
                        <Table striped bordered hover>
                        <tbody>
                            {tablefacturasinfo.map((item) => (
                            <tr key={item.sede}>
                                <td>{item.sede}</td>
                                <td>{item.totalContent}</td>
                            </tr>
                            ))}
                            <tr>
                                <td>Pago Total</td>
                                <td>{formattedTotal}</td>
                            </tr>
                        </tbody>
                        </Table>
                        <Link to='/Pagar/Confirmation'>
                        <Button variant='primary'>Seleccionar método de Pago</Button>
                        </Link>
                    </div>
                </div>
            
        </>
  )
}

export default PayMethod

const tablefacturasinfo = [
  { estado: 'sin-pagar', sede: 'Granada', fechaContent: 'Sep, 28, 2023', totalContent: '$160,126.00'},
  { estado: 'sin-pagar', sede: 'Cristobal Colón', fechaContent: 'Sep, 28, 2023', totalContent: '$190,346.00'},
  { estado: 'pendiente', sede: 'Ciudad Jardín', fechaContent: 'Sep, 28, 2023', totalContent: '$127,762.00'},
  { estado: 'pagado', sede: 'Valle del Lili', fechaContent: 'Sep, 28, 2023', totalContent: '$128,081.00'},
  { estado: 'sin-pagar', sede: 'El Prado', fechaContent: 'Sep, 28, 2023', totalContent: '$116,081.00'},

  
];

const parseCurrencyStringToNumber = (currencyString) => {
  const cleanedString = currencyString.replace(/[^0-9.-]+/g, '');
  return parseFloat(cleanedString);
  };
  
  const totalSum = tablefacturasinfo.reduce((acc, factura) => {
      const totalNumber = parseCurrencyStringToNumber(factura.totalContent);
      return acc + totalNumber;
  }, 0);

  const formattedTotal = totalSum.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });