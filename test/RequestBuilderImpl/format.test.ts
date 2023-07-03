import { RequestBuilderImpl } from '../../src';
let ODataRequest = null;

beforeEach(() => {
  ODataRequest = new RequestBuilderImpl('Fractie');
});

test('Internal format is persisted correctly', () => {
  expect(ODataRequest.format('minimal')._format).toBe('minimal');
});

test('Format can only be assigned once', () => {
  ODataRequest.format('minimal');
  expect.assertions(1);
  try {
    ODataRequest.format('full');
  } catch (e) {
    expect(e.message).toBe('$Format is already defined');
  }
});
