import React, { useRef } from "react";
import { Input } from "antd";

const InputField = (props) => {
  const {
    name = "name",
    placeholder,
    value,
    type,
    id,
    status,
    className,
    children,
    prefix,
    suffix,
    maxLength,
    disabled,
    onPressEnter,
    onChange = () => {},
    onBlur = () => {},
  } = props;

  const ref = useRef();

  return (
    <div>
      <Input
        name={name}
        ref={ref}
        placeholder={placeholder}
        value={value}
        type={type}
        id={id}
        status={status}
        className={className}
        onChange={onChange}
        onBlur={onBlur}
        prefix={prefix}
        suffix={suffix}
        maxLength={maxLength}
        disabled={disabled}
        onPressEnter={onPressEnter}
      >
        {children}
      </Input>
    </div>
  );
};

export default InputField;
