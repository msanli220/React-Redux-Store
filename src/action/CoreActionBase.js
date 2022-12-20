import ResultStatusEnum from '../enum/ResultStatusEnum';


export default class CoreActionBase {

    /**
     *
     * @param dispatch { Function }
     * @param service { any }
     * @param serviceName { string }
     * @param pageName { string }
     */
    constructor ( dispatch, service, serviceName, pageName ) {
        this.dispatch = dispatch;
        this.service = service;
        this.serviceName = serviceName;
        this.pageName = pageName;
    }


    /**
     *
     * @param response { Object }
     * @param args { Object }
     */
    callback200( response, args ) {}
    /**
     *
     * @param response { Object }
     * @param args { Object }
     */
    callback201( response, args ) {}
    /**
     *
     * @param response { Object }
     * @param args { Object }
     */
    callback400( response, args ) {}
    /**
     *
     * @param response { Object }
     * @param args { Object }
     */
    callback401( response, args ) {}
    /**
     *
     * @param response { Object }
     * @param args { Object }
     */
    callback406( response, args ) {}
    /**
     *
     * @param response { Object }
     * @param args { Object }
     */
    callbackOther( response, args ) {
      
        console.log("CoreActionBase.callbackOther: ", response, args);
      

        const _location = window.location.href.split("/");
        _location[_location.length-1] = "dashboard";
        window.location = _location.join("/");
    }
    /**
     *
     * @param response { Object }
     * @param args { Object }
     */
    callbackError( response, args ) {
        console.log("CoreActionBase.callbackError",response);
    }
    /**
     *
     * @param service { Function }
     * @param params { Object|null }
     * @param params.serviceData { Object|undefined }
     * @param params.args { Object }
     */
    _run( service, params) {
        console.log("ApiRequestParams: ", params);
        service( params?.serviceData )
            .then(response => {
                console.log("ApiRequestResponse: ", response);
                // const status = response.data?.status ? `d${response.data?.status}` : `h${response.status}`;
                const status = `h${response.status}`;

                switch (status) {
                   
                    // from data
                    case `d${ResultStatusEnum.Success}`:
                    case `h${ResultStatusEnum.Success}`:
                        this.callback200(response.data, params?.args);
                        break;
                    case `d${ResultStatusEnum.Created}`:
                    case `h${ResultStatusEnum.Created}`:
                        this.callback201(response.data, params?.args);
                        break;
                    case `d${ResultStatusEnum.BadRequest}`:
                    case `h${ResultStatusEnum.BadRequest}`:
                        this.callback400(response.data, params?.args);
                        break;
                    case `d${ResultStatusEnum.Unauthorized}`:
                    case `h${ResultStatusEnum.Unauthorized}`:
                        this.callback401(response.data, params?.args);
                        break;
                    case `d${ResultStatusEnum.NotAcceptable}`:
                    case `h${ResultStatusEnum.NotAcceptable}`:
                        this.callback406(response.data, params?.args);
                        break;

                    //
                    default:
                        this.callbackOther(response, params?.args);

                }

                return Promise.resolve();
            })
            .catch(error => {

                console.error("CoreActionBase.error: ", JSON.stringify(error, null, 4));
                if (error.message === "Network Error") {
                    this.callbackOther(null, params?.args);
                }

                const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
                this.callbackError(message, params?.args);

                return Promise.resolve();
            });
    }

}
