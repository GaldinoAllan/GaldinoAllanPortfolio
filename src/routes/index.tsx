import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Portfolio from '../pages/Portfolio';
import Medical from '../pages/Medical';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Portfolio} />
    <Route path="/medical" exact component={Medical} />
  </Switch>
);

export default Routes;
