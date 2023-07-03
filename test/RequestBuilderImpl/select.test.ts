import { RequestBuilderImpl } from '../../src';
let ODataRequest = null;

beforeEach(() => {
  ODataRequest = new RequestBuilderImpl('Fractie');
});

test('Internal select is persisted correctly', () => {
  expect(ODataRequest.select('id')._select).toStrictEqual(['id']);
});

test('Internal selectMultiple is persisted correctly', () => {
  expect(ODataRequest.selectMultiple(['id', 'name'])._select).toStrictEqual([
    'id',
    'name'
  ]);
});

test('Internal setSelect is persisted correctly', () => {
  ODataRequest.selectMultiple(['id', 'name']);
  expect(ODataRequest.setSelect(['id'])._select).toStrictEqual(['id']);
});

test('SelectMultiple and Select can be chained', () => {
  expect(
    ODataRequest.select('id').selectMultiple(['name', 'nameNL'])._select
  ).toStrictEqual(['id', 'name', 'nameNL']);
});

test('selectMultiple allows single string in array', () => {
  expect(ODataRequest.selectMultiple(['id'])._select).toStrictEqual(['id']);
});
