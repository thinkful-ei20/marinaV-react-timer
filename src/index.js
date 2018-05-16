import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Timer from './components/timer';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Timer />, document.getElementById('root'));
registerServiceWorker();
