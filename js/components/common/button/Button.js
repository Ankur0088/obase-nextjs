import { Button } from "antd";
import React from "react";

const CustomButton = (props) => {
  const {
    type = "primary",
    target,
    size,
    shape,
    loading,
    href,
    ghost,
    disabled,
    children,
    danger,
    block,
    className,
    icon,
    onClick = () => { },
  } = props;
  return (
    <div>
      <Button
        type={type}
        target={target}
        size={size}
        shape={shape}
        loading={loading}
        href={href}
        ghost={ghost}
        disabled={disabled}
        danger={danger}
        block={block}
        className={className}
        icon={icon}
        onClick={onClick}
        htmlType="submit"
      >
        {children}
      </Button>
    </div>
  );
};

export default CustomButton;
