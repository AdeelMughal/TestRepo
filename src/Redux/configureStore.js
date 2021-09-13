// import {createStore, applyMiddleware} from 'redux';
// import ReduxThunk from 'redux-thunk';
// import Reducers from './Reducers/index';
// const store = createStore(Reducers, {}, applyMiddleware(ReduxThunk));
// export default store;

import {createStore, applyMiddleware} from 'redux';
import Reducers from './Reducers';
import thunk from 'redux-thunk';

export const configureStore = () => {
  let store = createStore(Reducers, {}, applyMiddleware(thunk));
  return store;
};

export const store = configureStore();
