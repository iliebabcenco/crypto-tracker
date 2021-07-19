import fetchCurrencies from '../../api/fetcher';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('setup store action', () => {
  let store;
  beforeEach(() => {
    store = mockStore({ currencies: [] });
  });

  describe('when fetch data', () => {
    it('should be correct actions for fetching currencies', () =>
      store
        .dispatch(fetchCurrencies(
        ))
        .then(() => expect(store.getActions()).toContainEqual({ "type": "FETCH_CURRENCY_BEGIN" }, { "currencies": [Array], "type": "FETCH_CURRENCY_SUCCESS" })));
  })

  it('gets the array of curriencies with a legth = 100', () =>
    store
      .dispatch(fetchCurrencies(
        100
      ))
      .then(() => expect((store.getActions())).toContainEqual({ "type": "FETCH_CURRENCY_BEGIN" }, { "currencies": [Array], "type": "FETCH_CURRENCY_SUCCESS" })));
})
