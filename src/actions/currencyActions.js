export const FETCH_CURRENCY_BEGIN = 'FETCH_CURRENCY_BEGIN';
export const FETCH_CURRENCY_SUCCESS = 'FETCH_CURRENCY_SUCCESS';
export const FETCH_CURRENCY_FAILURE = 'FETCH_CURRENCY_FAILURE';

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
