import { RequestFetcher } from './RequestFetcher';
import fetch from 'cross-fetch';
import { RequestBuilder } from '../RequestBuilder/RequestBuilder';

/**
 * RequestFetcherImpl
 * @category RequestFetcher
 * @description Interface for the RequestFetcher
 * @internal
 * @see {@link RequestFetcher} - RequestFetcher interface
 */
export class RequestFetcherImpl implements RequestFetcher {
  /**
   * The url to make the request to
   */
  _requestUrl: string;

  /**
   * RequestFetcherImpl constructor
   * Uses the RequestBuilder to build the request and sets the _requestUrl
   *
   * @param buildRequest the RequestBuilder to build the request with
   */
  constructor(buildRequest: RequestBuilder) {
    this._requestUrl = buildRequest.build();
  }

  /**
   * @inheritDoc {@link RequestFetcher}
   */
  async requestFetch(): Promise<any> {
    try {
      const response: Response = await this.makeFetchRequest();
      this.handleResponse(response);
      return this.parseResponse(response);
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * @inheritDoc {@link RequestFetcher}
   */
  async makeFetchRequest(): Promise<Response> {
    return await fetch(this._requestUrl);
  }

  /**
   * @inheritDoc {@link RequestFetcher}
   */
  handleResponse(response: Response): void {
    if (!response.ok) {
      throw new Error('Request failed with status ' + response.status);
    }
  }

  /**
   * @inheritDoc {@link RequestFetcher}
   */
  async parseResponse(response: Response): Promise<any> {
    return await response.json();
  }
}
