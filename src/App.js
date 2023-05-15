import React, { Fragment, createContext, createElement, useState } from "react";

function App() {
  // Tạo 1 element bằng ReactJS
  const element2 = createElement(
    "h2",
    { className: "test" },
    "Hello React lần 2"
  );

  const cars = ["BMW", "Volvo", "Audi"];

  const content = "Xin chào lớp JS Đà Nẵng";

  const handleClick = () => {
    alert("React JS 2023");
  };

  function handleChange(value) {
    console.log("Kiểm tra onChange", value);
  }
  return (
    <div>
      <h1 style={{ color: "red" }}>Xin chào Rikkei Academy</h1>
      <H1Element />
      {element2}

      <h5>{content}</h5>
      {/* {cars.map((item, index) => (
        <p key={index}>{item}</p>
      ))} */}

      {/* Khi click --> chỉ là 1 function nhưng không được gọi */}
      <button onClick={handleClick}>Click me 1 </button>

      <button onClick={() => handleClick()}>Click me 2</button>

      {/* thuộc tính onClick đã gọi một function */}
      {/* <button onClick={handleClick()}>Click me 3</button> */}

      <input onChange={handleChange} />
    </div>
  );
}

// Tạo 1 function trả về element
function H1Element() {
  const element = createElement("h2", { className: "test" }, "Hello React");
  return element;
}
export default App;
