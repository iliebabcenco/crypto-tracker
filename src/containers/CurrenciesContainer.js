import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import fetchCurrencies from '../api/fetcher';
import Currency from '../components/Currency';

const CurrenciesContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrencies());
  }, []);
  const currencies = useSelector((state) => state.items);
  console.log(currencies);

  return (

    <div>
      <h3>Name</h3>
      <p>Description</p>
      {currencies.map((currency) => (
        <Currency key={currency.name} currency={currency} />
      ))}
    </div>
  );
};

export default CurrenciesContainer;
