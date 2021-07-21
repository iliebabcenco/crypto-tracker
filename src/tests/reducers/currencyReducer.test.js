import {
  CHANGE_FILTER, FETCH_CURRENCY_BEGIN, FETCH_CURRENCY_FAILURE,
  FETCH_CURRENCY_SUCCESS, SHOW_CURRENCY,
} from '../../actions/currencyActions';
import currencyReducer from '../../reducers/currencyReducer';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

describe('currencies currencyReducer', () => {
  it('returns the initial state', () => {
    expect(currencyReducer(undefined, {})).toEqual(initialState);
  });

  it('handles begining of the fetch', () => {
    expect(currencyReducer(initialState, { type: FETCH_CURRENCY_BEGIN })).toEqual({
      ...initialState,
      loading: true,
      error: null,
    });
  });

  it('handles succeeded fetch', () => {
    expect(currencyReducer(initialState, {
      type: FETCH_CURRENCY_SUCCESS,
      currencies: [],
    })).toEqual({
      ...initialState,
      loading: false,
      items: [],
    });
  });

  it('handles fetch failure', () => {
    expect(currencyReducer(initialState, {
      type: FETCH_CURRENCY_FAILURE,
      currencies:
        [],
      payload: { error: null },
    })).toEqual({
      ...initialState,
      error: null,
      loading: false,
      items: [],
    });
  });

  it('handles show currency action', () => {
    expect(currencyReducer(initialState, {
      type: SHOW_CURRENCY, items: [], currency: { name: 'test-currency' }, pattern: 'go',
    })).toEqual({
      ...initialState,
      loading: false,
      items: undefined,
      currency: { name: 'test-currency' },
      pattern: null,
    });
  });

  it('handles filter action', () => {
    expect(currencyReducer(initialState, { type: CHANGE_FILTER, filter: 'gGo' })).toEqual({
      ...initialState,
      error: null,
      items: [],
      loading: false,
      pattern: 'ggo',
    });
  });

  it('handles incorrect types of actions', () => {
    expect(currencyReducer(initialState, { type: 'try default' })).toEqual({
      ...initialState,
    });
  });
});
