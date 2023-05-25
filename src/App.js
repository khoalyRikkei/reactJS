import logo from "./logo.svg";
import "./App.css";
import ListUser from "./components/ListUsers";
import AddUser from "./components/AddUser";
import PointGames from "./components/pointGame";
import { Container } from "react-bootstrap";
import { useState } from "react";

function App() {
  // const player = { id: 1, name: "Phúc", point: 0 }
  const [listPlayer, setListPlayer] = useState([]);

  // xử lý add
  const handleAdd = (value) => {
    // tạo người chơi

    // Tìm index của phần tử cuối trong listUser

    const indexLast = listPlayer.length - 1;
    // Player cuối cùng

    const playerLastest = listPlayer[indexLast];

    const player = {
      id: listPlayer.length ? playerLastest.id + 1 : 1,
      name: value,
      point: 0,
    };

    if (listPlayer.length) {
      setListPlayer([...listPlayer, player]);
    } else {
      setListPlayer([player]);
    }
  };

  //
  const handleDelete = (id) => {
    const newData = listPlayer.filter((player) => {
      if (player.id !== id) {
        return true;
      }
    });
    setListPlayer(newData);
  };

  /**
   *
   * @param {} action
   * @param {*} id
   */
  const handleEdit = (action, id) => {
    let max = 1;

    const newData = listPlayer.map((player) => {
      if (player.id === id) {
        // Kiểm tra điều kiện để tăng hay giảm
        action === "up" ? player.point++ : player.point--;

        // Validate khi dữ liệu về 0
        player.point < 0 && (player.point = 0);
      }

      if (player.point >= max) {
        max = player.point;
      }
      return player;
    });

    const newDataTop = newData.map((player) => {
      if (max == player.point) {
        player.isTop = true;
      } else {
        player.isTop = false;
      }
      return player;
    });

    setListPlayer(newDataTop);
  };
  return (
    <>
      <Container>
        <div className="table-game">
          <PointGames listPlayer={listPlayer} />
          <ListUser
            listPlayer={listPlayer}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
          <AddUser onAdd={handleAdd} />
        </div>
      </Container>
    </>
  );
}

export default App;
