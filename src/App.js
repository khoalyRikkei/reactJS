import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import $ from "jquery";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      registers: [],
    };
  }
  componentWillMount() {}

  handleRegister = (user) => {
    let isDulicate = false;
    this.state.registers.forEach((userdb) => {
      if (userdb.email === user.email) {
        isDulicate = true;
      }
    });

    if (!isDulicate) {
      const users = this.state.registers;
      users.push(user);
      this.setState({ registers: users });
    }
  };

  render() {
    console.log(11111, this.state.registers);
    return (
      <div className="form">
        <div className="form-toggle" />
        <Login />
        <Register onSubmit={this.handleRegister} />
      </div>
    );
  }
  componentDidMount() {
    var panelOne = $(".form-panel.two").height(),
      panelTwo = $(".form-panel.two")[0].scrollHeight;

    $(".form-panel.two")
      .not(".form-panel.two.active")
      .on("click", function (e) {
        e.preventDefault();

        $(".form-toggle").addClass("visible");
        $(".form-panel.one").addClass("hidden");
        $(".form-panel.two").addClass("active");
        $(".form").animate(
          {
            height: panelTwo,
          },
          200
        );
      });

    $(".form-toggle").on("click", function (e) {
      e.preventDefault();
      $(this).removeClass("visible");
      $(".form-panel.one").removeClass("hidden");
      $(".form-panel.two").removeClass("active");
      $(".form").animate(
        {
          height: panelOne,
        },
        200
      );
    });
  }
}

export default App;
