import { Component, createRef } from "react";

class Modal extends Component {
  constructor() {
    super();
    this.state = { time: "" };
    this.interval = createRef();
  }

  componentDidMount() {
    console.log("Đây là sau khi render - được mount");
    this.interval.current = setInterval(() => {
      console.log("hello setInterval");
      this.setState({ time: new Date().toLocaleTimeString() });
    }, 1000);
    this.setState({ status: this.props.status });
  }
  componentWillMount() {
    console.log("Đây là trước khi mount");
  }
  componentWillReceiveProps(props) {
    console.log("componentWillReceiveProps", props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("nextProps", nextProps);
    console.log("nextState", nextState);
    if (nextProps.status === this.state.status) {
      console.log(111111111);
      return false;
    }
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("nextProps will update", nextProps);
    console.log("nextState will update", nextState);
  }
  componentWillUnmount() {
    clearInterval(this.interval.current);
  }

  render() {
    console.log("Đây là render");
    return (
      <h1>
        Xin chào các bạn, bây giờ là
        {this.state.time}
      </h1>
    );
  }
}
export default Modal;
