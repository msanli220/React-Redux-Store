import { combineReducers } from 'redux';

// App
import AppReduxStore from './AppReduxStore';
import AuthPageStore from './Page/Auth/AuthPageStore';
import ProductPageStore from './Page/Product/ProductPageStore';
import UserPageStore from './Page/User/UserPageStore';
// Ayarlar

export default combineReducers({
    // App
    AppReduxStore,
    AuthPageStore,
    ProductPageStore,
    UserPageStore
});
