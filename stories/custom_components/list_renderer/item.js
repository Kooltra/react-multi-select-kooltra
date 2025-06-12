import React from "react";
import { TiTickOutline, TiTick } from "react-icons/ti";

import style from "./item_style.scss";

const Item = ({ item, checked, height }) => {
  return (
    <div
      className={style.item}
      style={{
        height,
        backgroundImage: `url(${item.img})`
      }}
    >
      <div className={`${style.icon} ${checked ? style.icon_checked : ""}`}>
        {!checked ? (
          <TiTickOutline color={!checked ? "#41B6E6" : ""} />
        ) : (
          <TiTick color={checked ? "#fff" : ""} />
        )}
      </div>
      <div className={style.label}>{item.label}</div>
    </div>
  );
};

export default Item;
