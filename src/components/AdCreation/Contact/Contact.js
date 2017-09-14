import React from 'react';
import styled from 'styled-components';
import Input from '../../Input';

const NameField = () => <Input labelText={'Name'} type={'text'} />;
const EmailField = () => <Input labelText={'Email'} type={'email'} />;
const PhoneField = () => <Input labelText={'Phone'} type={'phone'} />;

const Wrapper = styled.div`
  background: red;
  display: grid;
  grid-gap: 1rem;
  padding: 1rem 0;
  justify-content: center;
`;

const Contact = () => (
  <Wrapper>
    <NameField />
    <EmailField />
    <PhoneField />
  </Wrapper>
);

export default Contact;
