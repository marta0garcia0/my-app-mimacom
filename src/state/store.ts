import { applyMiddleware, createStore, compose } from 'redux';
import { persistStore, persistReducer, createTransform } from 'redux-persist';
import logger from 'redux-logger';
import rootReducer from './reducers/rootReducer';
import { parse, stringify } from 'flatted';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

// this will allow a much agile store in the localstorage so the application won't collapse
export const transformCircular = createTransform(
  (inboundState) => stringify(inboundState),
  (outboundState) => parse(outboundState),
);

const persistConfig = {
  key: 'root',
  storage: storage,
  transforms: [transformCircular]
};

const composeEnhancers = compose;

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer,
  composeEnhancers(
    applyMiddleware(thunk),
    // uncomment to get store log, it may colapse your browser
    applyMiddleware(logger)
  )
);
export const persistor = persistStore(store);
