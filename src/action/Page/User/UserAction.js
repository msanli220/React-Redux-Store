import UserServiceAction from '../../Service/User/UserServiceAction';


export default class UserAction extends ProductServiceAction {

    constructor( dispatch ) {
        const pageName = "US"
        super( dispatch, pageName )
    }

}
