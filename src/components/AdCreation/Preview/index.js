import React from 'react';
import styled from 'styled-components';
import Input from '../../Input';

const Wrapper = styled.div`
  background: orange;
  display: grid;
  grid-gap: 1rem;
  padding: 1rem 0;
  justify-content: center;
`;

const Preview = () => (
  <Wrapper>
    Preview Preview;
  </Wrapper>
);

export default Preview;
