import { RequestBuilderImpl } from './RequestBuilder/RequestBuilderImpl';
import { RequestBuilder } from './RequestBuilder/RequestBuilder';

/**
 * @category General Use
 * @description Provides a simple interface to make requests to the OpenData API
 *
 * @example
 * // Import the ODataRequest class
 * import { ODataRequest } from 'gegevensmagazijn.ts';
 *
 * // Create a new request
 * const construction = new ODataRequest('Fractie')
 *    // Chain functions options to the request
 *    .expand('FractieZetel')
 *
 * // Log the request
 * console.log(construction.build(););
 *
 * // Fetch the data
 * construction.request().then((data) => {
 *     // Log the data
 *     console.log(data);
 * }).catch((error) => {
 *     console.warn(error);
 * });
 *
 * @see {@link RequestBuilder} - ODataRequest interface
 * @see {@link RequestBuilderImpl} - default implementation
 */
const ODataRequest = RequestBuilderImpl;

export { ODataRequest, RequestBuilder, RequestBuilderImpl };
