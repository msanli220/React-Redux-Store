import ApiFetch from "../core/FetchRequest";
import { ApiProtocolEnum } from '../enum/ApiProtocolEnum';
import CoreServiceBase from './CoreServiceBase';

export default class ReadonlyServiceBase extends CoreServiceBase {

    /**
     * http GET request
     * @param params.sourcePath {string|null}
     * @param params.key {string|null}
     * @returns {AxiosPromise<any>}
     */
    async get(params) {
        return ApiFetch( {
            method: ApiProtocolEnum.GET,
            sourcePath: this._sourcePath,
            ...params
        });
    }

    /**
     *
     * @param key {string}
     */
    async details(key) {
        return ApiFetch( {
            method: ApiProtocolEnum.GET,
            sourcePath: `${this._sourcePath}/${key}/details`,
        });
    }

}
