import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import PieSample from './sample-pie';

interface TEST {
    header: string
}

const TableSample: React.FC<TEST> = ({ header }) => {
    const [projects, setProjects] = useState([] as any[]);

    const handleClick = (e: any, num: number) => {
        e.preventDefault();
        const newArr = Array(num).fill(0);
        setProjects([...newArr]);
    }

    return (
        header !== '' ? < div className="row" style={{ marginTop: 20 }}>
            <div className="col-6" >
                <div className="card">
                    <div className="card-header">
                        {header}
                    </div>
                    <div className="card-body ">
                        <Table responsive bordered>
                            <thead>
                                <tr>
                                    <th>Survey Tool</th>
                                    <th># Completed</th>
                                    <th># Live Projects</th>
                                    <th># Live Offline</th>
                                    <th># Live Online</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Survey To Go</td>
                                    <td>125</td>
                                    <td><a href='' onClick={(e) => handleClick(e, 30)}>30</a></td>
                                    <td><a href='' onClick={(e) => handleClick(e, 25)}>25</a></td>
                                    <td><a href='' onClick={(e) => handleClick(e, 5)}>5</a></td>
                                </tr>
                                <tr>
                                    <td>ConfirmIT</td>
                                    <td>800</td>
                                    <td><a href='' onClick={(e) => handleClick(e, 50)}>50</a></td>
                                    <td><a href='' onClick={(e) => handleClick(e, 42)}>42</a></td>
                                    <td><a href='' onClick={(e) => handleClick(e, 8)}>8</a></td>
                                </tr>
                                <tr>
                                    <td>Decipher</td>
                                    <td>66</td>
                                    <td><a href='' onClick={(e) => handleClick(e, 4)}>4</a></td>
                                    <td><a href='' onClick={(e) => handleClick(e, 0)}>0</a></td>
                                    <td><a href='' onClick={(e) => handleClick(e, 4)}>4</a></td>
                                </tr>
                                <tr>
                                    <td>Total</td>
                                    <td>995</td>
                                    <td>84</td>
                                    <td>2710</td>
                                    <td>680</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
            <div className="col-6">
                <PieSample
                    data={{
                        labels: [
                            'Total Live Projects',
                            'Live Online Projects',
                            'Live Offline Projects',
                        ],
                        datasets: [{
                            data: [300, 50, 100],
                            backgroundColor: [
                                '#447733',
                                '#FFBF00',
                                '#DD0014',
                            ],
                            hoverBackgroundColor: [
                                '#447733',
                                '#FFBF00',
                                '#DD0014',
                            ]
                        }]
                    }} header={'Live Projects Info'} />
            </div>
            <div className="col-12" >
                <div className="card">
                    <div className="card-header">
                        {header}
                    </div>
                    <div className="card-body ">
                        <Table responsive bordered>
                            <thead>
                                <tr>
                                    <th>Project Id</th>
                                    <th>ONL ID / STG ID</th>
                                    <th>Project Name</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    projects.map((prj, i) => <tr>
                                        <td>Project Id {i}</td>
                                        <td>ONL {i}</td>
                                        <td>Test{i}</td>
                                    </tr>)
                                }

                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </div > : <React.Fragment></React.Fragment>
    )
}

export default TableSample;

