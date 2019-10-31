import React, { useState, useEffect } from 'react';
import './App.scss';
import SimpleMap from './sample-map';
import PieSample from './sample-pie';
import TableSample from './sample-table';
import ReactTooltip from "react-tooltip";
import Navbar from './navbar';
import Dashboard from './dashboard/dashboard';

const App: React.FC = () => {
  const [state, setState] = useState({
    selectedCountry: '',
    countries: [{
      id: 'IN',
      status: 2
    },
    {
      id: 'RU',
      status: 0
    },
    {
      id: 'CN',
      status: 1
    }
    ]
  });
  const [content, setContent] = useState({ NAME: '', POP_EST: 0 });
  useEffect(() => {
    ReactTooltip.rebuild();
  })
  const countrySelected = (countryName: string) => {
    setState({
      ...state,
      selectedCountry: countryName
    });
    console.log(countryName, 'countryName')
  }
  return (
    <div>
      <Navbar></Navbar>
      <Dashboard></Dashboard>
    </div>
  );
}

export default App;
