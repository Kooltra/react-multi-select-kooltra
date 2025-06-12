import React from "react";
import Avatar from "@mui/material/Avatar";

const SelectionStatus = ({ selected }) => (
  <div
    style={{
      display: "flex",
      justifyContent: "flex-end",
      padding: "0 12px"
    }}
  >
    <Avatar>{selected.length}</Avatar>
  </div>
);

export default SelectionStatus;
