import { Component } from "react";
import Header from "./Header";
import { data, staffs } from "./db";

class Layout extends Component {
  constructor() {
    super();
    this.state = { name: "" };
    this.handleChange2 = this.handleChange1.bind(this);
  }
  handleChange1(e) {
    this.setState({ name: e.target.value });
  }
  render() {
    console.log("re-render");
    return (
      <h1>
        <input onChange={this.handleChange2} placeholder="Nhập tên" />

        <Header user={this.state.name} />
        {data.map((item) => (
          <img src={item.imgUrl} />
        ))}
      </h1>
    );
  }
}

export default Layout;
