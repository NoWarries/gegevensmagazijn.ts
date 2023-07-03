import { RequestBuilderImpl } from '../../src';
let ODataRequest = null;

beforeEach(() => {
  ODataRequest = new RequestBuilderImpl('Fractie');
});

test('Internal count is persisted correctly', () => {
  expect(ODataRequest.count(true)._count).toBe(true);
});

test('Count cannot be used on single entities', () => {
  ODataRequest.findById('1');
  expect.assertions(1);
  try {
    ODataRequest.count('true');
  } catch (e) {
    expect(e.message).toBe(
      '$Count can only be used on collections not on single entities'
    );
  }
});
