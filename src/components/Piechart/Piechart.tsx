import React, { useState } from 'react';
import { Pie } from 'react-chartjs-2';


interface TEST {
    header: string
    data: any
}


const Piechart: React.FC<TEST> = ({ header, data }) => {
    return (
        <div className="chart-block">
            <div className="graph-chart">
                <h4>
                    {header}
                </h4>
                <div className="chart-data">
                    <Pie data={data} />
                </div>
            </div>
        </div>
        // <div className="card">
        // <div className="graph-chart">
        //     <div className="card-header">
        //         <h4>
        //         </h4>
        //     </div>
        //     <div className="card-body">
        //     </div>
        // </div>
        // </div>

    )
}

export default Piechart;