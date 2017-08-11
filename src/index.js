import React from 'react';
//import ReactDOM from 'react-dom';
import { render } from 'react-snapshot';
import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

render(<App />, document.getElementById('root'));
registerServiceWorker();
