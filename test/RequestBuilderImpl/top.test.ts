import { RequestBuilderImpl } from '../../src';

let ODataRequest = null;

beforeEach(() => {
  ODataRequest = new RequestBuilderImpl('Fractie');
});

test('Internal top is persisted correctly', () => {
  expect(ODataRequest.top(5)._top).toBe(5);
});

test('Top can only be assigned once', () => {
  ODataRequest.top(5);
  expect.assertions(1);
  try {
    ODataRequest.top(10);
  } catch (e) {
    expect(e.message).toBe('$Top is already defined');
  }
});

test('Top cannot be less than 0', () => {
  expect.assertions(1);
  try {
    ODataRequest.top(-1);
  } catch (e) {
    expect(e.message).toBe('$Top cannot be less than or equal to 0');
  }
});

test('Top cannot be equal to 0', () => {
  expect.assertions(1);
  try {
    ODataRequest.top(0);
  } catch (e) {
    expect(e.message).toBe('$Top cannot be less than or equal to 0');
  }
});

test('Top cannot be more than 250', () => {
  expect.assertions(1);
  try {
    ODataRequest.top(251);
  } catch (e) {
    expect(e.message).toBe('$Top cannot be greater than 250');
  }
});

test('Top cannot be used on single entities', () => {
  ODataRequest.findById('1');
  expect.assertions(1);
  try {
    ODataRequest.top(10);
  } catch (e) {
    expect(e.message).toBe(
      '$Top can only be used on collections not on single entities'
    );
  }
});

test('Top cannot be used on single entities', () => {
  ODataRequest.findById('1');
  expect.assertions(1);
  try {
    ODataRequest.top(10);
  } catch (e) {
    expect(e.message).toBe(
      '$Top can only be used on collections not on single entities'
    );
  }
});
