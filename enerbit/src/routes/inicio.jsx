import React from 'react';
import NavBarComponent from '../components/navbar/navBarComponent.js';
import Resumen from '../components/Resumen/Resumen.js';
import '../styles.css';
const Home = () => {
    return (
        
        <div id='inicio'>
            <NavBarComponent />
            <Resumen />
        </div>
    );
};

export default Home;