import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';
import CurrenciesContainer from '../containers/CurrenciesContainer';
import DetailedCurrency from '../containers/DetailedCurrency';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={CurrenciesContainer} />
      <Route exact path="/currency" component={DetailedCurrency} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
