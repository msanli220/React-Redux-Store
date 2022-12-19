import CoreActionBase from "./CoreActionBase";
import {  DETAILS, GET,  POST } from '../enum/RequestMethodEnum';
import { CLEAN, FETCHING } from '../enum/ResponseStatusEnum';


export default class ReadonlyActionBase extends CoreActionBase{

    /**
     * GET action
     * @param params { Object|null }
     * @param params.args { Object }
     */
    async get( params) {
        this.dispatch([ { type: `${this.pageName}${this.serviceName}${GET}${FETCHING}` } ]);
        this._run( this.service.get.bind(this.service), Object.assign({}, params, {args:{method: GET}}) );
    }

    /**
     * GET action clean
     */
    async getClean() {
        this.dispatch([ { type: `${this.pageName}${this.serviceName}${GET}${CLEAN}` } ]);
    }
    /**
     * POST action clean
     */
    async postClean() {
        this.dispatch([ { type: `${this.pageName}${this.serviceName}${POST}${CLEAN}` } ]);
    }


    /**
     * DETAILS action
     * @param params { Object|null }
     * @param params.args { Object }
     */
    async details( params) {
        console.log("params",params)
        this.dispatch([ { type: `${this.pageName}${this.serviceName}${DETAILS}${FETCHING}` } ]);
        this._run( this.service.details.bind(this.service), Object.assign({}, params, {args:{method: DETAILS}}) );
    }


    /**
     * DETAILS action clean
     */
    async detailsClean() {
        this.dispatch([ { type: `${this.pageName}${this.serviceName}${DETAILS}${CLEAN}` } ]);
    }

}
