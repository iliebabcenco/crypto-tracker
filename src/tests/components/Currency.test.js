import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Currency from '../../containers/Currency';
import store from '../../store/store';
import Navbar from '../../components/Navbar';
import '@testing-library/jest-dom';

afterEach(cleanup);

const currency = {
  id: 'BTC',
  currency: 'BTC',
  symbol: 'BTC',
  name: 'Bitcoin',
  logo_url: 'https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/btc.svg',
  status: 'active',
  price: '25266.19061028',
  price_date: '2021-07-20T00:00:00Z',
  price_timestamp: '2021-07-20T08:42:00Z',
  circulating_supply: '18761506',
  max_supply: '21000000',
  market_cap: '474031786732',
  market_cap_dominance: '0.4262',
  num_exchanges: '385',
  num_pairs: '61017',
  num_pairs_unmapped: '5205',
  first_candle: '2011-08-18T00:00:00Z',
  first_trade: '2011-08-18T00:00:00Z',
  first_order_book: '2017-01-06T00:00:00Z',
  rank: '1',
  rank_delta: '0',
  high: '53388.87656362',
  high_timestamp: '2021-04-13T00:00:00Z',
  '1d': {
    volume: '22685513999.97',
    price_change: '-1457.58575551',
    price_change_pct: '-0.0545',
    volume_change: '6494930504.57',
    volume_change_pct: '0.4012',
    market_cap_change: '-27319940463.82',
    market_cap_change_pct: '-0.0545',
  },
  '30d': {
    volume: '903044940789.80',
    price_change: '-4699.05169091',
    price_change_pct: '-0.1568',
    volume_change: '-410992150281.06',
    volume_change_pct: '-0.3128',
    market_cap_change: '-87490634405.37',
    market_cap_change_pct: '-0.1558',
  },
};

it('should take a snapshot', () => {
  const { asFragment } = render(
    <Provider store={store}>
      <Router>
        <Currency currency={currency} />
      </Router>
    </Provider>,
  );
  expect(asFragment(
    <Provider store={store}>
      <Router>
        <Currency currency={currency} />
      </Router>
    </Provider>,
  )).toMatchSnapshot();
});

it('displays correct first child', () => {
  const { container } = render(
    <Provider store={store}>
      <Router>
        <Currency currency={currency} />
      </Router>
    </Provider>,
  );
  expect(container.firstChild).toMatchSnapshot();
});

it('negative check', () => {
  render(<Provider store={store}><Navbar /></Provider>);
  expect(screen.queryByText('Let’s do some math!')).not.toBeInTheDocument();
});
