import ActionBase from '../../ActionBase';
import UserService from '../../../service/User/UserService';
import { GET, POST,PATCH,DETAILS,DELETE,MANAGEMENT } from '../../../enum/RequestMethodEnum';
import { FAIL, SUCCESS } from '../../../enum/ResponseStatusEnum';


export default class UserServiceAction extends ActionBase {

    constructor( dispatch, pageName ) {
        const service = new UserService();
        const serviceName = "US";
        super( dispatch, service, serviceName, pageName );
    }

    callback200(response, args) {
        
        super.callback200(response, args);
       
        if ( args.method === GET ) {
            console.log("response is:",response,args)
            this.dispatch([
                {
                    type: `${this.pageName}${this.serviceName}${GET}${SUCCESS}`,
                    payload: response.users
                }
            ]);
        } else if ( args.method === POST ) {
            this.dispatch([
                {
                    type: `${this.pageName}${this.serviceName}${POST}${SUCCESS}`,
                    payload: response
                }
            ]);
        }
        else if ( args.method === PATCH ) {
            this.dispatch([
                {
                    type: `${this.pageName}${this.serviceName}${PATCH}${SUCCESS}`,
                    payload: response
                }
            ]);
        }
        else if ( args.method === DELETE ) {
            this.dispatch([
                {
                    type: `${this.pageName}${this.serviceName}${DELETE}${SUCCESS}`,
                    payload: response
                }
            ]);
        }
        else if ( args.method === MANAGEMENT ) {
            this.dispatch([
                {
                    type: `${this.pageName}${this.serviceName}${MANAGEMENT}${SUCCESS}`,
                    payload: response
                }
            ]);
        }
        else if ( args.method === DETAILS ) {
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

        if ( args.method === GET ) {
            this.dispatch([
                {
                    type: `${this.pageName}${this.serviceName}${GET}${FAIL}`,
                    payload: response
                }
            ]);
        } else if ( args.method === POST ) {
            this.dispatch([
                {
                    type: `${this.pageName}${this.serviceName}${POST}${FAIL}`,
                    payload: response
                }
            ]);
        }
        else if ( args.method === PATCH ) {
            this.dispatch([
                {
                    type: `${this.pageName}${this.serviceName}${PATCH}${FAIL}`,
                    payload: response
                }
            ]);
        }
        else if ( args.method === DELETE ) {
            this.dispatch([
                {
                    type: `${this.pageName}${this.serviceName}${DELETE}${FAIL}`,
                    payload: response
                }
            ]);
        }
        else if ( args.method === MANAGEMENT ) {
            this.dispatch([
                {
                    type: `${this.pageName}${this.serviceName}${DELETE}${FAIL}`,
                    payload: response
                }
            ]);
        }
        else if ( args.method === DETAILS ) {
            this.dispatch([
                {
                    type: `${this.pageName}${this.serviceName}${DETAILS}${FAIL}`,
                    payload: response
                }
            ]);
        }
    }

}
