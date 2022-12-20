import { SUCCESS, FAIL, CLEAN, FETCHING} from '../enum/ResponseStatusEnum';
import {
    DELETE,
    DETAILS,
    GET,
    MANAGEMENT,
    PATCH,
    POST,
    SIGNUP,
    SIGNIN,
   } from '../enum/RequestMethodEnum';


const initState = {
    payload: [],
    isLoading: false
}
function BaseStore( pageName, serviceName, protocol ) {

    return function reducer(state = initState, action) {

        switch (action.type) {
            // Success
            case `${pageName}${serviceName}${protocol}${SUCCESS}`:
                
                return {
                    ...state,
                    payload: action.payload,
                    error: null,
                    isLoading: false
                };
            // Fail
            case `${pageName}${serviceName}${protocol}${FAIL}`:
                return {
                    ...state,
                    payload: null,
                    error: action.payload,
                    isLoading: false
                };
            // Clean
            case `${pageName}${serviceName}${protocol}${CLEAN}`:
                return {
                    ...state,
                    payload: null,
                    error: null,
                    isLoading: false
                };
            // Fetching
            case `${pageName}${serviceName}${protocol}${FETCHING}`:
                return {
                    ...state,
                    isLoading: true
                };
            default:
                return state;
        }

    }

}

function BaseStoreLogin( pageName, serviceName, protocol ) {
    console.log("BaseStoreLogin:::",pageName,serviceName,protocol)
    return function reducer(state = initState, action) {

        console.log(`${pageName}-${serviceName}-${protocol}-${SUCCESS}`);

        switch (action.type) {
            // Success
            case `${pageName}${serviceName}${protocol}${SUCCESS}`:
                localStorage.setItem("token", action.payload);
                return {
                    ...state,
                    payload: action.payload,
                    error: null,
                    isLoading: false
                };
            // Fail
            case `${pageName}${serviceName}${protocol}${FAIL}`:
                localStorage.clear();
                return {
                    ...state,
                    payload: null,
                    error: action.payload,
                    isLoading: false
                };
            // Clean
            case `${pageName}${serviceName}${protocol}${CLEAN}`:
                localStorage.clear();
                return {
                    ...state,
                    payload: null,
                    error: null,
                    isLoading: false
                };
            // Fetching
            case `${pageName}${serviceName}${protocol}${FETCHING}`:
                return {
                    ...state,
                    isLoading: true
                };
            default:
                return state;
        }

    }

}

function BaseStoreInfo( pageName, serviceName, protocol ) {

    return function reducer(state = initState, action) {

        console.log(`${pageName}-${serviceName}-${protocol}-${SUCCESS}`);

        switch (action.type) {
            // Success
            case `${pageName}${serviceName}${protocol}${SUCCESS}`:
                return {
                    ...state,
                    payload: action.payload,
                    error: null,
                    isLoading: false
                };
            // Fail
            case `${pageName}${serviceName}${protocol}${FAIL}`:
                localStorage.clear();
                return {
                    ...state,
                    payload: null,
                    error: action.payload,
                    isLoading: false
                };
            // Clean
            case `${pageName}${serviceName}${protocol}${CLEAN}`:
                localStorage.clear();
                return {
                    ...state,
                    payload: null,
                    error: null,
                    isLoading: false
                };
            // Fetching
            case `${pageName}${serviceName}${protocol}${FETCHING}`:
                return {
                    ...state,
                    isLoading: true
                };
            default:
                return state;
        }

    }

}

export default class BaseReduxStore {

    constructor(pageName, serviceName) {
        this.serviceName = serviceName;
        this.pageName = pageName;
    }

    GET() {
        return { list: BaseStore( this.pageName, this.serviceName, GET ) }
    }
  
    MANAGEMENT() {
        return { management: BaseStore( this.pageName,  this.serviceName, MANAGEMENT ) }
    }

    DETAILS() {
        return { details: BaseStore( this.pageName,  this.serviceName, DETAILS ) }
    }

    POST() {
        return { post: BaseStore( this.pageName,  this.serviceName, POST ) }
    }
    PATCH() {
        return { patch: BaseStore( this.pageName,  this.serviceName, PATCH ) }
    }

    DELETE() {
        return { delete: BaseStore( this.pageName,  this.serviceName, DELETE ) }
    }

    SIGNIN() {
        return { signIn: BaseStoreLogin( this.pageName,  this.serviceName, SIGNIN ) }
    }

    SIGNUP() {
        return { signUp: BaseStore( this.pageName,  this.serviceName, SIGNUP ) }
    }


 

}
