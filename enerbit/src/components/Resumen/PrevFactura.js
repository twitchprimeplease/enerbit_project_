import React from 'react';
import './PrevFactura.css'

function PrevFactura({ estadoFacturaClass, sedeContent, fechaContent, totalContent }) {
  let estadoFacturaText = '';
  switch (estadoFacturaClass) {
    case 'sin-pagar':
        estadoFacturaText = 'Sin pagar';
        break;
    case 'pendiente':
        estadoFacturaText = 'Pendiente'; 
        break;
    case 'pagado':
        estadoFacturaText = 'Pagado';
        break;
    default:
        estadoFacturaText= 'Pendiente';
  }

  return (
    <> <div id='preview-factura-estado'>
        <div className={`estado-factura ${estadoFacturaClass}`}>{estadoFacturaText}</div>
        <div className="sede negrilla">{sedeContent}</div>
        <div className="energia">Energía convencional</div>
        <div className="fecha">{fechaContent}</div>
        <div className="total negrilla">{totalContent}</div>
        </div></>
  );
}

export default PrevFactura;