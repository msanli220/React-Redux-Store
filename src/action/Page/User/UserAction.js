import UserServiceAction from '../../Service/User/UserServiceAction';
import { DELETE } from '../../../enum/RequestMethodEnum';
import { FETCHING } from '../../../enum/ResponseStatusEnum';

export default class UserAction extends UserServiceAction {

    constructor( dispatch ) {
        const pageName = "US"
        super( dispatch, pageName )
    }

    /**
     *
     * @param params { Object|null }
     * @param params.sourcePath { string|null }
     * @param params.args { Object }
     * @param params.args.dispatchTypes { Object }
     */
    async deleteUser( params ) {
        this.dispatch([ { type: `${this.pageName}${this.serviceName}${DELETE}${FETCHING}` } ]);
        this._run( this.service.deleteUser.bind(this.service), Object.assign({}, params, {args:{...params.args, method: DELETE}}) );
       
    }
}
