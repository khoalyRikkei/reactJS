import { Component } from "react";
import Radius from "./components/Radius";
import InputElement from "./components/InputComponent";

class App extends Component {
  constructor() {
    super();
    this.state = { radius: 0 };
  }
  handleOnChange = (value) => {
    console.log(1111111111, value);
    this.setState({ radius: Number(value) });
  };
  handleClick = (status) => {
    if (status) {
      this.setState({ radius: this.state.radius + 1 });
    } else {
      this.setState({ radius: this.state.radius - 1 });
    }
  };
  render() {
    return (
      <div className="App">
        <InputElement onChangeInput={this.handleOnChange} />
        <button onClick={() => this.handleClick(true)}>+</button>
        <button onClick={() => this.handleClick(false)}>-</button>
        <Radius radius={this.state.radius} />

        {this.state.radius}
      </div>
    );
  }
}

export default App;
