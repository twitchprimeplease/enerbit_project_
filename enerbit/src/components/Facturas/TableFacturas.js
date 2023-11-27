import React from 'react'
import PrevFactura from '../Resumen/PrevFactura';

import { Button,Form, Table } from 'react-bootstrap';

function TableFacturas() {
    return (

        <Table  hover>
        <thead >
            <tr>
            <th className='facturas-table-header'>Factura</th>
            <th className='facturas-table-header'>Detalles</th>
            </tr>
        </thead>
        <tbody>
            <h5 className='table-section-heading'>Cali</h5>
        {(() => {

            const filas = [];
            for (let i = 0; i < 4; i++) {
                const item = tablefacturasinfo[i];
                filas.push(
                    <tr>
                    <td className='check-factura'>
                    <Form.Check className='check-factura-checkbox'aria-label="" />
                    <PrevFactura
                            estadoFacturaClass={item.estado} 
                            sedeContent={item.sede}
                            fechaContent={item.fechaContent}
                            totalContent={item.totalContent}
                        ></PrevFactura></td>
                    <td className='check-factura-buttons'>
                        <div className='check-factura-buttons-container'>
                        <Button className='primary-button-factura' variant="primary">Compartir</Button>{' '}
                        <Button className='outline-primary-button-factura' variant="outline-primary">Ver detalles</Button>{' '}
                        </div>
                    
                    </td>
                    </tr>
                );
            }
            return filas;
            })()}
            <h5 className='table-section-heading'>Palmira</h5>
            {(() => {
            const filas = [];
            for (let i = 4; i < 5; i++) {
                const item = tablefacturasinfo[i];
                filas.push(
                    <tr>
                    <td className='check-factura'>
                    <Form.Check className='check-factura-checkbox' aria-label="" />
                    <PrevFactura className='facturas-pantalla' estadoFacturaClass={item.estado} 
                            sedeContent={item.sede}
                            fechaContent={item.fechaContent}
                            totalContent={item.totalContent}
                        ></PrevFactura></td>
                    <td className='check-factura-buttons'>
                    <Button className='primary-button-factura' variant="primary">Compartir</Button>{' '}
                        <Button className='outline-primary-button-factura' variant="outline-primary">Ver detalles</Button>{' '}
                    </td>
                    </tr>
                );
            }
            return filas;
            })()}
        </tbody>
        </Table>

    )
}

export default TableFacturas

const tablefacturasinfo = [
    { estado: 'sin-pagar', sede: 'Granada', fechaContent: 'Sep, 28, 2023', totalContent: '$160,126.00'},
    { estado: 'sin-pagar', sede: 'Cristobal Colón', fechaContent: 'Sep, 28, 2023', totalContent: '$190,346.00'},
    { estado: 'pendiente', sede: 'Ciudad Jardín', fechaContent: 'Sep, 28, 2023', totalContent: '$127,762.00'},
    { estado: 'pagado', sede: 'Valle del Lili', fechaContent: 'Sep, 28, 2023', totalContent: '$128,081.00'},
    { estado: 'sin-pagar', sede: 'El Prado', fechaContent: 'Sep, 28, 2023', totalContent: '$116,081.00'},

    
];
