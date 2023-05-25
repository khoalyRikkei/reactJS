import Table from "react-bootstrap/Table";
import { TiDelete } from "react-icons/ti";
import { FaCrown } from "react-icons/fa";

function ListUser(props) {
  return (
    <Table striped bordered hover>
      <tbody>
        {props.listPlayer.length ? (
          props.listPlayer.map((player, index) => (
            <tr key={index}>
              <td>
                <span onClick={() => props.onDelete(player.id)}>
                  <TiDelete />
                </span>
                {player.isTop && (
                  <span>
                    <FaCrown />
                  </span>
                )}
              </td>
              <td>{player.name}</td>
              <td>
                <button onClick={() => props.onEdit("down", player.id)}>
                  -
                </button>
                <span>{player.point}</span>
                <button onClick={() => props.onEdit("up", player.id)}>+</button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td>
              <h2>Không có người chơi</h2>
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
}

export default ListUser;
