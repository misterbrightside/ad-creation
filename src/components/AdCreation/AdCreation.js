import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Contact from './Contact';

const StepWizard = () => (
  <nav>
    <Link to={'/contact'}>Contact</Link>
    <Link to={'/location'}>Location</Link>
    <Link to={'/property-details'}>Property Details</Link>
    <Link to={'/preview'}>Preview</Link>
    <Link to={'/add-ons'}>Add ons</Link>
    <Link to={'/payment'}>Payment</Link>
  </nav>
);

const AdCreation = () => (
  <div>
    <StepWizard />
    <Switch>
      <Route path={'/contact'} component={Contact} />
      <Route path={'/location'} component={Contact} />
      <Route path={'/property-details'} component={Contact} />
      <Route path={'/add-ons'} component={Contact} />
      <Route path={'/preview'} component={Contact} />
      <Route path={'/payment'} component={Contact} />
    </Switch>
  </div>
);

export default AdCreation;
