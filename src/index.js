import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './exercise';
import rootReducer from './modules';
import { legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(
  rootReducer, 
  // 리덕스 모듈 설치없이 디버깅 가능
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store = {store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);