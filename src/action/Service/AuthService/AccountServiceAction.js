import ActionBase from '../../ActionBase';
import AccountService from '../../../service/Account/AccountService';
import {
    GET,
    SIGNUP,
    SIGNIN,
    DELETE,
    POST,
    PATCH,
    DETAILS,
    MANAGEMENT,
    CHANGE_PASSWORD,
} from '../../../enum/RequestMethodEnum';
import { CLEAN, FAIL, FETCHING, SUCCESS } from '../../../enum/ResponseStatusEnum';


export default class AccountServiceAction extends ActionBase {

    constructor ( dispatch, pageName ) {
        const service = new AccountService();
        const serviceName = "ACCOUNT";
        super( dispatch, service, serviceName, pageName );
    }

    /**
     * User logout
     */
    async logOut () {
        await this.signInClean();
      
    }



    /**
     * Sign-up action
     * @param params { Object|null }
     * @param params.sourcePath { string|null }
     */
    async signUp ( params ) {
        this.dispatch([{ type: `${this.pageName}${this.serviceName}${SIGNUP}${FETCHING}` }]);
        this._run( this.service.signUp.bind(this.service), Object.assign({}, params, {args:{...params.args, actionType: SIGNUP}}) );
    }

    /**
     * Sign-up action clean
     */
    async signUpClean () {
        this.dispatch([{ type: `${this.pageName}${this.serviceName}${SIGNUP}${CLEAN}` }]);
    }

    /**
     * Sign-in action
     * @param params { Object|null }
     * @param params.sourcePath { string|null }
     */
    async signIn ( params ) {
        this.dispatch([ { type: `${this.pageName}${this.serviceName}${SIGNIN}${FETCHING}` } ]);
        this._run( this.service.signIn.bind(this.service), Object.assign({}, params, {args:{...params.args, actionType: SIGNIN}}) );
    }

    /**
     * Sign-in action clean
     */
    async signInClean () {
        this.dispatch([{ type: `${this.pageName}${this.serviceName}${SIGNIN}${CLEAN}` }]);
    }

    /**
     * Change Password action
     * @param params { Object|null }
     * @param params.sourcePath { string|null }
     */
    async changePassword ( params ) {
        this.dispatch([{ type: `${this.pageName}${this.serviceName}${CHANGE_PASSWORD}${FETCHING}` }]);
        this._run( this.service.changePassword.bind(this.service), Object.assign({}, params, {args:{...params.args, actionType: CHANGE_PASSWORD}}) );
    }

    /**
     * Sign-up action clean
     */
    async changePasswordClean () {
        this.dispatch([{ type: `${this.pageName}${this.serviceName}${CHANGE_PASSWORD}${CLEAN}` }]);
    }


    callback200(response, args) {
        super.callback200(response, args);

        if ( args.actionType === SIGNIN ) {
            this.dispatch([
                {
                    type: `${this.pageName}${this.serviceName}${SIGNIN}${SUCCESS}`,
                    payload: response.value.token
                }
            ]);
        }  else if ( args.actionType === SIGNUP ) {
            this.dispatch([
                {
                    type: `${this.pageName}${this.serviceName}${SIGNUP}${SUCCESS}`,
                    payload: response.value.token
                }
            ]);
        } else if ( args.actionType === GET ) {
            this.dispatch([
                {
                    type: `${this.pageName}${this.serviceName}${GET}${SUCCESS}`,
                    payload: response.value
                }
            ]);
        }
        else if ( args.actionType === POST ) {
            this.dispatch([
                {
                    type: `${this.pageName}${this.serviceName}${POST}${SUCCESS}`,
                    payload: response.value
                }
            ]);
        }
        else if ( args.actionType === PATCH ) {
            this.dispatch([
                {
                    type: `${this.pageName}${this.serviceName}${PATCH}${SUCCESS}`,
                    payload: response.value
                }
            ]);
        }
        else if ( args.actionType === DELETE ) {
            this.dispatch([
                {
                    type: `${this.pageName}${this.serviceName}${DELETE}${SUCCESS}`,
                    payload: response.value
                }
            ]);
        }
        else if ( args.actionType === MANAGEMENT ) {
            this.dispatch([
                {
                    type: `${this.pageName}${this.serviceName}${MANAGEMENT}${SUCCESS}`,
                    payload: response.value
                }
            ]);
        } else if ( args.actionType === CHANGE_PASSWORD ) {
            this.dispatch([
                {
                    type: `${this.pageName}${this.serviceName}${CHANGE_PASSWORD}${SUCCESS}`,
                    payload: response.value
                }
            ]);
        }
    }

    callback401(response, args) {
        super.callback401(response, args);

        if ( args.actionType === SIGNIN ) {
            this.dispatch([
                {
                    type: `${this.pageName}${this.serviceName}${SIGNIN}${FAIL}`,
                    payload: response
                }
            ]);
        } else if ( args.actionType === SIGNUP ) {
            this.dispatch([
                {
                    type: `${this.pageName}${this.serviceName}${SIGNUP}${FAIL}`,
                    payload: null
                }
            ]);
        }
        else if ( args.actionType === DELETE ) {
            this.dispatch([
                {
                    type: `${this.pageName}${this.serviceName}${DELETE}${FAIL}`,
                    payload: null
                }
            ]);
        }
        else if ( args.actionType === POST ) {
            this.dispatch([
                {
                    type: `${this.pageName}${this.serviceName}${POST}${FAIL}`,
                    payload: null
                }
            ]);
        }
        else if ( args.actionType === PATCH ) {
            this.dispatch([
                {
                    type: `${this.pageName}${this.serviceName}${PATCH}${FAIL}`,
                    payload: null
                }
            ]);
        }
        else if ( args.actionType === GET ) {
            this.dispatch([
                {
                    type: `${this.pageName}${this.serviceName}${GET}${FAIL}`,
                    payload: null
                }
            ]);
        }
        else if ( args.actionType === DETAILS ) {
            this.dispatch([
                {
                    type: `${this.pageName}${this.serviceName}${DETAILS}${FAIL}`,
                    payload: null
                }
            ]);
        }
        else if ( args.actionType === MANAGEMENT ) {
            this.dispatch([
                {
                    type: `${this.pageName}${this.serviceName}${MANAGEMENT}${FAIL}`,
                    payload: null
                }
            ]);
        } else if ( args.actionType === CHANGE_PASSWORD ) {
            this.dispatch([
                {
                    type: `${this.pageName}${this.serviceName}${CHANGE_PASSWORD}${FAIL}`,
                    payload: response
                }
            ]);
        }
    }

    callback400(response, args) {
        super.callback400(response, args);

          if ( args.actionType === SIGNIN ) {
            this.dispatch([
                {
                    type: `${this.pageName}${this.serviceName}${SIGNIN}${FAIL}`,
                    payload: response
                }
            ]);
        } else if ( args.actionType === SIGNUP ) {
            this.dispatch([
                {
                    type: `${this.pageName}${this.serviceName}${SIGNUP}${FAIL}`,
                    payload: null
                }
            ]);
        } else if ( args.actionType === GET ) {
            this.dispatch([
                {
                    type: `${this.pageName}${this.serviceName}${GET}${FAIL}`,
                    payload: response.value
                }
            ]);
        }
        else if ( args.actionType === DELETE ) {
            this.dispatch([
                {
                    type: `${this.pageName}${this.serviceName}${DELETE}${FAIL}`,
                    payload: response
                }
            ]);
        }
        else if ( args.actionType === PATCH ) {
            this.dispatch([
                {
                    type: `${this.pageName}${this.serviceName}${PATCH}${FAIL}`,
                    payload: response
                }
            ]);
        }
        else if ( args.actionType === POST ) {
            this.dispatch([
                {
                    type: `${this.pageName}${this.serviceName}${POST}${FAIL}`,
                    payload: response
                }
            ]);
        }
        else if ( args.actionType === DETAILS ) {
            this.dispatch([
                {
                    type: `${this.pageName}${this.serviceName}${DETAILS}${FAIL}`,
                    payload: response.value
                }
            ]);
        }
        else if ( args.actionType === MANAGEMENT ) {
            this.dispatch([
                {
                    type: `${this.pageName}${this.serviceName}${MANAGEMENT}${FAIL}`,
                    payload: response.value
                }
            ]);
        } else if ( args.actionType === CHANGE_PASSWORD ) {
            this.dispatch([
                {
                    type: `${this.pageName}${this.serviceName}${CHANGE_PASSWORD}${FAIL}`,
                    payload: response
                }
            ]);
        }

    }

}