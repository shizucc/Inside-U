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


const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];


export default function GrafikBulanan(props) {
    const options = {
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
        labels,
        datasets: [{
            label: props.label,
            data: props.data,
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },],
    };
    return(
        <Bar options={options} data={data} />
    );
}
