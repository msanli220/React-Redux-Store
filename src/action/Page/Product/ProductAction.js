import ProductServiceAction from '../../Service/Product/ProductServiceAction';


export default class ProductAction extends ProductServiceAction {

    constructor( dispatch ) {
        const pageName = "PROD"
        super( dispatch, pageName )
    }

}
 