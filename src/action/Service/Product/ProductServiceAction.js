import ActionBase from '../ActionBase';
import ProductService from '../../../service/Product/ProductService';
import { GET, POST,PATCH,DETAILS,DELETE,MANAGEMENT } from '../../../enum/RequestMethodEnum';
import { FAIL, SUCCESS } from '../../../enum/ResponseStatusEnum';


export default class ProductServiceAction extends ActionBase {

    constructor( dispatch, pageName ) {
        const service = new ProductService();
        const serviceName = "PROD";
        super( dispatch, service, serviceName, pageName );
    }

    callback200(response, args) {
        super.callback200(response, args);

        if ( args.actionType === GET ) {
            this.dispatch([
                {
                    type: `${this.pageName}${this.serviceName}${GET}${SUCCESS}`,
                    payload: response
                }
            ]);
        } else if ( args.actionType === POST ) {
            this.dispatch([
                {
                    type: `${this.pageName}${this.serviceName}${POST}${SUCCESS}`,
                    payload: response
                }
            ]);
        }
        else if ( args.actionType === PATCH ) {
            this.dispatch([
                {
                    type: `${this.pageName}${this.serviceName}${PATCH}${SUCCESS}`,
                    payload: response
                }
            ]);
        }
        else if ( args.actionType === DELETE ) {
            this.dispatch([
                {
                    type: `${this.pageName}${this.serviceName}${DELETE}${SUCCESS}`,
                    payload: response
                }
            ]);
        }
        else if ( args.actionType === MANAGEMENT ) {
            this.dispatch([
                {
                    type: `${this.pageName}${this.serviceName}${MANAGEMENT}${SUCCESS}`,
                    payload: response
                }
            ]);
        }
        else if ( args.actionType === DETAILS ) {
            this.dispatch([
                {
                    type: `${this.pageName}${this.serviceName}${DETAILS}${SUCCESS}`,
                    payload: response
                }
            ]);
        }
    }

    callback400(response, args) {
        super.callback400(response, args);

        if ( args.actionType === GET ) {
            this.dispatch([
                {
                    type: `${this.pageName}${this.serviceName}${GET}${FAIL}`,
                    payload: response
                }
            ]);
        } else if ( args.actionType === POST ) {
            this.dispatch([
                {
                    type: `${this.pageName}${this.serviceName}${POST}${FAIL}`,
                    payload: response
                }
            ]);
        }
        else if ( args.actionType === PATCH ) {
            this.dispatch([
                {
                    type: `${this.pageName}${this.serviceName}${PATCH}${FAIL}`,
                    payload: response
                }
            ]);
        }
        else if ( args.actionType === DELETE ) {
            this.dispatch([
                {
                    type: `${this.pageName}${this.serviceName}${DELETE}${FAIL}`,
                    payload: response
                }
            ]);
        }
        else if ( args.actionType === MANAGEMENT ) {
            this.dispatch([
                {
                    type: `${this.pageName}${this.serviceName}${DELETE}${FAIL}`,
                    payload: response
                }
            ]);
        }
        else if ( args.actionType === DETAILS ) {
            this.dispatch([
                {
                    type: `${this.pageName}${this.serviceName}${DETAILS}${FAIL}`,
                    payload: response
                }
            ]);
        }
    }

}
