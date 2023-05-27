import { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { _ADD } from "../constant/common";

function AddUser() {
  const dispatch = useDispatch();
  const [valueInput, setValueInput] = useState("");
  const handleAdd = () => {
    dispatch({ type: _ADD, payload: valueInput });
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
