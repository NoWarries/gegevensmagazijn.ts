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
 * @see {@link RequestBuilderImpl} - ODataRequest interface
 * @see {@link RequestBuilderImpl} - default implementation
 */
const ODataRequest = RequestBuilderImpl;

const request = new ODataRequest('Fractie')
  .expand('FractieZetel', '$select=Id')
  .filter('AantalZetels gt 10 and AantalZetels lt 50')
  .filter("Afkorting ne 'D66'")
  .orderby('AantalZetels', 'desc')
  .skip(1)
  .count(true)
  .format('minimal');

console.log(request.build());

export { ODataRequest, RequestBuilder, RequestBuilderImpl };
