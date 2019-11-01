import React, { useState, useEffect } from 'react';
import ReactTooltip from "react-tooltip";
import './App.scss';
import { Dashboard, Footer, Sidenav } from "../index";

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
      <Sidenav></Sidenav>
      <Dashboard></Dashboard>
      <Footer></Footer>
    </div>
  );
}

export default App;
