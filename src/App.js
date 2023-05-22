import logo from "./logo.svg";
import "./App.css";
import { Button, Container, Form, InputGroup, Nav } from "react-bootstrap";
import ModalForm from "./components/Modal";
import Control from "./components/Control";
import { useEffect, useState } from "react";
import ListToDo from "./components/ListToDo";

function App() {
  const [toggleModal, setToggleModal] = useState(false);
  const [actionForm, setActionForm] = useState("");
  const [listToDo, setListToDo] = useState([]);
  const [dataItem, setDataItem] = useState({
    name: "",
    content: "",
    type: "",
    id: "",
    date: "",
  });

  const [filterData, setFilterData] = useState();
  const [dataFilter, setDataFilter] = useState(listToDo);

  // Xử lý toggle modal
  const handleToggleModal = (status, action, id) => {
    if (action === "edit") {
      const data = listToDo.find((item) => item.id === id);
      setDataItem(data);
    }
    setActionForm(action);
    setToggleModal(status);
  };

  // filter du lieu

  const handleFilter = (e) => {
    const type = e.target.value;
    setFilterData(type);
    if (type === "Tất cả nhiệm vụ") {
      return setDataFilter(listToDo);
    }

    const newData = listToDo.filter((item) => item.type === type);
    setDataFilter(newData);
  };

  // Xử lý submit modal

  const handleAddEditForm = (data) => {
    // Khi add mới (Không có id từ form)
    if (!data.id) {
      data.id = listToDo.length ? listToDo[listToDo.length - 1].id + 1 : 1;
      if (listToDo.length) {
        return setListToDo([...listToDo, data]);
      }
      setListToDo([data]);
    } else {
      // Khi edit có id từ form
      const newData = listToDo.map((item) => {
        if (item.id === data.id) {
          return { ...item, ...data };
        }
        return item;
      });

      setListToDo(newData);
    }
  };
  const handleDelete = (id) => {
    const newData = listToDo.filter((data) => data.id !== id);
    setListToDo(newData);
  };
  useEffect(() => {
    setDataFilter(listToDo);
  }, [listToDo]);
  return (
    <>
      {/* Control */}
      <Control onToggleModal={handleToggleModal} />

      {/* Form Modal */}

      <ModalForm
        // Đóng mở modal
        toggleModal={toggleModal}
        // xử lý đóng mở modal
        onToggleModal={handleToggleModal}
        // Xử lý dữ liệu form
        onAddEditForm={handleAddEditForm}
        // Truyền data cho form
        dataItem={dataItem}
      />
      {/* List to do */}
      <Container>
        <Nav variant="tabs" defaultActiveKey="/home">
          <Nav.Item>
            <input
              value="Tất cả nhiệm vụ"
              onClick={handleFilter}
              className={filterData === "Tất cả nhiệm vụ" ? "active" : ""}
              type="submit"
            />
          </Nav.Item>
          <Nav.Item>
            <input
              value="company"
              onClick={handleFilter}
              className={filterData === "company" ? "active" : ""}
              type="submit"
            />
          </Nav.Item>
          <Nav.Item>
            <input
              value="home"
              onClick={handleFilter}
              className={filterData === "home" ? "active" : ""}
              type="submit"
            />
          </Nav.Item>
        </Nav>
      </Container>
      <Container>
        <ListToDo
          listToDo={dataFilter}
          onToggleModal={handleToggleModal}
          onDeleteData={handleDelete}
        />
      </Container>
    </>
  );
}

export default App;
