import { RequestBuilderImpl } from '../../src';
let ODataRequest = null;

beforeEach(() => {
  ODataRequest = new RequestBuilderImpl('Fractie');
});

test('Internal findById is persisted correctly', () => {
  expect(ODataRequest.findById('1')._id).toBe('1');
});

test('FindById can only be assigned once', () => {
  ODataRequest.findById('1');
  expect.assertions(1);
  try {
    ODataRequest.findById('2');
  } catch (e) {
    expect(e.message).toBe('ID is already defined');
  }
});

test('Filter cannot be used in combination with findById', () => {
  ODataRequest.filter('id eq 1');
  expect.assertions(1);
  try {
    ODataRequest.findById('1');
  } catch (e) {
    expect(e.message).toBe(
      'Query options $filter, $orderby, $count, $skip, and $top can be applied only on collections.'
    );
  }
});

test('Orderby cannot be used in combination with findById', () => {
  ODataRequest.orderby('id');
  expect.assertions(1);
  try {
    ODataRequest.findById('1');
  } catch (e) {
    expect(e.message).toBe(
      'Query options $filter, $orderby, $count, $skip, and $top can be applied only on collections.'
    );
  }
});

test('Skip cannot be used in combination with findById', () => {
  ODataRequest.skip(1);
  expect.assertions(1);
  try {
    ODataRequest.findById('1');
  } catch (e) {
    expect(e.message).toBe(
      'Query options $filter, $orderby, $count, $skip, and $top can be applied only on collections.'
    );
  }
});

test('Top cannot be used in combination with findById', () => {
  ODataRequest.top(1);
  expect.assertions(1);
  try {
    ODataRequest.findById('1');
  } catch (e) {
    expect(e.message).toBe(
      'Query options $filter, $orderby, $count, $skip, and $top can be applied only on collections.'
    );
  }
});

test('Count cannot be used in combination with findById', () => {
  ODataRequest.count(true);
  expect.assertions(1);
  try {
    ODataRequest.findById('1');
  } catch (e) {
    expect(e.message).toBe(
      'Query options $filter, $orderby, $count, $skip, and $top can be applied only on collections.'
    );
  }
});
