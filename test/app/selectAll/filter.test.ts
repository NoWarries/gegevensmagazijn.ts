import { expect, test } from '@jest/globals';
import { GegevensmagazijnSingleton } from '../../../src/app/GegevensmagazijnSingleton';

const gegevensmagazijn = GegevensmagazijnSingleton.getInstance();

test('(single) Expect filter to only return values with give filter applied', () => {
  gegevensmagazijn
    .selectAll('Fractie', {
      top: 5, // Only show 5 results
      filter: [
        ['Verwijderd eq false'], // Fractie is not verwijderd
      ],
    })
    .then((data) => {
      data['value'].forEach((value) => {
        expect(value.Verwijderd).toBe(false);
      });
    });
  gegevensmagazijn
    .selectAll('Fractie', {
      top: 5, // Only show 5 results
      filter: [
        ['Verwijderd eq true'], // Fractie is verwijderd
      ],
    })
    .then((data) => {
      data['value'].forEach((value) => {
        expect(value.Verwijderd).toBe(true);
      });
    });
});

test('(multiple) Expect filter to only return values with give filter applied', () => {
  gegevensmagazijn
    .selectAll('Besluit', {
      top: 5, // Only show 5 results
      filter: [
        ["BesluitTekst eq 'Behandeld.'"],
        ['and'],
        ['Verwijderd ne true'],
      ],
    })
    .then((data) => {
      data['value'].forEach((value) => {
        expect(value.Verwijderd).toBe(false);
        expect(value.BesluitTekst).toEqual('Behandeld.');
      });
    });

  gegevensmagazijn
    .selectAll('Persoon', {
      top: 5, // Only show 5 results
      filter: [
        ["Functie eq 'Eerste Kamerlid'"],
        ['and'],
        ["Geslacht ne 'man'"],
      ],
    })
    .then((data) => {
      data['value'].forEach((value) => {
        expect(value.Functie).toEqual('Eerste Kamerlid');
        expect(value.Geslacht).not.toEqual('man');
      });
    });
});
