    import React from 'react';
    import { Doughnut } from 'react-chartjs-2';
    import 'chartjs-plugin-datalabels';

    const data = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
        {
        data: [300, 50, 100],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        },
    ],
    };

    const options = {
    plugins: {
        datalabels: {
        color: '#fff', // Color del texto
        textAlign: 'center', // Alineación del texto
        font: {
            weight: 'bold', // Puedes ajustar el peso de la fuente según tus preferencias
        },
        formatter: (value, context) => {
            return context.dataset.data[context.dataIndex]; // Muestra el valor real de la sección
        },
        },
    },
    };

    const Dash = () => {
    return <Doughnut data={data} options={options} />;
    };

    export default Dash;
