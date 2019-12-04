import React from 'react';

import './app.scss';
import { Provider } from "react-redux";
import Store from "../store/Store";
import { BrowserRouter as Router, } from 'react-router-dom';
import Routes from '../routes/Routes';

const App: React.FC = () => {
    return (
        <Provider store={Store}>
            <Router>
                <Routes />
            </Router>
        </Provider>
    );
}

export default App;
