import React, { useState } from 'react';
import { Pie } from 'react-chartjs-2';


interface TEST {
    header: string
    data: any
}


const Piechart: React.FC<TEST> = ({ header, data }) => {
    return (
        <div className="card">
        {/* <div className="graph-chart"> */}
            <div className="card-header">
            <h4>
                {header}
            </h4>
            </div>
            <div className="card-body">
                <Pie data={data} />
            </div>
        {/* </div> */}
    </div>

    )
}

export default Piechart;