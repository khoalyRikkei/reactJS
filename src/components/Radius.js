import { Component } from "react";

class Radius extends Component {
  render() {
    let r = this.props.radius + "px";

    const style = {
      borderRadius: "50%",
      width: r,
      height: r,
      background: "red",
      margin: "0 auto",
    };
    return <div style={style}></div>;
  }
}

export default Radius;
