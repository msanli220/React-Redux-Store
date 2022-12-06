import AccountServiceAction from '../../Service/AuthService/AccountServiceAction';


export default class AccountAction extends AccountServiceAction {

    constructor( dispatch ) {
        const pageName = "AUTH"
        super( dispatch, pageName )
    }

}
