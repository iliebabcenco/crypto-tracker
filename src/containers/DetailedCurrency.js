import React from 'react';
import { useSelector } from 'react-redux';

const DetailedCurrency = () => {
  const currency = useSelector((state) => state.currency);
  return (
    <div>
      <h3>{currency.name}</h3>
      <p>Description from detailed</p>
      {currency.name}
    </div>
  );
};

export default DetailedCurrency;
