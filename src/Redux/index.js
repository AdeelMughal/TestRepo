import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

import Reducers from './Reducers';
import rootSaga from './ReduxSaga';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
const store = createStore(Reducers, {}, applyMiddleware(sagaMiddleware));
export default store;

// then run the saga
sagaMiddleware.run(rootSaga);
