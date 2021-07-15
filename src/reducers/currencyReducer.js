import {
  FETCH_CURRENCY_BEGIN,
  FETCH_CURRENCY_SUCCESS,
  FETCH_CURRENCY_FAILURE,
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

    default: {
      return state;
    }
  }
}
