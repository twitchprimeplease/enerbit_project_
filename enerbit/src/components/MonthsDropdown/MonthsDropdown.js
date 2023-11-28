import React from 'react';
import { Form } from 'react-bootstrap';

const MonthsDropdown = () => {
  const meses = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  return (
    <Form.Control as="select" custom >
      {meses.map((mes, index) => (
        <option key={index}>{mes}</option>
      ))}
    </Form.Control>
  );
};

export default MonthsDropdown;
