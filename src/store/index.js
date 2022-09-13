import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleWare from 'redux-saga';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMiddleware = createSagaMiddleWare();

const enhancer = applyMiddleware(sagaMiddleware)

const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(rootSaga)

export default store;