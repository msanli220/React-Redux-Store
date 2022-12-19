import { combineReducers } from 'redux';

// App
import AppReduxStore from './AppReduxStore';
import AuthPageStore from './Page/Auth/AuthPageStore';
// Ayarlar

export default combineReducers({
    // App
    AppReduxStore,
    AuthPageStore
});
