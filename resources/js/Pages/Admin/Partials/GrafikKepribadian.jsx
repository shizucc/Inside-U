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


export default function GrafikKepribadian(props) {
    const options = {
        indexAxis: 'y',
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
            legend: {
                display: false,
                position: 'right',
            },
            title: {
                display: true,
                text: props.judul,
                color: '#000',
                font: {
                    size: 24,
                    weight: 100
                }
            },
        },
    };

    const data = {
        labels: Object.keys(props.data),
        datasets: [{
            label: props.label,
            data: Object.values(props.data),
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            barThickness: 20,
        },],
    };
    return(
        <Bar className="px-10" options={options} data={data} />
    );
}
