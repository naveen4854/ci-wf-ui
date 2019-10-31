import React, { useState } from 'react';
import './App.css';
import { Pie } from 'react-chartjs-2';

const data = {
    labels: [
        'Red',
        'Blue',
        'Yellow'
    ],
    datasets: [{
        data: [300, 50, 100],
        backgroundColor: [
            '#DD0014',
            '#447733',
            '#FFBF00'
        ],
        hoverBackgroundColor: [
            '#DD0014',
            '#447733',
            '#FFBF00'
        ]
    }]
};

interface TEST {
    selectedCountry: string
}


const PieSample: React.FC<TEST> = ({ selectedCountry }) => {
    const header = selectedCountry && selectedCountry !== '' ? `${selectedCountry}  - Live Project Status` : 'Global - Live Project Status'
    return (
        <div className="card" >
            <div className="card-header">
                {header}
            </div>
            <div className="card-body">
                <Pie data={data} />
            </div>
        </div>

    )
}

export default PieSample;