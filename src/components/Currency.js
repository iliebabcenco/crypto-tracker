import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import DetailedCurrency from '../containers/DetailedCurrency';

const Currency = ({ currency }) => {
  const dispatch = useDispatch();
  const handleClickGotoCurrency = (currency) => dispatch({ type: 'SHOW_CURRENCY', currency });
  return (
    <Link
      to={{
        pathname: '/currency',
        state: {
          currency,
        },
      }}
      key={currency.name}
      onClick={() => handleClickGotoCurrency(currency)}
    // component={DetailedCurrency}
    >
      {currency.name}
    </Link>
  );
};

Currency.propTypes = {
  currency: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default Currency;
