import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import fetchCurrencies from '../api/fetcher';
import Currency from '../components/Currency';

const CurrenciesContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrencies());
  }, []);
  let currencies = useSelector((state) => state.items);
  const filterPattern = useSelector((state) => state.pattern);
  if (filterPattern && currencies) {
    currencies = currencies.filter((c) => c.name.toLowerCase().startsWith(filterPattern)
      || c.symbol.toLowerCase().startsWith(filterPattern));
  }
  return (

    <div className="currencies-container">
      <h4>Top currencies: </h4>
      {currencies ? currencies.map((currency) => (
        <Currency key={currency.name} currency={currency} />
      )) : 'Please wait'}
    </div>
  );
};

export default CurrenciesContainer;
