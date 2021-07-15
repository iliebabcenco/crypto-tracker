import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import fetchCurrencies from '../api/fetcher';

const CurrenciesContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrencies());
  }, []);
  const currencies = useSelector((state) => state);
  console.log(currencies);
  return (

    <div>
      <h3>Name</h3>
      <p>Description</p>
    </div>
  );
};

export default CurrenciesContainer;
