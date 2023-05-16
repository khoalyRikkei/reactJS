import { Component } from "react";

class InputElement extends Component {
  render() {
    return (
      <>
        <input
          placeholder="Nhập vào radius"
          onChange={(e) => this.props.onChangeInput(e.target.value)}
          type="number"
        />
      </>
    );
  }
}

export default InputElement;
