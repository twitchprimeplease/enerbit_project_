import React from 'react';
import NavBarComponent from '../components/navbar/navBarComponent.js';
import Paneldecontrol from '../components/PaneldeControl/Paneldecontrol.js';
import '../styles.css';

const Panel = () => {
  return (
    <div className="App">
        <NavBarComponent />
        <Paneldecontrol />
  </div>
  );
};

export default Panel;