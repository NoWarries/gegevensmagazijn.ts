import { RequestFetcherImpl } from '../../src/RequestFetcher/RequestFetcherImpl';
import { RequestBuilderImpl } from '../../src';

test('requestFetch() should return a Promise', async () => {
  const requestFetcher = new RequestFetcherImpl(
    new RequestBuilderImpl('Fractie').top(1)
  );
  const requestFetch = requestFetcher.requestFetch();
  expect(requestFetch).toBeInstanceOf(Promise);
});

test('requestFetch() should return a Promise that resolves to an object', async () => {
  const requestFetcher = new RequestFetcherImpl(
    new RequestBuilderImpl('Fractie').top(1)
  );
  const requestFetch = await requestFetcher.requestFetch();
  expect(requestFetch).toBeInstanceOf(Object);
});

test('requestFetch() should can handleError and throw an error', async () => {
  const requestFetcher = new RequestFetcherImpl(
    new RequestBuilderImpl('BestaatNiet')
  );
  requestFetcher._requestUrl =
    'https://gegevensmagazijn.tweedekamer.nl/OData/v4/2.0/BestaatNiet?$top=1';
  const requestFetch = requestFetcher.requestFetch();
  await expect(requestFetch).rejects.toThrow();
});

test('requestFetch() should can handleError and throw an error', async () => {
  const requestFetcher = new RequestFetcherImpl(
    new RequestBuilderImpl('BestaatNiet')
  );
  requestFetcher._requestUrl =
    'https://gegevensmagazijn.tweedekamer.nl/OData/v4/2.0/BestaatNiet?$top=1';
  const requestFetch = requestFetcher.requestFetch();
  await expect(requestFetch).rejects.toThrow();
});
