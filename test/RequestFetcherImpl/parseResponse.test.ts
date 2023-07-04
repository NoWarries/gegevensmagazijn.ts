import { RequestFetcherImpl } from '../../src/RequestFetcher/RequestFetcherImpl';
import { RequestBuilderImpl } from '../../src';

test('parseResponse', async () => {
  const requestFetcher = new RequestFetcherImpl(
    new RequestBuilderImpl('Fractie').top(1)
  );
  const response = await requestFetcher.makeFetchRequest();
  const parsedResponse = await requestFetcher.parseResponse(response);
  expect(parsedResponse).toBeInstanceOf(Object);
});
