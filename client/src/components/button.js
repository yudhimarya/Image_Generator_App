import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  background-color:#854CE6 ;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 7px;
  cursor: pointer;
  onClick:
  &:hover {
    background-color: #5c5b5b;
  }

  svg {
    margin-right: 8px;
  }
`;

const Button = ({ text, leftIcon,onClick,isLoading,isdisabled }) => {
  return (
    <StyledButton onClick={onClick}>
      {leftIcon}
      {text}
      {isLoading}
     {isdisabled}
    </StyledButton>
  );
};

export default Button;
