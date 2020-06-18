import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import preLoaderMiddlewares from '../middlewares/preLoaderMiddlewares';

import rootReducer from '../reducers/index';

const enhancers = composeWithDevTools(
    applyMiddleware(
        preLoaderMiddlewares,
    ),
);

const store = createStore(
    rootReducer,
    enhancers,
);

export default store;