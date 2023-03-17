import React from "react";
import "./index.css";

function List(props) {
  return (
    <div className="box">
      <ul>
        {props.items.map((item, todos) => (
          <li key={todos}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}
export default List;
