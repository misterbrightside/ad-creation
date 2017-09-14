import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';

const NavWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StepWizard = () => (
  <NavWrapper>
    <Link to={'/contact'}>Contact</Link>
    <Link to={'/location'}>Location</Link>
    <Link to={'/property-details'}>Property Details</Link>
    <Link to={'/preview'}>Preview</Link>
    <Link to={'/add-ons'}>Add ons</Link>
    <Link to={'/payment'}>Payment</Link>
  </NavWrapper>
);

export default StepWizard;
