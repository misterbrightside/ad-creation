import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-auto-flow: row;
`;

const Input = ({ labelText, type }) => (
  <Wrapper>
    <label>{labelText}</label>
    <input type={type} />
  </Wrapper>
);

export default Input;
