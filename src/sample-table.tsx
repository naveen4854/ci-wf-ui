import React from 'react';
import { Table } from 'react-bootstrap';

interface TEST {
    header: string
}

const TableSample: React.FC<TEST> = ({ header }) => {
    return (
        <div>
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
                        <td>30</td>
                        <td>25</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <td>ConfirmIT</td>
                        <td>804</td>
                        <td>50</td>
                        <td>42</td>
                        <td>8</td>
                    </tr>
                    <tr>
                        <td>Decipher</td>
                        <td>66</td>
                        <td>4</td>
                        <td>0</td>
                        <td>4</td>
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
    )
}

export default TableSample;

