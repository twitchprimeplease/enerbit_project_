import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    scales: {
        y: {
          display: false, 
        },
    },
    layout: {
        padding: 10
    },
    plugins: {
        legend: {
        position: 'top',
        },
        title: {
        display: false,
        text: 'Chart.js Bar Chart',
        },
    },
};

const labels = ['Agosto', 'Septiembre', 'Octubre'];

export const data = {
    labels,
    datasets: [
        {
        label: 'Dinero',
        data: [10,10,10,10],
        backgroundColor: '#9380B9',
        },
        {
            label: 'Energía',
            data: [13,13,13,13],
            backgroundColor: '#FFB067',
        },
    ],
};

function BarCharts() {
    return (
        <div style={{ width: '100%', display:'flex', alignItems: 'center'}}>
            <Bar data={data} options={options} />
        </div>
        );
    }
    
export default BarCharts;