import ActionBase from '../../../ActionBase';
import AccountService from '../../../../service/Account/AccountService';
import CoreDefault from '../../../../core/CoreDefault';
import {
    SIGNIN_FETCH_SUCCESS,
    SIGNIN_FETCH_FAIL,
    SIGNIN_FETCH_CLEAN,
    SIGNIN_FETCHING,
} from '../../../../action-type/AccountActionType';
import EndpointRoute from '../../../../core/EndpointRoute';


export default class UserAction extends ActionBase {

    constructor( dispatch ) {
        const userService = new AccountService({
            sourcePath: EndpointRoute.account.prefix
        })

        super( dispatch, userService );
    }

    /**
     *
     * @param params { Object|null }
     * @param params.args.dispatchTypes { Object }
     * @param params.args.dispatchTypes.200 { Number|null }
     * @param params.args.dispatchTypes.201 { Number|null }
     * @param params.args.dispatchTypes.400 { Number|null }
     * @param params.args.dispatchTypes.404 { Number|null }
     * @param params.args.dispatchTypes.406 { Number|null }
     * @param params.args.dispatchTypes.other { Number|null }
     * @param params.args.dispatchTypes.error { Number|null }
     */
    async logOut( params ) {
        this.dispatch([
            {
                type: SIGNIN_FETCH_CLEAN
            },
            {
                type: USER_INFO_FETCH_CLEAN
            }
        ]);
    }

    /**
     *
     * @param params { Object|null }
     * @param params.sourcePath { string|null }
     * @param params.args { Object }
     * @param params.args.dispatchTypes { Object }
     * @param params.args.dispatchTypes.200 { Number|null }
     * @param params.args.dispatchTypes.201 { Number|null }
     * @param params.args.dispatchTypes.400 { Number|null }
     * @param params.args.dispatchTypes.404 { Number|null }
     * @param params.args.dispatchTypes.406 { Number|null }
     * @param params.args.dispatchTypes.other { Number|null }
     * @param params.args.dispatchTypes.error { Number|null }
     */
    async signIn( params ) {
        this.dispatch([
            {
                type: SIGNIN_FETCHING
            }
        ]);
        this._run( this.service.signIn.bind(this.service), Object.assign({}, params, {args:{...params.args, method:'POST'}}) );
    }

    /**
     *
     * @param params { Object|null }
     * @param params.sourcePath { string|null }
     * @param params.args { Object }
     * @param params.args.dispatchTypes { Object }
     * @param params.args.dispatchTypes.200 { Number|null }
     * @param params.args.dispatchTypes.201 { Number|null }
     * @param params.args.dispatchTypes.400 { Number|null }
     * @param params.args.dispatchTypes.404 { Number|null }
     * @param params.args.dispatchTypes.406 { Number|null }
     * @param params.args.dispatchTypes.other { Number|null }
     * @param params.args.dispatchTypes.error { Number|null }
     */
    async signUp( params ) {
        this._run( this.service.signUp.bind(this.service), Object.assign({}, params, {args:{...params.args, method:'POST'}}) );
    }

    /**
     *
     * @param params { Object|null }
     * @param params.sourcePath { string|null }
     * @param params.args { Object }
     * @param params.args.dispatchTypes { Object }
     * @param params.args.dispatchTypes.200 { Number|null }
     * @param params.args.dispatchTypes.201 { Number|null }
     * @param params.args.dispatchTypes.400 { Number|null }
     * @param params.args.dispatchTypes.404 { Number|null }
     * @param params.args.dispatchTypes.406 { Number|null }
     * @param params.args.dispatchTypes.other { Number|null }
     * @param params.args.dispatchTypes.error { Number|null }
     */
    async getUsers( params ) {
        this._run( this.service.getUsers.bind(this.service), Object.assign({}, params, {args:{...params.args, method:'getUsers'}}) );
    }



    callback200(response, args) {
        super.callback200(response, args);

        if ( args.method === "POST" ) {
            this.dispatch([
                {
                    type: SIGNIN_FETCH_SUCCESS,
                    payload: response.value.token
                }
            ]);
        } 
    }

    callback401(response, args) {
        super.callback401(response, args);

        if ( args.method === "POST" ) {
            this.dispatch([
                {
                    type: SIGNIN_FETCH_FAIL,
                    payload: null
                }
            ]);
        } 
    }

}
