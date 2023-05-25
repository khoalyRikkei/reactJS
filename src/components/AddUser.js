import { useState } from "react";
import { Button } from "react-bootstrap";

function AddUser(props) {
  const [valueInput, setValueInput] = useState("");
  const handleAdd = () => {
    // Truyền dữ liệu cho App
    props.onAdd(valueInput);
    setValueInput("");
  };
  return (
    <>
      <div className="container-item" id="add-user">
        <input
          className="input-player"
          onChange={(e) => setValueInput(e.target.value)}
          value={valueInput}
        />
        <Button className="btn btn-primary" onClick={handleAdd}>
          Add player
        </Button>
      </div>
    </>
  );
}

export default AddUser;
