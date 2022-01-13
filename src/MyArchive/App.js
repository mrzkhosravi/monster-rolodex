import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import react from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      buttonTitle: "Mohamadreza khosravi!",
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p> {this.state.buttonTitle} </p>

          <button
            onClick={() => {
              this.setState({
                buttonTitle: "Hello Again :)",
              });
            }}
          >
            {" "}
            Change Text{" "}
          </button>
        </header>{" "}
      </div>
    );
  }
}
//Original
/*function App() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
          
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }*/

export default App;
