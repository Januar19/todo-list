import React from "react";
import "./index.css";

function List(props) {
  return (
    <div className="box">
      <ul>
        {props.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
export default List;
