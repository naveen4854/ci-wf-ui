import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import { Piechart } from "../index";

interface TEST {
    header: string
}

const CustomTable: React.FC<TEST> = ({ header }) => {
    const [projects, setProjects] = useState([] as any[]);
    const [showProjectDetails, setShowProjectDetails] = useState(false);
    const [projectDetailsHeader, setprojectDetailsHeader] = useState('');

    const handleClick = (e: any, num: number, title: string) => {
        e.preventDefault();
        const newArr = Array(num).fill(0);
        setProjects([...newArr]);
        setShowProjectDetails(true);
        setprojectDetailsHeader(title);
    }

    return (
        header !== '' ? < div className="row" style={{ marginTop: 20 }}>
            <div className="col-8">
                <div className="card">
                    <div className="card-header dark-blue">
                        <div className="row align-items-center">
                            <div className="col">
                                <h4 className="card-header-title">
                                    {header} : Project Details
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <Table style={{ marginTop: 10 }} responsive bordered>
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
                                    <td><a href='' onClick={(e) => handleClick(e, 30, 'STG Live Projects')}>30</a></td>
                                    <td><a href='' onClick={(e) => handleClick(e, 25, 'STG Live Offline')}>25</a></td>
                                    <td><a href='' onClick={(e) => handleClick(e, 5, 'STG Live Online')}>5</a></td>
                                </tr>
                                <tr>
                                    <td>ConfirmIT</td>
                                    <td>800</td>
                                    <td><a href='' onClick={(e) => handleClick(e, 50, 'ConfirmIt Live Projects')}>50</a></td>
                                    <td><a href='' onClick={(e) => handleClick(e, 42, 'ConfirmIt Live Offline')}>42</a></td>
                                    <td><a href='' onClick={(e) => handleClick(e, 8, 'ConfirmIt Live Online')}>8</a></td>
                                </tr>
                                <tr>
                                    <td>Decipher</td>
                                    <td>66</td>
                                    <td><a href='' onClick={(e) => handleClick(e, 4, 'Decipher Live Projects')}>4</a></td>
                                    <td><a href='' onClick={(e) => handleClick(e, 0, 'Decipher Live Offline')}>0</a></td>
                                    <td><a href='' onClick={(e) => handleClick(e, 4, 'Decipher Live Online')}>4</a></td>
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
            <div className="col-4">
                <Piechart
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
            {
                showProjectDetails && <div className="col-12" style={{ marginTop: 20 }}>
                    <div className="card">
                        <div className="card-header dark-blue">
                            <div className="row align-items-center">
                                <div className="col">
                                    <h4 className="card-header-title">
                                        {header} : {projectDetailsHeader} Projects list
                                    </h4>
                                </div>

                            </div>
                        </div>
                        <div className="card-body ">
                            <Table style={{ marginTop: 10 }} responsive bordered>
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
                                        projects.map((prj, i) => {
                                            let statusColor = 'white';
                                            let statusCode = Math.floor(Math.random() * 3);
                                            console.log(statusCode, 'statusCode')
                                            switch (statusCode) {
                                                case 0:
                                                    statusColor = '#447733';
                                                    break;
                                                case 1:
                                                    statusColor = '#FFBF00';
                                                    break;
                                                case 2:
                                                    statusColor = '#DD0014';
                                                    break;
                                            }
                                            return <tr>
                                                <td>Project Id {i}</td>
                                                <td>ONL {i}</td>
                                                <td>Test{i}</td>
                                                <td ><div style={{ padding: 20, background: statusColor }}></div></td>
                                            </tr>
                                        })
                                    }

                                </tbody>
                            </Table>
                        </div>
                    </div>

                </div>
            }
        </div > : <React.Fragment></React.Fragment>
    )
}

export default CustomTable;

