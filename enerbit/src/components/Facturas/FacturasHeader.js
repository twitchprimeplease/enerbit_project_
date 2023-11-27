import React from 'react'
import { Button  } from 'react-bootstrap';
import FacDropDown from './FactDropDown';
import 'bootstrap/dist/css/bootstrap.min.css';


function FacturasHeader(enable) {
  return (
    <div className='facturas-header'>
        <div className='facturas-header-right'>
            <h1>Facturas</h1>
            <FacDropDown />

        </div>
        <div className="mb-2" id='facturas-header-buttons'>
            <Button variant="success" size="lg" >
                <i className='bi bi-credit-card-2-back'></i> Pagar facturas
            </Button>{' '}
            <Button variant="success" size="lg">
                <i class="bi bi-arrow-down"></i>  Descargar facturas
            </Button>
        </div>
      </div>
  )
}

export default FacturasHeader