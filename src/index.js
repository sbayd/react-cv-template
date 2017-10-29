import React from 'react';
import ReactDOM from 'react-dom';
import CV from './App';
import Data from './data';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<CV {...Data} />, global.document.getElementById('root'));
registerServiceWorker();

