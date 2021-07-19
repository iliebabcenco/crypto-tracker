import fetchMock from 'jest-fetch-mock';
import fetchCurrencies from '../../api/fetcher';
import 'regenerator-runtime/runtime';

fetchMock.enableMocks();
beforeEach(() => {
  fetch.resetMocks();
});

describe('Fetch cryptocurrencies', () => {
  it('shouldn\'t be null', () => {
    expect(fetchCurrencies()).not.toBeNull();
  });

  test('should be an actions object', () => {
    new Promise(fetchCurrencies()).then((data) => {
      expect(typeof data).toBe('object');
    });
  });
});
