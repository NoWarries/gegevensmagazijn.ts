import { RequestFetcherImpl } from '../../src/RequestFetcher/RequestFetcherImpl';
import { RequestBuilderImpl } from '../../src';

test('handleResponse() should throw an error when response.ok is false', async () => {
  const requestFetcher = new RequestFetcherImpl(
    new RequestBuilderImpl('BestaatNiet').top(1)
  );
  requestFetcher._requestUrl =
    'https://gegevensmagazijn.tweedekamer.nl/OData/v4/2.0/BestaatNiet?$top=1';
  const response = await requestFetcher.makeFetchRequest();
  expect(() => requestFetcher.handleResponse(response)).toThrow();
});

test('handleResponse should do nothing when response.ok is true', async () => {
  const requestFetcher = new RequestFetcherImpl(
    new RequestBuilderImpl('Fractie').top(1)
  );
  const response = await requestFetcher.makeFetchRequest();
  expect(() => requestFetcher.handleResponse(response)).not.toThrow();
});
