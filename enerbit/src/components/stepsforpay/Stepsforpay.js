import React from 'react'
import { Pagination } from 'react-bootstrap'
import { useLocation } from 'react-router-dom';

function Stepsforpay() {
    const location = useLocation();
    const pathname = location.pathname;

        let activeStep = 1;
    if (pathname.includes('/PayMethod')) {
        activeStep = 2;
    } else if (pathname.includes('/Confirmation')) {
        activeStep = 3;
    }
    
    return (
    <>
        <div>Stepsforpay</div>
        <Pagination className='pagination-container' size="lg">
            <div className='pagination-layout'>
                <Pagination.Item active={activeStep  === 1}>1</Pagination.Item>
                <h6 className='pagination-title'>Confirmar Facturas</h6>
            </div>
            <div className='pagination-layout'>
                <Pagination.Item active={activeStep  === 2}>2</Pagination.Item>
                <h6 className='pagination-title'>Método de pago</h6>
            </div>
            <div className='pagination-layout'>
                <Pagination.Item active={activeStep  === 3}>3</Pagination.Item>
                <h6 className='pagination-title'>Confirmación</h6>
            </div>
        </Pagination>
    </>
  )
}

export default Stepsforpay