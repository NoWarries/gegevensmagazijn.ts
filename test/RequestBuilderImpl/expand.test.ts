import { RequestBuilderImpl } from '../../src';
let ODataRequest = null;

beforeEach(() => {
  ODataRequest = new RequestBuilderImpl('Fractie');
});

test('Internal expand is persisted correctly', () => {
  expect(ODataRequest.expand('id')._expand).toStrictEqual([['id']]);
});

test('Internal expand w/ function is persisted correctly', () => {
  expect(ODataRequest.expand('id', 'select')._expand).toStrictEqual([
    ['id', 'select']
  ]);
});
