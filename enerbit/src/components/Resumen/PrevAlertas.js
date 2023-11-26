import React from 'react';
import PropTypes from 'prop-types';
import './PrevAlertas.css'

function PrevAlertas({ estadoAlertaClass, alertaText }) {
    let refIcono = '';
    switch (estadoAlertaClass) {
        case 'error' || 'warning':
        refIcono = 'exclamation-triangle';
        break;
        case 'cautions':
        refIcono = 'exclamation-circle';
        break;
        default:
        refIcono = 'exclamation-triangle';
    }

    return (
        <div className={`estado-alerta ${estadoAlertaClass}`}>
            <div className="solo-un-color"></div>
            <div id="prev-alerta-content">
                <div className="head-alerta">
                    <div className="icono-alerta">
                            <i className={`bi bi-${refIcono}`}></i>
                        </div>
                    <div className="alerta-texto">{alertaText}</div>
                </div>
                <i className="follow-arrow bi bi-arrow-right-circle"></i>
            </div>
            
        </div>
    );
    }

PrevAlertas.propTypes = {
  estadoAlertaClass: PropTypes.string.isRequired,
  alertaText: PropTypes.string.isRequired,
};

export default PrevAlertas;
