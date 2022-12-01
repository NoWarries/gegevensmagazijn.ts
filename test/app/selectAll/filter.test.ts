import { expect, test } from '@jest/globals';
import { GegevensmagazijnSingleton } from '../../../src/app/GegevensmagazijnSingleton';

const gegevensmagazijn = GegevensmagazijnSingleton.getInstance();

/*
 Generic filter testing
 Test if a single condition is correctly applied
 */
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

/*
 Generic filter testing
 Test if multiple condition are applied correctly
 */
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

/*
 Check if 'or' condition on multiple conditions is applied correctly
 */
test("Check if 'or' condition on multiple conditions is applied correctly", () => {
  gegevensmagazijn
    .selectAll('Fractie', {
      top: 2,
      order: ['Afkorting', 'asc'], // make sure the request is returned in the right order (to check)
      filter: [["Afkorting eq 'VVD'"], ['or'], ["Afkorting eq 'BIJ1'"]],
    })
    .then((data) => {
      expect(data['value'][0].Afkorting).toBe('BIJ1');
      expect(data['value'][1].Afkorting).toBe('VVD');
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

/*
 Check if 'and' condition on multiple conditions is applied correctly
 */
test("Check if 'and' condition on multiple conditions is applied correctly", () => {
  gegevensmagazijn
    .selectAll('Besluit', {
      top: 10,
      filter: [
        ["Status eq 'Besluit'"],
        ['and'],
        ["BesluitSoort eq 'Behandelen [en afdoen]'"],
      ],
    })
    .then((data) => {
      data['value'].forEach((value) => {
        expect(value.BesluitSoort).toEqual('Behandelen [en afdoen]');
      });
    });
});

/*
 Check if 'eq' operator is applied correctly
 */
test("Check if 'eq' operator is applied correctly", () => {
  gegevensmagazijn
    .selectAll('Besluit', {
      top: 5,
      filter: [["Status eq 'Besluit'"]],
    })
    .then((data) => {
      data['value'].forEach((value) => {
        expect(value.Status).toEqual('Besluit');
      });
    });
});

/*
 Check if 'ne' operator is applied correctly
 */
test("Check if 'ne' operator is applied correctly", () => {
  gegevensmagazijn
    .selectAll('Besluit', {
      top: 25,
      filter: [["Status ne 'Besluit'"]],
    })
    .then((data) => {
      data['value'].forEach((value) => {
        expect(value.Status).not.toBe('Besluit');
      });
    });
});

/*
 Check if 'gt' operator is applied correctly
 */
test("Check if 'gt' operator is applied correctly", () => {
  gegevensmagazijn
    .selectAll('Fractie', {
      top: 2,
      filter: [['AantalZetels gt 5']],
    })
    .then((data) => {
      data['value'].forEach((value) => {
        expect(value.AantalZetels).toBeGreaterThan(5);
      });
    });
});

/*
 Check if 'lt' operator is applied correctly
 */
test("Check if 'lt' operator is applied correctly", () => {
  gegevensmagazijn
    .selectAll('Fractie', {
      top: 2,
      filter: [['AantalZetels lt 2']],
    })
    .then((data) => {
      data['value'].forEach((value) => {
        expect(value.AantalZetels).toBeLessThan(2);
      });
    });
});
