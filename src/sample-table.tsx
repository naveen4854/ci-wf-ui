import React from 'react';
import { Table } from 'react-bootstrap';
import PieSample from './sample-pie';

interface TEST {
    header: string
}

const TableSample: React.FC<TEST> = ({ header }) => {
    const handleClick = (e: any) => {
        e.preventDefault();
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
                                    <td><a href='' onClick={handleClick}>30</a></td>
                                    <td><a href='' onClick={handleClick}>25</a></td>
                                    <td><a href='' onClick={handleClick}>5</a></td>
                                </tr>
                                <tr>
                                    <td>ConfirmIT</td>
                                    <td>800</td>
                                    <td><a href='' onClick={handleClick}>50</a></td>
                                    <td><a href='' onClick={handleClick}>42</a></td>
                                    <td><a href='' onClick={handleClick}>8</a></td>
                                </tr>
                                <tr>
                                    <td>Decipher</td>
                                    <td>66</td>
                                    <td><a href='' onClick={handleClick}>4</a></td>
                                    <td><a href='' onClick={handleClick}>0</a></td>
                                    <td><a href='' onClick={handleClick}>4</a></td>
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
                            'Green',
                            'Blue',
                            'Yellow'
                        ],
                        datasets: [{
                            data: [300, 50, 100],
                            backgroundColor: [
                                '#447733',
                                '#DD0014',
                                '#FFBF00'
                            ],
                            hoverBackgroundColor: [
                                '#447733',
                                '#DD0014',
                                '#FFBF00'
                            ]
                        }]
                    }} header={'Live Projects Info'} />
            </div>
        </div > : <React.Fragment></React.Fragment>
    )
}

export default TableSample;

