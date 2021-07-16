import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import '../styles/Currency.css';

const Currency = ({ currency }) => {
  const dispatch = useDispatch();
  const handleClickGotoCurrency = (currency) => dispatch({ type: 'SHOW_CURRENCY', currency });
  return (
    <div>
      <img src={currency.logo_url} alt="logo" className="cur-logo" />
      <Link
        to={{
          pathname: '/currency',
          state: {
            currency,
          },
        }}
        key={currency.name}
        onClick={() => handleClickGotoCurrency(currency)}
      >
        {currency.name}
        (
        {currency.symbol}
        )
      </Link>
    </div>
  );
};

Currency.propTypes = {
  currency: PropTypes.shape({
    name: PropTypes.string.isRequired,
    logo_url: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
  }).isRequired,
};

export default Currency;
