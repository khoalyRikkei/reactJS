import { memo } from "react";

function Todos({ todos, addTodo }) {
  console.log("child render");
  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button onClick={addTodo} className="btn btn-primary m-1">
        Add Todo
      </button>
    </>
  );
}
export default Todos;
