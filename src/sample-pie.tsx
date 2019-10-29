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
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
        ],
        hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
        ]
    }]
};

interface TEST {
    header: string
}


const PieSample: React.FC<TEST> = ({ header }) => {
    return (
        <div>
            <h2>{header}</h2>
            <Pie data={data} />
        </div>
    )
}

export default PieSample;