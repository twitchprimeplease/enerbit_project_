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
  indexAxis: 'y',
  plugins: {
    title: {
      display: false,
      text: '',
    },
  },
  
  responsive: true,
  scales: {
    x: {
      stacked: true,
      beginAtZero: true,
      max: 100,
      grid: {
        display: false, 
      },
      ticks: {
        display: false, 
      },
        border: {
            display:false,
        }
    },
    y: {
      stacked: true,
      beginAtZero: true,
      max: 100,
      min: 0,
      grid: {
        display: false, 
      },
      border: {
        display:false,
    }

    },
    
  },
  elements: {
    bar: {
      borderRadius: 10, // Ajusta según sea necesario para hacer las barras redondas
    },
},
};

const labels = ['Valores']; 

export const data = {
  labels,
  datasets: [
    {
      label: 'Energía activa',
      data: [30],
      backgroundColor: '#53358E',
      borderRadius: 10, 
      maxBarThickness: 14,
      
    },
    {
      label: 'Energía reactiva',
      data: [30],
      backgroundColor: '#ED7004',
      borderRadius: 10, 
      borderWidth: 1, 
      maxBarThickness: 14,
    },
  ],
};

    export function StackHorizontalbars() {
        return <Bar options={options} data={data} />
    }

