import { RequestBuilderImpl } from '../../src';
let ODataRequest = null;

beforeEach(() => {
  ODataRequest = new RequestBuilderImpl('Fractie');
});

test('Internal custom is persisted correctly', () => {
  expect(ODataRequest.custom('$custom=23')._custom).toBe('$custom=23');
});

test('Custom must start with $', () => {
  expect.assertions(1);
  try {
    ODataRequest.custom('custom23');
  } catch (e) {
    expect(e.message).toBe('Query must start with $');
  }
});
