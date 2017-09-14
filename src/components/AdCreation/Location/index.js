import React from 'react';
import styled from 'styled-components';
import Input from '../../Input';

const AutoAddress = () => (<div></div>);

const Wrapper = styled.div`
  background: green;
  display: grid;
  grid-gap: 1rem;
  padding: 1rem 0;
  justify-content: center;
`;

const Location = () => (
  <Wrapper>
    <h1>What is the address of the place you're selling?</h1>
    <AutoAddress />
  </Wrapper>
);

export default Location;
