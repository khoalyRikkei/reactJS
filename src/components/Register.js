import { Component } from "react";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        email: "",
        username: "",
        password: "",
        cpassword: "",
      },
    };
  }
  handleSubmit = (e) => {
    this.props.onSubmit(this.state.user);
  };

  handleOnChange = (e) => {
    const key = e.target.name;
    const newUser = {};
    newUser[key] = e.target.value;
    this.setState({ user: { ...this.state.user, ...newUser } });
  };
  render() {
    return (
      <div className="form-panel two">
        <div className="form-header">
          <h1>Register Account</h1>
        </div>
        <div className="form-content">
          <form>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                onChange={this.handleOnChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                onChange={this.handleOnChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="cpassword">Confirm Password</label>
              <input
                type="password"
                id="cpassword"
                name="cpassword"
                onChange={this.handleOnChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={this.handleOnChange}
              />
            </div>
            <div className="form-group">
              <button type="submit" onClick={this.handleSubmit}>
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
