import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import ListUser from "./components/ListUser";

function App() {
  const listUser = [
    { userId: "SV003", name: "Nguyen Van D" },
    { userId: "SV004", name: "Nguyen Van E" },
    { userId: "SV005", name: "Nguyen Van F" },
  ];

  return (
    <div className="App">
      <ParentComponent data={listUser} />
    </div>
  );
}

// Component cha
class ParentComponent extends Component {
  constructor(props) {
    super();
    this.state = {
      status: false,
      listUser: [],
      user: { firstName: "", lastName: "", country: "" },
      listUser2: [],
    };
  }
  handleSubmit = (e) => {
    console.log(e);
    e.preventDefault();

    const newData = this.state.listUser;
    newData.push(this.state.user);

    this.setState({ listUser: newData });
  };

  // Cach 2:
  handleSubmit2 = (e) => {
    const user = {};
    user[e.target[0].name] = e.target[0].value;
    user[e.target[1].name] = e.target[1].value;
    user[e.target[2].name] = e.target[2].value;
    this.setState({ listUser2: [...this.state.listUser2, user] });
    console.log(this.state);
  };
  handleOnChange = (e) => {
    const user = {};
    user[e.target.name] = e.target.value;
    this.setState({ user: { ...this.state.user, ...user } });
  };
  render() {
    const data = [
      { userId: "SV001", name: "Nguyen Van A" },
      { userId: "SV002", name: "Nguyen Van B" },
      { userId: "SV003", name: "Nguyen Van C" },
    ];
    data.push(...this.props.data);
    console.log(this.state);
    return (
      <>
        <h1>Props and State in ReactJS</h1>
        <button onClick={() => this.setState({ status: !this.state.status })}>
          Toggle
        </button>

        {this.state.status ? (
          <ChildComponent status={false} data={data} dataApp={this.props} />
        ) : null}

        {/* Cách 2 */}
        {/* {this.state.status && (
          <ChildComponent status={false} data={data} dataApp={this.props} />
        )} */}

        {/* Làm việc với sự kiện */}

        <form
          action=""
          onSubmit={(e) => {
            this.handleSubmit(e);
            this.handleSubmit2(e);
          }}
        >
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            id="fname"
            name="firstName"
            placeholder="Your name.."
            onChange={(e) => this.handleOnChange(e)}
          />
          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            id="lname"
            name="lastName"
            placeholder="Your last name.."
            onChange={(e) => this.handleOnChange(e)}
          />
          <label htmlFor="country">Country</label>
          <select
            id="country"
            name="country"
            onChange={(e) => this.handleOnChange(e)}
            defaultValue="usa"
          >
            <option value="australia">Australia</option>
            <option value="canada">Canada</option>
            <option value="usa">USA</option>
          </select>
          <input type="submit" defaultValue="Submit" />
        </form>
        <ListUser data={this.state.listUser} />
      </>
    );
  }
}

// Component con

class ChildComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        {this.props?.data.map((user) => (
          <h3 key={user.id}>{user.name}</h3>
        ))}
      </>
    );
  }
}

export default App;
