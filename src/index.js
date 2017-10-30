import React from 'react';
import ReactDOM from 'react-dom';
import CV from './App';
import Data from './data';


ReactDOM.render(<CV {...Data} />, global.document.getElementById('root'));

