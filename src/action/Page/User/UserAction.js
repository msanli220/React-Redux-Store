import UserServiceAction from '../../Service/User/UserServiceAction';


export default class UserAction extends UserServiceAction {

    constructor( dispatch ) {
        const pageName = "US"
        super( dispatch, pageName )
    }

}
