import React from "react";

const InputRadio = props => {
  return (
    <div className={props.className}>
      <label>
        <input
          className="nameRadio"
          type="radio"
          name={props.name}
          value={props.name}
          onChange={props.onChange}
          checked={props.checked}
          // checked={type.appartement === true ? true : false}
        />
        <span>{props.name}</span>
      </label>
    </div>
  );
};

export default InputRadio;
