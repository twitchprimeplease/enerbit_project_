import React from 'react';
import { Form } from 'react-bootstrap';

const YearsDropdown = () => {
    const getYears = () => {
        const currentYear = new Date().getFullYear();
        const years = [];
        for (let i = currentYear; i <= currentYear + 20; i++) {
        years.push(i);
        }
        return years;
    };

    const years = getYears();

    return (
        <Form.Control as="select" custom>
        {years.map((anio, index) => (
            <option key={index}>{anio}</option>
        ))}
        </Form.Control>
    );
};

export default YearsDropdown;
