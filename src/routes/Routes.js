import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CurrenciesContainer from '../containers/CurrenciesContainer';
import fetchCurrencies from '../api/fetcher';
import DetailedCurrency from '../containers/DetailedCurrency';

const Routes = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrencies());
  }, []);
  const currencies = useSelector((state) => state);
  console.log(currencies);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={CurrenciesContainer} />
        <Route exact path="/currency" component={DetailedCurrency} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
