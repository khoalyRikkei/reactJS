import logo from "./logo.svg";
import "./App.css";
import Modal from "./components/Modal";
import { Component } from "react";
import Form from "./components/Form";

class App extends Component {
  constructor() {
    super();
    this.state = { status: true };
  }

  render() {
    return (
      <>
        <div className="App">
          {this.state.status && <Modal status={this.state.status} />}
        </div>
        <button onClick={() => this.setState({ status: !this.state.status })}>
          Click me
        </button>
        <Form />
      </>
    );
  }
}

export default App;
