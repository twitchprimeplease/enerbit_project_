import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import { StackHorizontalbars } from '../graphs/stackHorizontalBars';
import SedesTable from '../sedestable/sedestable.js';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import LinesChart from '../graphs/linesCharts.js';
import Barchart from '../graphs/BarChart.js';
import BarChart2 from '../graphs/BarChart2.js';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import './PaneldeControl.css';

function Paneldecontrol() {
    const [selectedSede, setSelectedSede] = useState('Cali');

    const handleSedeSelect = (sede) => {
        setSelectedSede(sede);
    };

    return (
        <>
        <div id='panel-de-control'>
            <h1>Panel de Control</h1>

            <Container id='panel-grid'>
            <div className="div1 panel-slot">
                <StackHorizontalbars />
            </div>
            <div className="div2 panel-slot">
                <Tabs
                defaultActiveKey="profile"
                id="fill-tab-example"
                className="mb-3"
                fill
                >
                <Tab eventKey="colombia" title="Colombia" disabled>

                </Tab>
                <Tab eventKey="home" title="Home">
                    <LinesChart />
                </Tab>
                <Tab eventKey="profile" title="Profile">
                    <LinesChart />
                </Tab>
                <Tab eventKey="longer-tab" title="Loooonger Tab">
                    <LinesChart />
                </Tab>
                <Tab eventKey="time" title="1:33 p.m" disabled>

                </Tab>
            </Tabs>

            </div>
            <div className="div3 panel-slot">
            <div id='top-stats'>
                <div className="top-stats-group">
                    <h2 className='top-stats-number'>20</h2>
                    <p className='top-stats-text'>Sedes con energía</p>
                </div>
                <div className="top-stats-group">
                    <h2 className='top-stats-number'>2</h2>
                    <p className='top-stats-text'>Sedes sin energía</p>
                </div>
            </div>
            <Form id="search-sedes">
                <InputGroup>
                <InputGroup.Text>
                    <i className="bi bi-search"></i>
                </InputGroup.Text>
                <Form.Control
                    placeholder="Escoger Sedes"
                    aria-label="Seach-input"
                    aria-describedby="searchbar" />
                </InputGroup>
                <DropdownButton id="dropdown-basic-button" title={selectedSede}>
                    <Dropdown.Item onClick={() => handleSedeSelect('Cali')}>Cali</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleSedeSelect('Medellin')}>Medellin</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleSedeSelect('Bogotá')}>Bogotá</Dropdown.Item>
                </DropdownButton>
            </Form>
            <Barchart />
            </div>
            <div className="div4 panel-slot">
                <div className='slot-title'>
                    <h2>Gastos Generales</h2>
                    <p>Últimos meses</p>
                </div>
                <BarChart2 />    
            </div>
            
            <div className="div5 panel-slot">
                <div className='sedes-title'>
                    <h2>Sedes</h2>
                    <p>Ver detalles <i className='bi bi-arrow-right'></i></p>
                </div>
                <SedesTable />
            </div>
        </Container>
        </div>
    </>
  )
}

export default Paneldecontrol;
