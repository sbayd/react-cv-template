import React from 'react';
import ReactDOM from 'react-dom';
import CV from './App';
import Data from './data';
import './assets/theme/styles.css';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<CV {...Data} />, global.document.getElementById('root'));
registerServiceWorker();

