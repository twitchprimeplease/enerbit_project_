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

const labels = ['Granada', 'Colón', 'Valle del Lili', 'Ciudad Jardín'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Energía kWh',
      data: [10,18,15,23],
      backgroundColor: [
        '#E4DEEF',
        '#C4B9DA',
        '#9380B9',
        '#53358E',
      ],
    },
  ],
};

function BarChart() {
    return (
      <div style={{ height: '600px', width: '100%', display:'flex', alignItems: 'center'}}>
        <Bar data={data} options={options} />
      </div>
    );
  }
  
  export default BarChart;