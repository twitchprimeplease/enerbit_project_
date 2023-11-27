import React from 'react';
import NavBarComponent from '../components/navbar/navBarComponent.js'
import FacturasTab from '../components/Facturas/FacturasTab.js';
import '../styles.css';

const Facturas = () => {
  return (
    <>
      <NavBarComponent />
      <FacturasTab />
        </>
  );
};

export default Facturas;