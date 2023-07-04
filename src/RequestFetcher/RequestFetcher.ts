export interface RequestFetcher {
  _requestUrl: string;

  requestFetch(): Promise<any>;
  makeFetchRequest(): Promise<Response>;
  handleResponse(response: Response): void;
  parseResponse(response: Response): Promise<any>;
}
