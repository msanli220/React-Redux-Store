import { combineReducers } from 'redux';

// Store
import ProductServiceStore from '../../Service/Product/ProductServiceReduxStore';

const pageName = "PROD";


export default combineReducers({
    ProductServiceStore: ProductServiceStore(pageName),
    
});
