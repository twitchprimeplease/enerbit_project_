import React from 'react'
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './sedestables.css';

function SedesTable() {
    return (
    <><Table hover>
            <thead>
                <tr>
                    <th className='table-title'>Barrio</th>
                    <th>
                    <DropdownButton id="dropdown-basic-button" title='Valle del Cauca'>
                    <Dropdown.Item>Valle del Cauca</Dropdown.Item>
                    <Dropdown.Item>Antioquia</Dropdown.Item>
                    <Dropdown.Item>Bogotá</Dropdown.Item>
                </DropdownButton>
                    </th>
                    <th className='table-title'>Gasto por mes</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Granada</td>
                    <td>Cali</td>
                    <td>50kWh</td>
                </tr>
                <tr>

                    <td>Cristóbal Colón</td>
                    <td>Cali</td>
                    <td>80kWh</td>
                </tr>
                <tr>
                    <td>Valle del Lili</td>
                    <td>Cali</td>
                    <td>240kWh</td>
                </tr>
                <tr>
                    <td>Ciudad Jardín</td>
                    <td>Cali</td>
                    <td>150kWh</td>
                </tr>
            </tbody>
        </Table></>
  )
}

export default SedesTable