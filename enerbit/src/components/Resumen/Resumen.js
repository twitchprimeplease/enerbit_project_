import React from 'react'
import PrevFactura from './PrevFactura'
import PrevAlertas from './PrevAlertas.js'


import './resumen.css'

function Resumen() {
  return (
    <> <div className="inicio-content">
    <div className='estado-alertas'>
        <div id='Estado-factuas'>
            <div className='título-sección'>
                <h4>Estado de Facturas</h4>
                <p>Ver todas <i className='bi bi-arrow-right-circle'></i></p>
            </div>
            <div id='estado-factuas-facturas'>
                <PrevFactura estadoFacturaClass='sin-pagar' 
                    sedeContent='Ciudad Jardín' 
                    fechaContent='Sep, 28, 2023' 
                    totalContent='$127,762.00'
                ></PrevFactura>
                <PrevFactura estadoFacturaClass='pendiente' 
                    sedeContent='Granada' 
                    fechaContent='Sep, 28, 2023' 
                    totalContent='$160,126.00'
                ></PrevFactura>
                <PrevFactura estadoFacturaClass='pagado' 
                    sedeContent='Pance' 
                    fechaContent='Sep, 28, 2023' 
                    totalContent='$190,346.00'
                ></PrevFactura>
            </div>
        </div>
        <div id='Alertas'>
            <div className='título-sección'>
                <h4>Alertas <i className="bi bi-nut-fill"></i></h4>
                <p>Ver todas <i className='bi bi-arrow-right-circle'></i></p>
            </div>
            <div id='alertas-stack'>
                <PrevAlertas estadoAlertaClass='error'
                    alertaText= 'Sobrepaso del límite de consumo'></PrevAlertas>
                    <PrevAlertas estadoAlertaClass='warning'
                    alertaText= 'Variaciones anómalas en el consumo'></PrevAlertas>
                    <PrevAlertas estadoAlertaClass='cautions'
                    alertaText= 'Cambio de tarifa'></PrevAlertas>
            </div>
            
        </div>
    </div>
    <div className='consumo-actividades'>
        <div id='consumo-container'>
            <h4 className='title-consumo-actividades'>Consumo</h4>
            <div class="consumo-dashboard">
                <div class="prom prom-mes"> 
                    <p className='promedio-para'>Promedio del mes</p>
                    <h3 className='prom-info'>
                        <i className='bi bi-lightning-charge-fill'></i> 100kWh</h3>
                </div>
                <div class="prom prom-al-mes">
                    <p className='promedio-para'>Promedio <b>consumo al mes</b></p>
                    <h3 className='prom-info'><i className='bi bi-lightning-charge-fill'></i> 160kWh</h3>
                </div>
                <div class="descubre"> </div>
            </div>
        </div>
        <div id='acticidad-container'>
            <h4 className='title-consumo-actividades'>Actividades</h4>
            <div>
               {/* <DoughnutChart /> */}
            </div>
        </div>
    </div>
    </div></>
  )
}

export default Resumen