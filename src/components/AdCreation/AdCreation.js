import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import Contact from './Contact';
import Location from './Location';
import PropertyDetails from './PropertyDetails';
import AddOns from './AddOns';
import Payment from './Payment';
import Preview from './Preview';
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
      <Route path={'/location'} component={Location} />
      <Route path={'/property-details'} component={PropertyDetails} />
      <Route path={'/add-ons'} component={AddOns} />
      <Route path={'/preview'} component={Preview} />
      <Route path={'/payment'} component={Payment} />
    </Switch>
  </Wrapper>
);

export default AdCreation;
