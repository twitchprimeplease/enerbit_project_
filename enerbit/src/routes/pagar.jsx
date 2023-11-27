import React from 'react';
import '../styles.css';
import { Outlet } from "react-router-dom";
import Navforpay from '../components/Navforpay/Navforpay.js'
import Stepsforpay from '../components/stepsforpay/Stepsforpay.js';

const Pagar = () => {
    return (
        <>
            <Navforpay />
            <Stepsforpay />
            <div>
                <Outlet />
            </div>
        </>
    );
};

export default Pagar;