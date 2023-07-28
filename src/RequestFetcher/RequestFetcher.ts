/**
 * RequestFetcher Interface
 * @category RequestFetcher
 * @description Interface for the RequestFetcher
 * @internal
 * @see {@link RequestFetcherImpl} - Default implementation
 */
export interface RequestFetcher {
  _requestUrl: string;

  /**
   * Interface function that is responsible for fetching the data
   * @returns Promise of the response
   * @private
   */
  requestFetch(): Promise<any>;

  /**
   * responsible for making the fetch request
   * @returns Promise of the response
   * @private
   */
  makeFetchRequest(): Promise<Response>;

  /**
   * responsible for handling the response
   * @param response the response
   * @returns void
   * @private
   */
  handleResponse(response: Response): void;

  /**
   * responsible for parsing the response
   * @returns Promise of the response
   * @private
   */
  parseResponse(response: Response): Promise<any>;
}
