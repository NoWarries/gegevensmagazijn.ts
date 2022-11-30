# Gegevensmagazijn.ts

> https://www.npmjs.com/package/gegevensmagazijn.ts

![npm](https://img.shields.io/npm/dt/gegevensmagazijn.ts?style=for-the-badge)
![NPM](https://img.shields.io/npm/l/gegevensmagazijn.ts?style=for-the-badge)

A simple typescript/javascript wrapper for the Dutch : House of Representatives OData API

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [Setup](#Setup)
  - [Method 1](#method-1) (recommended)
    - [Options](#options)
      - [Top](#top)
      - [Skip](#skip)
      - [Count](#count)
      - [Order](#order)
      - [Expand](#expand)
      - [Select](#select)
      - [Filter](#filter)
      - [Format](#format)
      - [Custom](#custom)
  - [Advanced Examples](#advanced-examples)
  - [Method 2](#method-2) (experimental)
    - [Supported](#supported)
- [Dependency's](#dependency)

## Installation

To get started with the api in your project. First install the package by writing

`npm install gegevensmagazijn.ts`

`pnpm install gegevensmagazijn.ts`

`yarn add gegevensmagazijn.ts`

in your project location

## Usage

### Setup

Now the project is installed in your project we can import the project:

```typescript
import { gegevensmagazijn } from 'gegevensmagazijn.ts';
```

from gegevensmagazijn all functionalities will be made available

### Method 1

> (Default / Recommended) method of extracting data

The project exists of 2 main functions

- selectAll
- select

#### selectAll(request, settings?)

`selectAll` as you might've guessed will get all information relevant to the given Query.

A request might look like this

```typescript
gegevensmagazijn
  .selectAll('Stemming')
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
```

But can also **optionaly** contain a set of settings to pass

```typescript
gegevensmagazijn
  .selectAll('Stemming', {
    top: 1,
    select: ['ActorNaam'],
  })
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
```

More on these [options](#options) below

#### select(request, identifer, settings?)

`select` will get all information relevant to the given Entity and its identifier.

A request might look like this

```typescript
gegevensmagazijn
  .select('Stemming', '076034d0-52b2-409a-a841-001bfc4bcb39')
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
```

But can also **optionaly** just like selectAll contain a set of settings

```typescript
gegevensmagazijn
  .select('Stemming', 'e0fe1dc7-c9c3-4b74-9625-00004cff6854', {
    select: ['ActorNaam'],
  })
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
```

It is for non-bulk requests also possible to pass settings. But more limited.

More on these [options](#options) below

### Options

For a better understanding of how these options work we higly recommend reading the official API documentation first

> https://opendata.tweedekamer.nl/documentatie/odata-api

#### Top

| Option | Description                         | Type             |
| ------ | ----------------------------------- | ---------------- |
| `top`  | defines the amount of items to show | `number(1..250)` |

_Single use : No_

**Example:**

```typescript
{
  top: 43;
}
```

#### Skip

| Option | Description                         | Type           |
| ------ | ----------------------------------- | -------------- |
| `skip` | Defines the amount of items to skip | `number(0..n)` |

_Single use : No_

**Example:**

```typescript
{
  skip: 43;
}
```

#### Count

| Option  | Description                                                   | Type      |
| ------- | ------------------------------------------------------------- | --------- |
| `count` | Total of found items for this query (ignores `skip` & `$top`) | `boolean` |

_Single use : No_

**Example:**

```typescript
{
  count: false;
}
```

#### Order

| Option  | Description                                              | Type                      |
| ------- | -------------------------------------------------------- | ------------------------- |
| `order` | Given an attribute sort the data ascending or descending | ` [string, 'asc'/'desc']` |

_Single use : No_

**Example:**

```typescript
{
  order: ['Afkorting', 'asc'];
}
```

#### Expand

| Option   | Description                                                                      | Type                   |
| -------- | -------------------------------------------------------------------------------- | ---------------------- |
| `expand` | Given a relevant association and optionally inner filter extract associated data | `Array<Array<string>>` |

_Single use : Yes_

**Example:**

```typescript
{
  expand: [['Fractie'], ['Besluit', '$filter=(Verwijderd eq false)']];
}
```

#### Select

| Option   | Description                             | Type            |
| -------- | --------------------------------------- | --------------- |
| `select` | Only return selected attributes as data | `Array<string>` |

_Single use : Yes_

**Example:**

```typescript
{
  select: ['ActorNaam'];
}
```

```typescript
{
  select: ['ActorNaam', 'FractieGrootte'];
}
```

#### Filter

| Option   | Description                                       | Type                   |
| -------- | ------------------------------------------------- | ---------------------- |
| `filter` | Given one or more filters return relevant results | `Array<Array<string>>` |

_Single use : No_

**Example:**

```typescript
{
  filter: [
    ["Soort eq 'voor'"],
    ['and'],
    ['FractieGrootte le 34'],
    ['and'],
    ['year(GewijzigdOp) gt 2020'],
  ];
}
```

#### Format

| Option   | Description                            | Type                |
| -------- | -------------------------------------- | ------------------- |
| `format` | sets the amount of metadata to display | `none/minimal/full` |

_Single use : Yes_

**Example:**

```typescript
{
  format: 'full';
}
```

#### Custom

| Option   | Description      | Type  |
| -------- | ---------------- | ----- |
| `custom` | Custom operation | `any` |

_Single use : Yes_

> This will overwrite any other option you might've opted in for

**Example:**

```typescript
{
  custom: "$filter=Verwijderd eq false and (Functie eq 'Eerste Kamerlid' or Functie eq 'Tweede Kamerlid')";
}
```

### Advanced examples

```typescript
gegevensmagazijn.selectAll('Fractie', {
  top: 5, // Only show  5 results
  skip: 5, // Skip the first 5 entries
  filter: [
    ['Afkorting ne null'], // Afkorting not equals null (is defined)
  ],
  order: ['Afkorting', 'asc'], // Sort by attribute afkorting ascending
});
```

URL that is generated for you ``

> `https://gegevensmagazijn.tweedekamer.nl/OData/v4/2.0/Fractie?$top=5&$skip=5&$orderby=Afkorting asc&$filter=( Afkorting ne null )`

---

```typescript
gegevensmagazijn.selectAll('Besluit', {
  top: 1, // Only show top 1 result
  select: ['BesluitSoort'], // only display besluitsoort for Besluit
  expand: [
    ['Zaak', '$select=Onderwerp'], // get Associate Zaak and select Onderwerp
  ],
  filter: [
    ["BesluitSoort eq 'Ingediend'"], // where BesluitSoort equals ingediend
  ],
  order: ['Status', 'asc'], // Sort by attribute status ascending
});
```

URL that is generated for you :

> `https://gegevensmagazijn.tweedekamer.nl/OData/v4/2.0/Besluit?$top=1&$orderby=Status asc&$filter=( BesluitSoort eq 'Ingediend' )&$select=BesluitSoort&$expand=Zaak($select=Onderwerp)`

### Method 2

> Experimental method of extracting data

Method 2 is **strongly discouraged** for people who are using javascript (not-typescript)

You can now limitedly experiment with using a deserialized version of the api

1. Start by importing the Classes you wish to access

```typescript
import { Fractie } from 'gegevensmagazijn.ts';
```

2. Request a data by id

```typescript
Fractie.get('e133cd98-1b5c-47e0-ac4d-031f34199767')
  .then((data: Fractie) => {
    for (let stem in data.Stemming) {
      console.log(data.Stemming[stem].Soort);
    }
  })
  .catch((err) => console.error(err));
```

```typescript
FractieZetel.get('0f772b49-fe42-46c7-b2b9-00e7bea09ee7').then(
  (data: FractieZetel) => {
    console.log(data.Gewicht);
  }
);
```

3. All data should be made available including associations

### Supported

| Class        |
| ------------ |
| Fractie      |
| FractieZetel |
| Stemming     |
| Verslag      |
| Vergadering  |

## Dependency

This project is dependent on:

> Dutch : House of Representatives OData API
> <br> | https://opendata.tweedekamer.nl

> cross-fetch
> <br> | https://github.com/lquixada/cross-fetch
