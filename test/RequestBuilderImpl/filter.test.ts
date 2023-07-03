import { RequestBuilderImpl } from '../../src';
let ODataRequest = null;

beforeEach(() => {
  ODataRequest = new RequestBuilderImpl('Fractie');
});

test('Internal filter is persisted correctly', () => {
  expect(ODataRequest.filter('id eq 1')._filter).toStrictEqual([['id eq 1']]);
});

test('Filter cannot be used on single entities', () => {
  ODataRequest.findById('1');
  expect.assertions(1);
  try {
    ODataRequest.filter('id eq 1');
  } catch (e) {
    expect(e.message).toBe(
      '$Filter can only be used on collections not on single entities'
    );
  }
});
