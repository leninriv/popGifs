import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer';

const initialtate = {};
const midelware = [thunk];
const store = createStore(
    rootReducer,
    initialtate,
    compose(
        applyMiddleware(...midelware),
        window.devToolsExtension ? window.devToolsExtension : f => f
    )
)
export default store
