import { RequestBuilderImpl } from '../../src';
let ODataRequest = null;

beforeEach(() => {
  ODataRequest = new RequestBuilderImpl('Fractie');
});

test('Internal orderby is persisted correctly with default direction', () => {
  ODataRequest.orderby('id');
  expect(ODataRequest._orderby[0]).toBe('id');
  expect(ODataRequest._orderby[1]).toBe('asc');
});

test('Internal orderby is persisted correctly with desc direction', () => {
  ODataRequest.orderby('id', 'desc');
  expect(ODataRequest._orderby[0]).toBe('id');
  expect(ODataRequest._orderby[1]).toBe('desc');
});

test('Internal orderby is persisted correctly with asc direction', () => {
  ODataRequest.orderby('id', 'asc');
  expect(ODataRequest._orderby[0]).toBe('id');
  expect(ODataRequest._orderby[1]).toBe('asc');
});

test('Orderby cannot be used on single entities', () => {
  ODataRequest.findById('1');
  expect.assertions(1);
  try {
    ODataRequest.orderby('id');
  } catch (e) {
    expect(e.message).toBe(
      '$Orderby can only be used on collections not on single entities'
    );
  }
});

test('Orderby can only be assigned once', () => {
  ODataRequest.orderby('id');
  expect.assertions(1);
  try {
    ODataRequest.orderby('name');
  } catch (e) {
    expect(e.message).toBe('$Orderby is already defined');
  }
});

test('Orderby needs asc or desc', () => {
  expect.assertions(1);
  try {
    ODataRequest.orderby('id', 'wrong');
  } catch (e) {
    expect(e.message).toBe('Direction must be asc or desc');
  }
});
