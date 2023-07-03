import { RequestBuilderImpl } from '../../src';

let ODataRequest = null;

beforeEach(() => {
  ODataRequest = new RequestBuilderImpl('Fractie');
});

test('builds a valid request URL', () => {
  const expectedURL =
    'https://gegevensmagazijn.tweedekamer.nl/OData/v4/2.0/$metadata#Fractie';
  const request = ODataRequest.request();
  request.then((response) => {
    expect(response['@odata.context']).toBe(expectedURL);
  });
});
