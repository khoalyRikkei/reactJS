import { Component } from "react";

class ListUser extends Component {
  render() {
    return (
      <>
        {this.props.registers.map((user, index) => (
          <h3 key={index}>{user}</h3>
        ))}
      </>
    );
  }
}
