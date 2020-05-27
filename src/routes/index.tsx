import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Portfolio from '../pages/Portfolio';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Portfolio} />
  </Switch>
);

export default Routes;
