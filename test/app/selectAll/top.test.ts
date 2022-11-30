import { expect, test } from '@jest/globals';
import { GegevensmagazijnSingleton } from '../../../src/app/GegevensmagazijnSingleton';

const gegevensmagazijn = GegevensmagazijnSingleton.getInstance();

test('Expect {top: 1} to only return a single result', () => {
  gegevensmagazijn
    .selectAll('Fractie', {
      top: 1,
      format: 'none',
    })
    .then((data) => {
      expect(data['value'].length).toEqual(1); // expect to only return a single result
    });
});

test('Expect {top: 2} to only return 2 results', () => {
  gegevensmagazijn
    .selectAll('Fractie', {
      top: 2,
      format: 'none', // disable odata information (for consistent counting)
    })
    .then((data) => {
      expect(data['value'].length).toEqual(2); // expect to only return a single result
    });
});

test('Expect undefined top to return max results (250)', () => {
  gegevensmagazijn.selectAll('Document').then((data) => {
    expect(data['value'].length).toBe(250); // expect to return max results for a single request (250)
  });
});
