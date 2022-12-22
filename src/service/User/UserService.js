import ServiceBase from '../ServiceBase';
import CoreDefault from '../../core/CoreDefault';
import EndpointRoute from '../../core/EndpointRoute';


export default class UserService extends ServiceBase {

    constructor () {
        super({
            sourcePath: EndpointRoute.user.prefix,
        });
    }

}
