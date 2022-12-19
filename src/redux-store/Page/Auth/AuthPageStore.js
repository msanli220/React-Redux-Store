import { combineReducers } from 'redux';

// Store
import AccountServiceStore from '../../Service/Account/AccountServiceReduxStore';

const pageName = "AUTH";


export default combineReducers({
    AccountServiceStore: AccountServiceStore(pageName),
    
});
