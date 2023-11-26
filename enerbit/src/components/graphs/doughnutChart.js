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
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>+30%</h2>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DoughnutChart;
