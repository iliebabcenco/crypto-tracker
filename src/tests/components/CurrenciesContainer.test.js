import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import CurrenciesContainer from '../../containers/CurrenciesContainer';
import store from '../../store/store';
import Navbar from '../../components/Navbar';
import '@testing-library/jest-dom';

afterEach(cleanup);

it('should take a snapshot', () => {
  const { asFragment } = render(<Provider store={store}><CurrenciesContainer /></Provider>);
  expect(asFragment(<Provider store={store}><CurrenciesContainer /></Provider>)).toMatchSnapshot();
});

it('displays correct first child', () => {
  const { container } = render(<Provider store={store}><CurrenciesContainer /></Provider>);
  expect(container.firstChild).toMatchSnapshot();
});

it('negative check', () => {
  render(<Provider store={store}><Navbar /></Provider>);
  expect(screen.queryByText('Let’s do some math!')).not.toBeInTheDocument();
});
