import {
  FETCH_CURRENCY_BEGIN,
  FETCH_CURRENCY_SUCCESS,
  FETCH_CURRENCY_FAILURE,
  SHOW_CURRENCY,
  CHANGE_FILTER,
} from '../actions/currencyActions';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

export default function currencyReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CURRENCY_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_CURRENCY_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.currencies,
      };

    case FETCH_CURRENCY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: [],
      };
    case SHOW_CURRENCY:
      return {
        ...state,
        loading: false,
        items: action.currencies,
        currency: action.currency,
        pattern: null,
      };

    case CHANGE_FILTER: {
      return {
        ...state,
        pattern: action.filter.toLowerCase(),
      };
    }
    default: {
      return state;
    }
  }
}
