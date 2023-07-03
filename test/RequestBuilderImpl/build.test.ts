import { RequestBuilderImpl } from '../../src';
let ODataRequest = null;

beforeEach(() => {
  ODataRequest = new RequestBuilderImpl('Besluit');
  ODataRequest._endpoint =
    'https://gegevensmagazijn.tweedekamer.nl/OData/v4/2.0';
});

test('findById is processed correctly', () => {
  ODataRequest.findById('1');
  expect(ODataRequest.build()).toBe(
    'https://gegevensmagazijn.tweedekamer.nl/OData/v4/2.0/Besluit/1'
  );
});

test('top is processed correctly', () => {
  ODataRequest.top(5);
  expect(ODataRequest.build()).toBe(
    'https://gegevensmagazijn.tweedekamer.nl/OData/v4/2.0/Besluit?$top=5'
  );
});

test('skip is processed correctly', () => {
  ODataRequest.skip(5);
  expect(ODataRequest.build()).toBe(
    'https://gegevensmagazijn.tweedekamer.nl/OData/v4/2.0/Besluit?$skip=5'
  );
});

test('count is processed correctly', () => {
  ODataRequest.count(true);
  expect(ODataRequest.build()).toBe(
    'https://gegevensmagazijn.tweedekamer.nl/OData/v4/2.0/Besluit?$count=true'
  );
});

test('filter is processed correctly', () => {
  ODataRequest.filter('id eq 1');
  expect(ODataRequest.build()).toBe(
    'https://gegevensmagazijn.tweedekamer.nl/OData/v4/2.0/Besluit?$filter=id eq 1'
  );
});

test('orderby is processed correctly w/ default', () => {
  ODataRequest.orderby('id');
  expect(ODataRequest.build()).toBe(
    'https://gegevensmagazijn.tweedekamer.nl/OData/v4/2.0/Besluit?$orderby=id asc'
  );
});

test('orderby is processed correctly desc', () => {
  ODataRequest.orderby('id', 'desc');
  expect(ODataRequest.build()).toBe(
    'https://gegevensmagazijn.tweedekamer.nl/OData/v4/2.0/Besluit?$orderby=id desc'
  );
});

test('expand is processed correctly', () => {
  ODataRequest.expand('id');
  expect(ODataRequest.build()).toBe(
    'https://gegevensmagazijn.tweedekamer.nl/OData/v4/2.0/Besluit?$expand=id'
  );
});

test('expand is processed correctly w/ function', () => {
  ODataRequest.expand('id', '$expand=id');
  expect(ODataRequest.build()).toBe(
    'https://gegevensmagazijn.tweedekamer.nl/OData/v4/2.0/Besluit?$expand=id($expand=id)'
  );
});

test('select is processed correctly', () => {
  ODataRequest.select('id');
  expect(ODataRequest.build()).toBe(
    'https://gegevensmagazijn.tweedekamer.nl/OData/v4/2.0/Besluit?$select=id'
  );
});

test('multiple select is processed correctly', () => {
  ODataRequest.selectMultiple(['id', 'name']);
  expect(ODataRequest.build()).toBe(
    'https://gegevensmagazijn.tweedekamer.nl/OData/v4/2.0/Besluit?$select=id,name'
  );
});

test('format is processed correctly', () => {
  ODataRequest.format('full');
  expect(ODataRequest.build()).toBe(
    'https://gegevensmagazijn.tweedekamer.nl/OData/v4/2.0/Besluit?$format=full'
  );
});

test('no entity set throws error', () => {
  ODataRequest._entity = null;
  expect(() => ODataRequest.build()).toThrowError('No entity specified');
});

test('no entity catch error', () => {
  ODataRequest._entity = null;
  expect.assertions(1);
  try {
    ODataRequest.build();
  } catch (e) {
    expect(e.message).toBe('No entity specified');
  }
});

test('Custom will overwrite previous options (1/2)', () => {
  ODataRequest.top(5).custom('$custom');
  expect(ODataRequest.build()).toBe(
    'https://gegevensmagazijn.tweedekamer.nl/OData/v4/2.0/Besluit?$custom'
  );
});

test('Custom will overwrite previous options (2/2)', () => {
  ODataRequest.top(5).custom('$select=Afkorting&$top=1');
  expect(ODataRequest.build()).toBe(
    'https://gegevensmagazijn.tweedekamer.nl/OData/v4/2.0/Besluit?$select=Afkorting&$top=1'
  );
});

test('Custom endpoint is processed correctly', () => {
  ODataRequest.endpoint('https://proxy.tweedekamer.nl/OData/v4/2.0');
  expect(ODataRequest.build()).toBe(
    'https://proxy.tweedekamer.nl/OData/v4/2.0/Besluit'
  );
});
