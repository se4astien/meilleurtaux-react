import React from "react";
import Info from "../images/infos.png";

const Title = props => {
  return (
    <div className="title">
      <h2>{props.title}</h2>
      <img src={Info} alt="Logo Info" />
    </div>
  );
};

export default Title;
