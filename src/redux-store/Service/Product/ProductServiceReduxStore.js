import { combineReducers } from 'redux';
import BaseReduxStore from '../../BaseReduxStore';

const serviceName = "PROD";

function ProductServiceReduxStore( pageName ) {
    const reduxStorages = new BaseReduxStore(pageName, serviceName);

    return combineReducers({
        ...reduxStorages.GET(),
        ...reduxStorages.MANAGEMENT(),
        ...reduxStorages.POST(),
        ...reduxStorages.PATCH(),
        ...reduxStorages.DELETE(),
    
    });
}

export default ProductServiceReduxStore;
