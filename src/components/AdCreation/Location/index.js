import React from 'react';
import styled from 'styled-components';
import Input from '../../Input';

const AutoAddress = () => (
  <div>
    <input />
  </div>
);

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
`;

const Header = styled.h1`
  text-align: center;
`;

const Location = () => (
  <Wrapper>
    <Header>What's the address of the place you're selling?</Header>
    <AutoAddress />
  </Wrapper>
);

export default Location;
