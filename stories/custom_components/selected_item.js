import React from "react";
import { MdDelete } from "react-icons/md";

const SelectedItem = ({ item, height }) => (
  <div
    style={{
      height,
      display: "flex",
      alignItems: "center",
      lineHeight: "14px",
      padding: "0 12px"
    }}
  >
    <div>{item.label}</div>
    <div style={{ fontSize: "24px", margin: "0 12px" }}>
      <MdDelete />
    </div>
  </div>
);

export default SelectedItem;
