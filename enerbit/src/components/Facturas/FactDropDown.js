import React, { useState, useEffect } from 'react';
import { Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

    const FacDropDown = () => {
    const [selectedOption, setSelectedOption] = useState('Valle del Cauca');

    const handleSelect = (eventKey) => {
        setSelectedOption(eventKey);
    };

    useEffect(() => {}, [selectedOption]);

    return (
        <Dropdown onSelect={handleSelect}>
        <Dropdown.Toggle variant="outline-primary" id="dropdown-basic">
            {selectedOption}
        </Dropdown.Toggle>

        <Dropdown.Menu>
            <Dropdown.Item eventKey="Valle del Cauca">Valle del Cauca</Dropdown.Item>
            <Dropdown.Item eventKey="Antioquia">Antioquia</Dropdown.Item>
            <Dropdown.Item eventKey="Bogotá">Bogotá</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
    );
    };

export default FacDropDown;
