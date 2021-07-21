export const FETCH_CURRENCY_BEGIN = 'FETCH_CURRENCY_BEGIN';
export const FETCH_CURRENCY_SUCCESS = 'FETCH_CURRENCY_SUCCESS';
export const FETCH_CURRENCY_FAILURE = 'FETCH_CURRENCY_FAILURE';
export const SHOW_CURRENCY = 'SHOW_CURRENCY';
export const CHANGE_FILTER = 'CHANGE_FILTER';

export const fetchCurrencyBegin = () => ({
  type: FETCH_CURRENCY_BEGIN,
});

export const fetchCurrencySuccess = (currencies) => ({
  type: FETCH_CURRENCY_SUCCESS,
  currencies,
});

export const fetchCurrencyFailure = (error) => ({
  type: FETCH_CURRENCY_FAILURE,
  payload: { error },
});

export const showCurrency = (currency) => ({
  type: SHOW_CURRENCY,
  currency,
});

export const changeFilter = (filter) => ({
  type: CHANGE_FILTER,
  filter,
});
