import React from 'react';
import ReactDOM from 'react-dom';
import getNations from './nations';
import VERSION from './version';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
        <App
    nations={getNations()}
    version={VERSION}
        />,
    document.getElementById('root'));
registerServiceWorker();
