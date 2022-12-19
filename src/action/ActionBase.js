import { DELETE, PATCH, POST, MANAGEMENT } from '../enum/RequestMethodEnum';
import { CLEAN, FETCHING } from '../enum/ResponseStatusEnum';
import ReadonlyActionBase from './ReadOnlyActionBase';


export default class ActionBase extends ReadonlyActionBase {

    /**
     * MANAGEMENT action
     * @param params { Object|null }
     * @param params.sourcePath { string|null }
     * @param params.args { Object }
     */
    async management( params) {
        this.dispatch([ { type: `${this.pageName}${this.serviceName}${MANAGEMENT}${FETCHING}` } ]);
        this._run( this.service.management.bind(this.service), Object.assign({}, params, {args:{ method: MANAGEMENT}}) );
    }

    /**
     * MANAGEMENT action clean
     */
    async managementClean() {
        this.dispatch([ { type: `${this.pageName}${this.serviceName}${MANAGEMENT}${CLEAN}` } ]);
    }

    /**
     * POST action
     * @param params { Object|null }
     * @param params.sourcePath { string|null }
     * @param params.args { Object }
     */
    async post( params ) {
        console.log("params:", params);
        this.dispatch([ { type: `${this.pageName}${this.serviceName}${POST}${FETCHING}` } ]);
        this._run( this.service.post.bind(this.service), Object.assign({}, params, {args:{ method: POST}}) );
    }

    /**
     * POST action clean
     */
    async postClean() {
        this.dispatch([ { type: `${this.pageName}${this.serviceName}${POST}${CLEAN}` } ]);
    }

    /**
     * PATCH action
     * @param params { Object|null }
     * @param params.sourcePath { string|null }
     * @param params.args { Object }
     */
    async patch( params ) {
        this.dispatch([ { type: `${this.pageName}${this.serviceName}${PATCH}${FETCHING}` } ]);
        this._run( this.service.patch.bind(this.service), Object.assign({}, params, {args:{...params.args, method: PATCH}}) );
    }

    /**
     * PATCH action clean
     */
    async patchClean() {
        this.dispatch([ { type: `${this.pageName}${this.serviceName}${PATCH}${CLEAN}` } ]);
    }

    /**
     * DELETE action
     * @param params { Object|null }
     * @param params.sourcePath { string|null }
     * @param params.args { Object }
     */
    async delete( params) {
        this.dispatch([ { type: `${this.pageName}${this.serviceName}${DELETE}${FETCHING}` } ]);
        this._run( this.service.delete.bind(this.service), Object.assign({}, params, {args:{...params.args, method: DELETE}}) );
    }

    /**
     * DELETE action clean
     */
    async deleteClean() {
        this.dispatch([ { type: `${this.pageName}${this.serviceName}${DELETE}${CLEAN}` } ]);
    }

}
