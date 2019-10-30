import React, { useState, useEffect } from 'react';
import './App.css';
import SimpleMap from './sample-map';
import PieSample from './sample-pie';
import TableSample from './sample-table';
import ReactTooltip from "react-tooltip";

const App: React.FC = () => {
  const [state, setState] = useState({
    selectedCountry: ''
  });
  const [content, setContent] = useState({ NAME: '', POP_EST: 0 });
  useEffect(() => {
    ReactTooltip.rebuild();
  })
  const countrySelected = (countryName: string) => {
    setState({
      selectedCountry: countryName
    });
    console.log(countryName, 'countryName')
  }
  return (
    <div className="App">
      <div>
        <div style={{ height: '80vh', width: '50vw', padding: 20, float: "left" }}>
          <SimpleMap onCountrySelected={countrySelected} setContent={setContent}></SimpleMap>
          <ReactTooltip>
            <h1>{content.NAME}</h1>
            <h2>{content.POP_EST}</h2>
          </ReactTooltip>
        </div>
        <div style={{ height: '50vh', width: '45vw', padding: 20, float: "right" }}>
          <PieSample header={state.selectedCountry} />
        </div>
        <div style={{ margin: '50px' }}>
          <TableSample header={state.selectedCountry} />
        </div>
      </div>
    </div>
  );
}

export default App;
