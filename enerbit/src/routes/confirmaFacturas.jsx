import React from 'react';
import '../styles.css';
import {Table, Form, Button} from 'react-bootstrap';


const ConfirmationFactura = () => {
    return (
        <>
            <div className='confirmation-bills-container'>
                <h2>Confirmar facturas</h2>
                <div>
                    <div className='table-confirm'>
                    <Table hover>
                        <thead>
                            <tr>
                            <th></th>
                            <th>SEDE</th>
                            <th>TIPO DE SERVICIO</th>
                            <th>FECHA</th>
                            <th>VALOR</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tablefacturasinfo.map((item) => (
                            <tr key={item.sede}>
                                <Form.Check className='' aria-label="" />
                                <td>{item.sede}</td>
                                <td>Energía convencional</td>
                                <td>Sept, 28, 2023</td>
                                <td>{item.totalContent}</td>
                            </tr>
                            ))}
                        </tbody>
                        </Table>
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
                        <Button variant='primary'>Seleccionar método de Pago</Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ConfirmationFactura;


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