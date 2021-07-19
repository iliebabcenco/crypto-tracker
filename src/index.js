import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import App from './components/App';
import reducer from './reducers/currencyReducer';

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>

    <Provider store={store}>

      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

export default store;
