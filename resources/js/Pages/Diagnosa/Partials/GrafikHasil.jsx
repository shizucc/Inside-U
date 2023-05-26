import RandomColor from 'randomcolor';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function GrafikHasil(props) {
    let data_count = props.data_diagnosa.length;
    let labels = Array();
    let persentase = Array();
    let colors = Array();
    let list_items = Array();
    for (let i = 0; i < data_count; i++) {
        labels.push(props.data_diagnosa[i].jenis_kepribadian);
        persentase.push(props.data_diagnosa[i].persentase);
        colors.push(RandomColor({luminosity: 'bright', hue: 'random', format: 'rgba', alpha: 0.7, seed: i*1000}));
    }

    const options = {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'bottom',
                labels: {
                    font: {
                        size: 20,
                    },
                },
            },
        },
    };

    const data = {
    labels: labels,
    datasets: [
        {
        label: 'Persentase',
        data: persentase,
        backgroundColor: colors,
        },
    ],
    };

    return(
        <Pie data={data} options={options} />
    );
}
