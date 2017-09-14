import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Contact from './Contact';
import styled from 'styled-components';
import StepWizard from './StepWizard';

const Wrapper = styled.div`
  background: #e8effc;
  min-height: 100vh;
`;

const AdCreation = () => (
  <Wrapper>
    <StepWizard />
    <Switch>
      <Route path={'/contact'} component={Contact} />
      <Route path={'/location'} component={Contact} />
      <Route path={'/property-details'} component={Contact} />
      <Route path={'/add-ons'} component={Contact} />
      <Route path={'/preview'} component={Contact} />
      <Route path={'/payment'} component={Contact} />
    </Switch>
  </Wrapper>
);

export default AdCreation;
