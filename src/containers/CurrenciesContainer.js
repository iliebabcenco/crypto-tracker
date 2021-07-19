import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import fetchCurrencies from '../api/fetcher';
import Currency from '../components/Currency';
import '../styles/CurrenciesContainer.css';

const CurrenciesContainer = () => {
  const [counter, setCounter] = useState('100');
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
  const handleClickButton = () => {
    if (counter === '20') {
      setCounter('100');

      dispatch(fetchCurrencies(counter));
    } else {
      setCounter('20');
      dispatch(fetchCurrencies(counter));
    }
  };
  let oppositeCounter = '100';
  if (counter === '20') {
    oppositeCounter = '100';
  } else {
    oppositeCounter = '20';
  }
  return (

    <div className="currencies-container">
      <div className="top-container-div">
        <h3>
          Top
          {' '}
          {oppositeCounter}
          {' '}
          cryptocurrencies:
        </h3>
        <button type="button" className="top-btn" onClick={handleClickButton}>
          <i className="fas fa-arrow-right" />
          {' '}
          Show top
          {' '}
          {counter}
        </button>
      </div>

      {currencies ? currencies.map((currency) => (
        <Currency key={currency.name} currency={currency} />
      )) : 'Please wait'}
    </div>
  );
};

export default CurrenciesContainer;
