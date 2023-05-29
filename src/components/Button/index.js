import React from "react";
import styled from "styled-components";

const MyButton = ({ Text, onClick, Type = "button" }) => {
  return (
    <Button type={Type} onClick={onClick}>
      {Text}
    </Button>
  );
};

export default MyButton;



export const Button = styled.button`
  padding: 16px 20px;
  outline: none;
  border: none;
  border-radius: 5px;
  width: 100%;
  cursor: pointer;
  background-color: #046ee5;
  color: white;
  font-weight: 600;
  font-size: 16px;
  max-width: 350px;
  margin: 3px;

  &:active {
    transform: scale(0.97);
  }
`;
