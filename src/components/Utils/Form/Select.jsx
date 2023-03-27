import React from "react";

const Select = (props) => {
  const onSelect = (e) => {
    props.onSelect(e.target.value);
  };
  return (
    <>
    <label>{props.label}</label>
      <select
        onChange={onSelect}
        className="bg-gray-100 border rounded-md text-sm"
      >
        <option value="none">{props.label}</option>
        {props.options.map((item, index) => (
          <option value={item.value} key={index}>
            {item.placeholder}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;
