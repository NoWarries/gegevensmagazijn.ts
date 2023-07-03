import { RequestBuilderImpl } from '../../src';
let ODataRequest = null;

beforeEach(() => {
  ODataRequest = new RequestBuilderImpl('Fractie');
});

test('Internal endpoint is persisted correctly', () => {
  expect(
    ODataRequest.endpoint('https://proxy.tweedekamer.nl/OData/v4/2.0')._endpoint
  ).toBe('https://proxy.tweedekamer.nl/OData/v4/2.0');
});
