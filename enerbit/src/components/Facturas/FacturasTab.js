import React from 'react'
import FacturasHeader from './FacturasHeader'
import Filtros from './Filtros';
import './FacturasStyle.css'
import TableFacturas from './TableFacturas'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';


function FacturasTab() {
    return (
        <div className='Facturas-container'>
            <FacturasHeader />
            <div className='facturas-search'>
                <Filtros />
                <TableFacturas />
            </div>
            <ButtonToolbar className='youre-a-bunch-of-buttons' aria-label="Toolbar with button groups">
            <ButtonGroup className="me-2" aria-label="First group">
                <Button>1</Button> <Button>2</Button> <Button>3</Button><Button>4</Button>
                <Button>5</Button>
            </ButtonGroup>
            </ButtonToolbar>
        </div>
        
    )
}

export default FacturasTab