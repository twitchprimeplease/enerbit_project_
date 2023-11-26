import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

let beneficios = [5,12,6,5,6,10,0];
let meses = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

let midata = {
    labels: meses,
    datasets: [
        {
            label: 'Energía activa',
            data: beneficios,
            borderColor: '#FFB067',
            pointRadius: 8,
            pointBorderColor: '#FFB067',
            pointBackgroundColor: '#FFB067',
            pointLabel: '',
        },
        {
            label: 'Energía reactiva',
            data: [2,10,15,9,4,13,0],
            borderColor: '#9380B9',
            pointRadius: 8,
            pointBorderColor: '#9380B9',
            pointBackgroundColor: '#9380B9',
            pointLabel: '',
        },
    ],
};


let misoptions = {
    layout:{
        padding: 30
    },
    responsive: true,
    
};

export default function LinesChart(){
    return <Line data = {midata} options={misoptions}/>
}