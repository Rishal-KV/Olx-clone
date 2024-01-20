import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Context from './Store/FireBaseContext'


ReactDOM.render(
        <Context>
            <App />
        </Context>
, document.getElementById('root'));