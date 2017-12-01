import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {}
  componentDidMount = () => {
    fetch('http://api.openweathermap.org/data/2.5/forecast?id=3021795&APPID=13f05207982b49768264d31ba0c515e9')
      .then(res => res.json())
      .then(datas => this.setState({ datas }));
  }
  render() {
    console.log(this.state.datas);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
