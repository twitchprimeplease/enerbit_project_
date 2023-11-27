import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import 'chartjs-plugin-datalabels';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: [],
  datasets: [
    {
      data: [30, 70],
      backgroundColor: ['#53358E', '#D4CBE4'],
    },
  ],
};

const options = {
  cutout: '90%', 
   borderRadius:15,
  responsive: true,
  plugins: {
    datalabels: {
      color: '#fff',
      textAlign: 'center',
      font: {
        weight: 'bold',
      },
      formatter: (value, context) => {
        return context.dataset.data[context.dataIndex];
      },
    },
  },
};

const DoughnutChart = () => {
  return (
    <div>
      
      <Doughnut data={data} options={options} />
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>+30%</h2>
    </div>
  );
};

export default DoughnutChart;
