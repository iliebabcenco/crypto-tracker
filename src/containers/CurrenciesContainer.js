import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import fetchCurrencies from '../api/fetcher';
import Currency from '../components/Currency';
import DetailedCurrency from './DetailedCurrency';

const CurrenciesContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrencies());
  }, [DetailedCurrency]);
  const currencies = useSelector((state) => state.items);
  return (

    <div>
      <h3>Name</h3>
      <p>Description</p>
      {currencies ? currencies.map((currency) => (
        <Currency key={currency.name} currency={currency} />
      )) : 'Please wait'}
    </div>
  );
};

export default CurrenciesContainer;
