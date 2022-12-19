import { combineReducers } from 'redux';
import BaseReduxStore from '../../BaseReduxStore';

const serviceName = "ACCOUNT";

function AccountServiceReduxStore( pageName ) {
    const reduxStorages = new BaseReduxStore(pageName, serviceName);

    return combineReducers({
        ...reduxStorages.GET(),
        ...reduxStorages.SIGNIN(),
        ...reduxStorages.SIGNUP(),
    

        ...reduxStorages.MANAGEMENT(),
        ...reduxStorages.POST(),
        ...reduxStorages.PATCH(),
        ...reduxStorages.DELETE(),
    
    });
}

export default AccountServiceReduxStore;
