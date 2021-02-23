import { applyMiddleware, createStore, compose } from 'redux';
import { persistStore, persistReducer, createTransform } from 'redux-persist';
import logger from 'redux-logger';
import rootReducer from './reducers/rootReducer';
import { parse, stringify } from 'flatted';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga'
import mySaga from './sagas';

// this will allow a much agile store in the localstorage so the application won't collapse
export const transformCircular = createTransform(
  (inboundState, key) => stringify(inboundState),
  (outboundState, key) => parse(outboundState),
)
const persistConfig = {
  key: 'root',
  storage,
  transforms: [transformCircular]
};
const sagaMiddleware = createSagaMiddleware();

// const composeEnhancers = compose;
  
const persistedReducer = persistReducer(persistConfig, rootReducer)
const createAppStore = (): any => {

  const Store = createStore(
    persistedReducer,
    applyMiddleware(sagaMiddleware)// ,
    // composeEnhancers(
    // uncomment to get store log, it may colapse your browser
    // applyMiddleware(logger)
    // )
  );
  sagaMiddleware.run(mySaga);
  return Store;
}
export const store = createAppStore();
export const persistor = persistStore(store);
