import React, { useState, useEffect } from 'react';
import './App.css';
import SimpleMap from './sample-map';
import PieSample from './sample-pie';
import TableSample from './sample-table';
import ReactTooltip from "react-tooltip";
import Navbar from './navbar';

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
      <div className="container-fluid" style={{ paddingTop: 20, paddingBottom: 20, backgroundColor: '#ece8e8' }}>
        <div className='row'>
          <div className='col-8'>

            <SimpleMap countries={state.countries} onCountrySelected={countrySelected} setContent={setContent}></SimpleMap>
            <ReactTooltip>
              <a>{content.NAME}</a>
              {/* <h2>{content.POP_EST}</h2> */}
            </ReactTooltip>
          </div>
          <div className='col-4'>
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
              }} header={state.selectedCountry && state.selectedCountry !== '' ? `${state.selectedCountry}  - Live Project Status` : 'Global - Live Project Status'} />
          </div>
          <div className='col-12'>
            <TableSample header={state.selectedCountry} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
