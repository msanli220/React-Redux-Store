import Axios        from 'axios';
import CoreDefault  from "./CoreDefault";
import Lodash from 'lodash';
import EndpointRoute from './EndpointRoute';
import OS from 'os';

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

/**
 * Request header composer
 * @param params { Object }
 * @param params.url { string }
 * @param params.token { string }
 * @param params.method {string}
 * @param params.contentType {string|null}
 * @returns {Object}
 */
let requestInit = (params) => {
    return {
        url: params.url,
        method: params.method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
       //     'Authorization': `Bearer ${localStorage.getItem("token")?localStorage.getItem("token"):params?.token}`,    
        },
        withCredentials: false,
        responseType: 'json',
        responseEncoding: 'utf8',
        validateStatus: function (status) {
            return CoreDefault.acceptableHttpStatus.indexOf(status) > -1;
        }
    }
}

/**
 *
 * @param baseUrl { string }
 * @param queryOptions { Object|null }
 * @param queryOptions.filter { Array|null }
 * @param queryOptions.offset { Number|null }
 * @param queryOptions.limit { Number|null }
 * @param queryOptions.order { String|null }
 * @return { string }
 */
function QueryComposer( baseUrl, queryOptions ) {

    if ( queryOptions == null ) return baseUrl;
    console.log("queryOptions.",queryOptions);

    const queryList = [];
    let url = baseUrl;

    if (queryOptions.filter?.length > 0) {
        queryList.push(`filter=${queryOptions.filter.join(' and ')}`);
    }
    if ( queryOptions?.offset > 0 ) {
        queryList.push(`offset=${queryOptions.offset}`);
    }
    if ( queryOptions?.limit > -1 ) {
        queryList.push(`limit=${queryOptions.limit}`);
    }
    if ( !Lodash.isEmpty(queryOptions.order) ) {
        queryList.push(`order=${queryOptions.order}`);
    }

    // if (queryOptions.order?.length > 0) {
    //     queryList.push(`order=${queryOptions.order.join(',')}`);
    // }

    if (queryList.length > 0) {
        url = `${baseUrl}?${queryList.join('&')}`;
    }

    return url;
}

/**
 * Api Request Sender
 * @param params { Object }
 * @param params.method {string}
 * @param params.sourcePath {string}
 * @param params.token {string|null}
 * @param params.body {Object|null}
 * @param params.formData {Object|null}
 * @param params.contentType {string|null}
 * @param params.queryOptions { Object|null }
 * @param params.queryOptions.filter { Array|null }
 * @param params.queryOptions.skip { Number|null }
 * @param params.queryOptions.top { Number|null }
 * @param params.queryOptions.orderBy { String|null }
 * @param params.language {string}
 * @param params.protocol {string}
 */
export async function ApiFetch ( params ) {
    console.log("ApiFetch.params.raw ", params);

    const baseUrl = `${EndpointRoute.url}${params.sourcePath}`;
    const url = QueryComposer(baseUrl, params.queryOptions);

    let _requestInit = requestInit( { ...params, url } );
    // Patch and Post operations
    _requestInit['data'] = params.formData ? params.formData : JSON.stringify(params.body);

    // -- debug
    console.log("ApiFetch.requestInit: ", _requestInit);

    // await sleep(2000);

    return Axios( _requestInit );
}

export default ApiFetch;
