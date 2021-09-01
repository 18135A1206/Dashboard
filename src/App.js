import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { FirebaseProvider } from './contexts/FirebaseContext';

import routes, { renderRoutes } from './routes';
import { BASENAME } from './config/constant';

// import Leaveform from './Leaveform';

// const Leaveform_App = () => {
//     return (
//         <div>
//             <Leaveform />
//         </div>
//     );
// };

// export default Leaveform_App;

const App = () => {
    return (
        <React.Fragment>
            <Router basename={BASENAME}>
                <FirebaseProvider>{renderRoutes(routes)}</FirebaseProvider>
            </Router>
        </React.Fragment>
    );
};

export default App;
