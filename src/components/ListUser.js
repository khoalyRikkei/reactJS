import { Component } from "react";

class ListUser extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <>
        <table cellPadding={10}>
          <thead>
            <tr>
              <th>#</th>
              <th>Full name</th>
              <th>country</th>
            </tr>
          </thead>
          <tbody>
            {this.props?.data.length > 0 &&
              this.props?.data.map((user, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{user.firstName + " " + user.lastName}</td>
                  <td>{user.country}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </>
    );
  }
}

export default ListUser;
