import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import DatePickerComponent from './components/CustomDatePicker';
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(<DatePickerComponent />, document.getElementById('root'));
registerServiceWorker();
