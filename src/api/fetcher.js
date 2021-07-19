import { fetchCurrencyBegin, fetchCurrencySuccess, fetchCurrencyFailure } from '../actions/currencyActions';

const handleErrors = (response) => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
};

const fetchCurrencies = (counter = '20') => (dispatch) => {
  dispatch(fetchCurrencyBegin());
  return fetch(`https://api.nomics.com/v1/currencies/ticker?key=d342477f6c256c4ee09e02f077b7cfdc56a55fdb&interval=1d,30d&convert=EUR&per-page=${counter}&page=1`)
    .then(handleErrors)
    .then((res) => res.json())
    .then((json) => {
      dispatch(fetchCurrencySuccess(json));
      return json;
    })
    .catch((error) => dispatch(fetchCurrencyFailure(error)));
};

export default fetchCurrencies;
