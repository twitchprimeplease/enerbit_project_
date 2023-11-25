import React from 'react'
import Container from 'react-bootstrap/Container';
import './PaneldeControl.css';

function Paneldecontrol() {
  return (
    <>
    <div id='panel-de-control'>
        <h1>Panel de Control</h1>
        <Container id='panel-grid'>
            <div className="div1 panel-slot"> </div>
            <div className="div2 panel-slot"> </div>
            <div className="div3 panel-slot"> </div>
            <div className="div4 panel-slot"> </div>
            <div className="div5 panel-slot"> </div>
        </Container>
    </div>
    </>
  )
}

export default Paneldecontrol

