import { RequestBuilderImpl } from '../../src';
let ODataRequest = null;

beforeEach(() => {
  ODataRequest = new RequestBuilderImpl('Fractie');
});

test('Internal skip is persisted correctly', () => {
  expect(ODataRequest.skip(5)._skip).toBe(5);
});

test('Skip can only be assigned once', () => {
  ODataRequest.skip(5);
  expect.assertions(1);
  try {
    ODataRequest.skip(10);
  } catch (e) {
    expect(e.message).toBe('$Skip is already defined');
  }
});

test('Skip cannot be less than 0', () => {
  expect.assertions(1);
  try {
    ODataRequest.skip(-1);
  } catch (e) {
    expect(e.message).toBe('$Skip cannot be less than 0');
  }
});

test('Skip cannot be used on single entities', () => {
  ODataRequest.findById('1');
  expect.assertions(1);
  try {
    ODataRequest.skip(10);
  } catch (e) {
    expect(e.message).toBe(
      '$Skip can only be used on collections not on single entities'
    );
  }
});
