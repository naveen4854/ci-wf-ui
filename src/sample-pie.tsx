import React, { useState } from 'react';
import './App.css';
import { Pie } from 'react-chartjs-2';


interface TEST {
    header: string
    data: any
}


const PieSample: React.FC<TEST> = ({ header, data }) => {
    return (
        <div className="card">
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