import ServiceBase from '../ServiceBase';
import CoreDefault from '../../core/CoreDefault';
import EndpointRoute from '../../core/EndpointRoute';
import ApiFetch from "../../core/FetchRequest";
import { ApiProtocolEnum } from '../../enum/ApiProtocolEnum';
export default class UserService extends ServiceBase {

    constructor () {
        super({
            sourcePath: EndpointRoute.user.prefix,
        });
    }

    /**
     * http DELETE request
     * @param params { Object }
     * @param params.key { string }
     * @returns {AxiosPromise<any>}
     */
    async deleteUser( params) {
        console.log("UserService.deleteParams",params)
        return ApiFetch( {
            method: ApiProtocolEnum.DELETE,
            sourcePath: `${this._sourcePath}/${params.selectedIds.key}`,
        });
    }

}
