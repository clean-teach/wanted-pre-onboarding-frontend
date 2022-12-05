import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import myLogger from './middlewares/myLogger';
import rootReducer from './modules';
import ReduxThunk from 'redux-thunk';
import { RouterProvider } from 'react-router-dom';
import router from './Router';

const store = createStore(rootReducer, applyMiddleware(ReduxThunk, myLogger));

// console.log(store.getState());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
);
