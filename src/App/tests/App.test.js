import React from 'react';
import ReactDOM from 'react-dom';
import App from '../';

import getNations from '../../getNations';
import getPretenders from '../../getPretenders';
import VERSION from '../../version';

it('renders without crashing', () => {
  const div = document.createElement('div');
    ReactDOM.render(
            <App
    nations={getNations()}
    pretenders={getPretenders()}
    version={VERSION}
            />,
        div);
  ReactDOM.unmountComponentAtNode(div);
});
