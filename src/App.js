import "./App.css";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    console.log("check state", state);

    return state;
  });
  console.log(state, 11111);
  return (
    <div className="App">
      <button onClick={() => dispatch({ type: "UP" })}>Tăng</button>
      <button onClick={() => dispatch({ type: "DOWN" })}>Giảm</button>
      <h3>
        Kết quả: <b>{state}</b>
      </h3>
      {console.log(111222, state)}
    </div>
  );
}

export default App;
