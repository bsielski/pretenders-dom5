import React from 'react';
import VERSION from './version';

export const AppContext = React.createContext(
    version={VERSION}
);

export default AppContext;
