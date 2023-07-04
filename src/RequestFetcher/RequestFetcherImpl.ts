import { RequestFetcher } from './RequestFetcher';
import fetch from 'cross-fetch';
import { RequestBuilder } from '../RequestBuilder/RequestBuilder';

export class RequestFetcherImpl implements RequestFetcher {
  _requestUrl: string;

  constructor(buildRequest: RequestBuilder) {
    this._requestUrl = buildRequest.build();
  }

  async requestFetch(): Promise<any> {
    try {
      const response: Response = await this.makeFetchRequest();
      this.handleResponse(response);
      return this.parseResponse(response);
    } catch (error) {
      throw new Error(error);
    }
  }

  async makeFetchRequest(): Promise<Response> {
    return await fetch(this._requestUrl);
  }

  handleResponse(response: Response): void {
    if (!response.ok) {
      throw new Error('Request failed with status ' + response.status);
    }
  }

  async parseResponse(response: Response): Promise<any> {
    return await response.json();
  }
}
