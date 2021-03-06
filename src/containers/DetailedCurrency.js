import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../styles/DetailedCurrency.css';
import CurrenciesContainer from './CurrenciesContainer';

const DetailedCurrency = () => {
  const currency = useSelector((state) => state.currency);
  const pattern = useSelector((state) => state.pattern);
  const upDown = (element) => {
    if (element.split('').includes('-')) {
      return <i className="fas fa-sort-down" />;
    }
    return <i className="fas fa-caret-up" />;
  };
  if (!pattern && currency) {
    return (
      <div className="details-div">
        <Link
          to="/"
        >
          <span className="goback">
            <i className="fas fa-arrow-left" />
            {' '}
            Back
          </span>
        </Link>
        <img className="currency-logo" src={currency.logo_url} alt="currency-logo" />
        <h3>{currency.name}</h3>
        <hr />
        <h3>Common information:</h3>
        <ul>
          <li>
            Symbol
            {': '}
            {currency.symbol}
          </li>
          <li>
            Rank
            {': '}
            {currency.rank}
          </li>
          <li>
            Status
            {': '}
            {currency.status}
          </li>
          <li>
            Price
            {': '}
            {currency.price}
            {' '}
            &euro;
          </li>
          <li>
            Market cap
            {': '}
            {currency.market_cap}
            {' '}
            &euro;
            (
            {currency.market_cap_dominance * 100}
            {' %'}
            )
          </li>
          <li>
            First candle
            {': '}
            {currency.first_candle}
          </li>
          <li>
            First order book
            {': '}
            {currency.first_order_book}
          </li>
          <li>
            First trade
            {': '}
            {currency.first_trade}
          </li>
          <li>
            Price pick
            {': '}
            {currency.high}
            {' On: '}
            {currency.high_timestamp}
          </li>

        </ul>
        <h3>Last day information</h3>
        <ul>
          <li>
            Price change
            {': '}
            {currency['1d'].price_change}

            {' '}
            &euro;
            (
            {currency['1d'].price_change_pct * 100}

            {' %'}

            )
            {' '}
            {' '}
            {upDown(currency['1d'].price_change)}
          </li>
          <li>
            Volume
            {': '}
            {currency['1d'].volume}
          </li>
          <li>
            Volume change
            {': '}
            {currency['1d'].volume_change}
            (
            {currency['1d'].volume_change_pct * 100}
            {' %'}
            )
            {' '}
            {upDown(currency['1d'].volume_change)}
          </li>
        </ul>
        <h3>Last 30 days information</h3>
        <ul>
          <li>
            Price change
            {': '}
            {currency['30d'].price_change}
            {' '}
            &euro;
            (
            {currency['30d'].price_change_pct * 100}
            {' %'}
            )
            {' '}
            {upDown(currency['30d'].price_change_pct)}
          </li>

          <li>
            Volume
            {': '}
            {currency['30d'].volume}

          </li>
          <li>
            Volume change
            {': '}
            {currency['30d'].volume_change}
            (
            {currency['30d'].volume_change_pct * 100}
            {' %'}
            )
            {' '}
            {upDown(currency['30d'].volume_change_pct)}
          </li>

        </ul>
      </div>
    );
  }
  return (
    <CurrenciesContainer />
  );
};

export default DetailedCurrency;
