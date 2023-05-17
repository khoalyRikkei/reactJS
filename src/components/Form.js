import { Component, createRef } from "react";

class Form extends Component {
  constructor() {
    super();
    this.state = { name: "Xuyen" };
    this.country = createRef();
  }
  handleSubmit = () => {
    console.log(this.state, this.country.current.value);
  };
  render() {
    if (10 < 5) {
      return <h1>Hello World</h1>;
    }
    return (
      <>
        <input
          placeholder="Nhập tên"
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <select defaultValue={"59"} ref={this.country}>
          <option value="29">HN</option>
          <option value="43">DN</option>
          <option value="59">HCM</option>
        </select>
        <button onClick={this.handleSubmit}>Submit</button>
      </>
    );
  }
}

export default Form;
