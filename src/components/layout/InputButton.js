import React from "react";

export default function InputButton(props) {
  const {
    type,
    className,
    id,
    placeholder,
    name,
    defaultValue,
    onChange
  } = props;
  console.log(props);
  return (
    <input
      type={type}
      className={className}
      id={id}
      placeholder={placeholder}
      name={name}
      defaultValue={defaultValue}
      onChange={onChange}
    />
  );
}
