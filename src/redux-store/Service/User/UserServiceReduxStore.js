import { combineReducers } from 'redux';
import BaseReduxStore from '../../BaseReduxStore';

const serviceName = "US";

function UserServiceReduxStore( pageName ) {
    const reduxStorages = new BaseReduxStore(pageName, serviceName);

    return combineReducers({
        ...reduxStorages.GET(),
        ...reduxStorages.MANAGEMENT(),
        ...reduxStorages.POST(),
        ...reduxStorages.PATCH(),
        ...reduxStorages.DELETE(),
    
    });
}

export default UserServiceReduxStore;
