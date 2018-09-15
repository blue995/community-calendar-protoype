import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DatePickerComponent from './components/custom-date-picker/custom-date-picker';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">Datum und Uhrzeit</span>
          </div>
          <DatePickerComponent/>
        </div>
        
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">Thema</span>
          </div>
          <input type="text" className="form-control"></input>
        </div>
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">Details</span>
          </div>
          <textarea type="text" className="form-control"></textarea>
        </div>
      </div>
    );
  }
}

export default App;
