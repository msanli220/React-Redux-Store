import { applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

// redux multi dispatch
function multi ({dispatch}) {
    return next => action =>
        Array.isArray(action)
            ? action.filter(Boolean).map(dispatch)
            : next(action)
}

export default composeWithDevTools(applyMiddleware(thunk, multi));
