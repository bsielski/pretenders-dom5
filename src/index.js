import React from 'react';
import ReactDOM from 'react-dom';
import getNations from './getNations';
import getPretenders from './getPretenders';
import VERSION from './version';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
        <App
    nations={getNations()}
    pretenders={getPretenders()}
    version={VERSION}
        />,
    document.getElementById('root'));
registerServiceWorker();
