import React, { useState } from 'react';
import './App.css';
import SimpleMap from './sample-map';
import PieSample from './sample-pie';

const App: React.FC = () => {
  const [state, setState] = useState({
    selectedCountry: ''
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
        <div style={{ height: '50vh', width: '50vw', padding: 20, float: "left" }}>
          <SimpleMap onCountrySelected={countrySelected}></SimpleMap>
        </div>
        <div style={{ height: '50vh', width: '30vw', padding: 20, float: "right" }}>
          <PieSample header={state.selectedCountry}/>
        </div>
      </div>
    </div>
  );
}

export default App;
