import ReadonlyServiceBase from './ReadonlyServiceBase';
import ApiFetch from "../core/FetchRequest";
import { ApiProtocolEnum } from '../enum/ApiProtocolEnum';


export default class ServiceBase extends ReadonlyServiceBase {

    /**
     *
     * @param key {string}
     */
    async management( key) {
        return ApiFetch({
            method: ApiProtocolEnum.POST,
            sourcePath: `${this._sourcePath}/${key}`
        });
    }

    /**
     * http POST request
     * @param params { Object }
     * @param params.model { string }
     * @returns {AxiosPromise<any>}
     */
    async post( params ) {
        return ApiFetch( {
            method: ApiProtocolEnum.POST,
            sourcePath: this._sourcePath,
            body: params.model
        });
    }

    /**
     * http PATCH request
     * @param params { Object }
     * @param params.key { string }
     * @param params.model { string }
     * @returns {AxiosPromise<any>}
     */
    async patch( params ) {
        return ApiFetch({
            method: ApiProtocolEnum.PATCH,
            sourcePath: `${this._sourcePath}/${params.key}`,
            body: params.model
        });
    }

    /**
     * http DELETE request
     * @param params { Object }
     * @param params.key { string }
     * @returns {AxiosPromise<any>}
     */
    async delete( params) {
        return ApiFetch( {
            method: ApiProtocolEnum.DELETE,
            sourcePath: `${this._sourcePath}/${params.key}`,
        });
    }

}
