import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from "redux-saga";
import rootReducer from './reducers/rootReducer';
import sagas from './sagas'
import { logger } from 'redux-logger';
const sagaMiddleware = createSagaMiddleware();
export default function configureStore(initialState={}) {
    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(sagaMiddleware,logger)
    );
    sagaMiddleware.run(sagas);
    return store

}
