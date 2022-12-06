import AccountServiceAction from '../../Service/Account/AccountServiceAction';


export default class AccountAction extends AccountServiceAction {

    constructor( dispatch ) {
        const pageName = "AUTH"
        super( dispatch, pageName )
    }

}
