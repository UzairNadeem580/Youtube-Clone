import React from "react";
import "./Sidebarrow.css";

function Sibebarrow({ selected, title, Icon }) {
  return (
    <div className={`sidebarrow ${selected && "selected"}`}>
      <Icon className="sidebarrow_icon" />
      <h2 className="sidebarrow_heading">{title}</h2>
    </div>
  );
}

export default Sibebarrow;
