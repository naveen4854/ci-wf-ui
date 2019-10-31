import React from 'react';
import { Table } from 'react-bootstrap';

interface TEST {
    header: string
}

const TableSample: React.FC<TEST> = ({ header }) => {
    const handleClick = (e: any) => {
        e.preventDefault();
    }
    return (
        <div className="card" style={{ marginTop: 20 }}>
            <div className="card-body">
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
    )
}

export default TableSample;

