import { combineReducers } from 'redux';

// Store
import UserServiceStore from '../../Service/User/UserServiceReduxStore';

const pageName = "US";


export default combineReducers({
    UserServiceStore: UserServiceStore(pageName),
    
});
