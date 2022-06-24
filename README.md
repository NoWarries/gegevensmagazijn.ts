# Gegevensmagazijn.ts
> https://www.npmjs.com/package/@nowarries/gegevensmagazijn.ts

![npm](https://img.shields.io/npm/dt/@nowarries/gegevensmagazijn.ts?style=for-the-badge)
![NPM](https://img.shields.io/npm/l/@nowarries/gegevensmagazijn.ts?style=for-the-badge)

A simple typescript/javascript wrapper for the Dutch : House of Representatives OData API

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [Setup](#Setup)
  - [Functionalities](#functionalities)
  - [Options](#options)
    - [Top](#top)
    - [Skip](#skip)
    - [Count](#count)
    - [Order](#order)
    - [Select](#select)
    - [Filter](#filter)
    - [Custom](#custom)
- [Advanced Examples](#advanced-examples)
- [Dependency's](#dependency)

## Installation
To get started with the api in your project. First install the package by writing

`pnpm install @nowarries/gegevensmagazijn.ts`

in your project location

## Usage
### Setup
Now the project is installed in your project we can import the project:
```typescript
import { gegevensmagazijn } from "@nowarries/gegevensmagazijn.ts"
```
from gegevensmagazijn all functionalities will be made available

### Functionalities
The project exists of 2 main functions
- selectAll
- select
#### selectAll(request, settings?)
`selectAll` as you might've guessed will get all information relevant to the given Query.

A request might look like this
```typescript
gegevensmagazijn.selectAll('Stemming')
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
```
But can also **optionaly** contain a set of settings to pass
```typescript
gegevensmagazijn.selectAll('Stemming', {
  top : 1,
  select: ['ActorNaam']
})
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
```
More on these [options](#options) below

#### select(request, identifer, settings?)
`select` will get all information relevant to the given Entity and its identifier.

A request might look like this
```typescript
gegevensmagazijn.select('Stemming', "076034d0-52b2-409a-a841-001bfc4bcb39")
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
```
But can also **optionaly** just like selectAll contain a set of settings 
```typescript
gegevensmagazijn.select('Stemming', "e0fe1dc7-c9c3-4b74-9625-00004cff6854", {
  select: ['ActorNaam']
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
|--------|-------------------------------------|------------------|
| `top`  | defines the amount of items to show | `number(1..250)` |
_Single use : No_

**Example:**
```typescript
{
  top : 43
}
```

#### Skip
| Option  | Description                         | Type           |
|---------|-------------------------------------|----------------|
| `count` | Defines the amount of items to skip | `number(0..n)` |
_Single use : No_

**Example:**
```typescript
{
  skip : 43
}
```

#### Count
| Option  | Description                                                    | Type    |
|---------|----------------------------------------------------------------|---------|
| `count` | Total of found items for this query (ignores `skip` & `$top`)  | `boolean` |
_Single use : No_

**Example:**
```typescript
{
  count : false
}
```

#### Order
| Option  | Description                                              | Type                      |
|---------|----------------------------------------------------------|---------------------------|
| `order` | Given an attribute sort the data ascending or descending | ` [string, 'asc'/'desc']` |
_Single use : No_

**Example:**
```typescript
{
  order: ["Afkorting", "asc"]
}
```

#### Expand
| Option   | Description                                                                      | Type                   |
|----------|----------------------------------------------------------------------------------|------------------------|
| `expand` | Given a relevant association and optionally inner filter extract associated data | `Array<Array<string>>` |
_Single use : Yes_

**Example:**
```typescript
{
  expand: [
    ["Fractie"],
    ["Besluit", "$filter=(Verwijderd eq false)"]
  ]
}
```

#### Select
| Option   | Description                             | Type            |
|----------|-----------------------------------------|-----------------|
| `select` | Only return selected attributes as data | `Array<string>` |
_Single use : Yes_

**Example:**
```typescript
{
  select: ["ActorNaam"]
}
```
```typescript
{
  select: ["ActorNaam", "FractieGrootte"]
}
```

#### Filter
| Option   | Description                                       | Type            |
|----------|---------------------------------------------------|-----------------|
| `filter` | Given one or more filters return relevant results | `Array<string>` |
_Single use : No_

**Example:**
```typescript
{
  filter: [
    ["Soort eq 'voor'"],
    ["and"],
    ["FractieGrootte le 34"],
    ["and"],
    ["year(GewijzigdOp) gt 2020"]
  ]
}
```

#### Custom
| Option   | Description      | Type  |
|----------|------------------|-------|
| `custom` | Custom operation | `any` |
_Single use : Yes_

> This will overwrite any other option you might've opted in for

**Example:**
```typescript
{
  custom : "$filter=Verwijderd eq false and (Functie eq 'Eerste Kamerlid' or Functie eq 'Tweede Kamerlid')"
}
```


### Advanced examples
```typescript
gegevensmagazijn.selectAll('Fractie', {
    top: 5, // Only show  5 results
    skip: 5, // Skip the first 5 entries
    filter: [
        ["Afkorting ne null"] // Afkorting not equals null (is defined)
    ],
    order: ["Afkorting", "asc"] // Sort by attribute afkorting ascending
})
```
URL that is generated for you ``
> `https://gegevensmagazijn.tweedekamer.nl/OData/v4/2.0/Fractie?$top=5&$skip=5&$orderby=Afkorting asc&$filter=( Afkorting ne null )`
> 

---

```typescript
gegevensmagazijn.selectAll('Besluit', {
  top: 1, // Only show top 1 result
  select: ["BesluitSoort"], // only display besluitsoort for Besluit
  expand: [
    ["Zaak", "$select=Onderwerp"] // get Associate Zaak and select Onderwerp
  ],
  filter: [
    ["BesluitSoort eq 'Ingediend'"] // where BesluitSoort equals ingediend
  ],
  order: ["Status", "asc"] // Sort by attribute status ascending
})
```

URL that is generated for you :
> `https://gegevensmagazijn.tweedekamer.nl/OData/v4/2.0/Besluit?$top=1&$orderby=Status asc&$filter=( BesluitSoort eq 'Ingediend' )&$select=BesluitSoort&$expand=Zaak($select=Onderwerp)`

## Dependency
This project is dependent on:
>Dutch : House of Representatives OData API
<br> | https://opendata.tweedekamer.nl

>cross-fetch
<br> | https://github.com/lquixada/cross-fetch 
