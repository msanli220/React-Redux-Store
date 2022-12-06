import ApiFetch from "../../core/FetchRequest";
import CoreDefault from '../../core/CoreDefault';
import ServiceBase from '../ServiceBase';
import { ApiProtocolEnum } from '../../enum/ApiProtocolEnum';
import EndpointRoute from "../../core/EndpointRoute";

export default class AccountService extends ServiceBase {

    constructor () {
        super({
            sourcePath: EndpointRoute.account.prefix,
        });
    }

    /**
     * User Sign In
     * @param params { Object }
     * @param params.model { string }
     * @returns {AxiosPromise<any>}
     */
    async signUp ( params ) {
        return ApiFetch( {
            method: ApiProtocolEnum.POST,
            sourcePath: `${this._sourcePath}${EndpointRoute.account.signUp}`,
            body: params.model
        });
    }

    /**
     * User Sign Up
     * @param params { Object }
     * @returns {AxiosPromise<any>}
     */
    async signIn ( params ) {
        return ApiFetch( {
            method: ApiProtocolEnum.POST,
            sourcePath: `${this._sourcePath}${EndpointRoute.account.signIn}`,
            body: params
        })
    }

    /**
     * User Change Password
     * @param params { Object }
     * @param params.key { Number }
     * @param params.model { string }
     * @returns {AxiosPromise<any>}
     */
    async changePassword ( params ) {
        return ApiFetch( {
            method: ApiProtocolEnum.POST,
            sourcePath: `${this._sourcePath}${EndpointRoute.account.changePassword}`,
            body: params.model
        });
    }

}
