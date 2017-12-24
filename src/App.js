import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TasksList from "./components/TasksList";
import { createStore } from "redux";
import reducer from "./redux";
import { Provider } from "react-redux";

const store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
            </header>
            <TasksList/>
          </div>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
