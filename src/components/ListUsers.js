import Table from "react-bootstrap/Table";
import { TiDelete } from "react-icons/ti";
import { FaCrown } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { _DELETE, _DOWN, _UP } from "../constant/common";
import listPlayer from "../Redux/Reducer";

function ListUser() {
  const dispatch = useDispatch();
  const list = useSelector((a) => a);
  console.log(222, list);

  return (
    <Table striped bordered hover>
      <tbody>
        {list?.length ? (
          list.map((player, index) => (
            <tr key={index}>
              <td>
                <span
                  onClick={() => dispatch({ type: _DELETE, id: player.id })}
                >
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
                <button
                  onClick={() => dispatch({ type: _DOWN, id: player.id })}
                >
                  -
                </button>
                <span>{player.point}</span>
                <button onClick={() => dispatch({ type: _UP, id: player.id })}>
                  +
                </button>
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
