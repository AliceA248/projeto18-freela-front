import React from "react";
import styled from "styled-components";

const Input = ({ type, placeholder, value, onChange }) => {
  return (
    <StyledInput
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default Input;

const StyledInput = styled.input`
  outline: none;
  padding: 16px 20px;
  width: 100%;
  border-radius: 5px;
  font-size: 16px;
  background-color: #f0f2f5;
  border: 1px solid #046ee5;
  margin: 2px;
`;
