# Gegevensmagazijn.ts

> https://www.npmjs.com/package/gegevensmagazijn.ts

![npm](https://img.shields.io/npm/dt/gegevensmagazijn.ts?style=for-the-badge)
![NPM](https://img.shields.io/npm/l/gegevensmagazijn.ts?style=for-the-badge)

A simple typescript/javascript wrapper for the Dutch : House of Representatives OData API

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [Functions](#functions)
  - [Processing the request](#processing-the-request)
  - [Summary](#summary)
- [Advanced examples](#advanced-examples)
- [Dependencies](#dependency)

## Installation

To get started with the api in your project. First install the package by writing

`npm install gegevensmagazijn.ts` in your project location

## Usage

> Please consider reading the following documentation before using this package.
>- [API's documentation](https://opendata.tweedekamer.nl/documentatie/odata-api)
> - [Wrapper documenation](https://nowarries.github.io/gegevensmagazijn.ts/)
> - [OData documentation](https://www.odata.org/getting-started/basic-tutorial/)

To use the api in your project, first import the package by writing

```typescript
import { ODataRequest } from 'gegevensmagazijn.ts'
```

Then create a new instance of the class by writing.
1. The parameter is the name of the entity you want to query
2. Available entities are listed on the [API's website](https://opendata.tweedekamer.nl/documentatie/informatiemodel)

```typescript
const request = new ODataRequest("Fractie")
```

If you want to gather information about a specific entity, you can use the `findById` method.

```typescript
request.findById("d720f5af-0516-408a-b830-0b6ffb8a581c")
```

### Functions
Now you can apply the ['functions'](https://opendata.tweedekamer.nl/documentatie/odata-api#heading-116)
to the request. For example, if you want to get the chairs of a specific fraction, you can use the `expand` method
like this:
```typescript
request.expand("FractieZetel")
```

It's important to note that 
> Query options $filter, $orderby, $count, $skip, and $top can be applied only on collections.

So if you want to use these options, you cannot use the findById method. Instead, apply the functions to the request directly.

### Processing the request

Once you applied all the functions you want to the request, you can process 1 of 2 options.

1. Use the `build()` method to get the query url. This can be used to make a request with a different library.

```typescript
request.build() // https://gegevensmagazijn.tweedekamer.nl/OData/v4/2.0/Fractie/d720f5af-0516-408a-b830-0b6ffb8a581c?$expand=FractieZetel
```

2. Use the `request()` method to make a request with [cross-fetch](https://www.npmjs.com/package/cross-fetch)

```typescript
request.request().then((response) => {
    console.log(response) // { ... }
})
```

### Summary

The wrappers usage would look something like this:

```typescript
import { ODataRequest } from 'gegevensmagazijn.ts'

const request = new ODataRequest("Fractie")

request
    .findById("d720f5af-0516-408a-b830-0b6ffb8a581c")
    .expand("FractieZetel")

request.request().then((response) => {
    console.log(response) // { ... }
}).catch((error) => {
    console.log(error)
})
```

or 

```typescript
import { ODataRequest } from 'gegevensmagazijn.ts'

const request = new ODataRequest("Fractie")

request
    .expand("FractieZetel")
    .filter("Afkorting ne 'CU'")
    .top(10)

console.log(request.build()) // https://gegevensmagazijn.tweedekamer.nl/OData/v4/2.0/Fractie?$top=10&$expand=FractieZetel&$filter=Afkorting%20ne%20%27CU%27
```

## Advanced examples

```typescript
const request = new ODataRequest('Besluit')
  .select('id')
  .expand('Zaak', '$select=Onderwerp')
  .orderby('Status')
  .filter("BesluitSoort eq 'Ingediend'")
  .select('BesluitSoort');

console.log(request.build());
```

**Result:**
```
https://gegevensmagazijn.tweedekamer.nl/OData/v4/2.0/Besluit?$orderby=Status asc&$expand=Zaak($select=Onderwerp)&$select=id,BesluitSoort&$filter=BesluitSoort eq 'Ingediend'
```

```typescript
const request = new ODataRequest('Fractie')
  .expand('FractieZetel', '$select=Id')
  .filter('AantalZetels gt 10 and AantalZetels lt 50')
  .filter("Afkorting ne 'D66'")
  .orderby('AantalZetels', 'desc')
  .skip(1)
  .count(true)
  .format('minimal');

console.log(request.build());
```

**Result:**
```
https://gegevensmagazijn.tweedekamer.nl/OData/v4/2.0/Fractie?$skip=1&$count=true&$orderby=AantalZetels desc&$expand=FractieZetel($select=Id)&$filter=AantalZetels gt 10 and AantalZetels lt 50 and Afkorting ne 'D66'&$format=minima
l
```

## Dependency

This project is dependent on:

> Dutch : House of Representatives OData API
> <br> | https://opendata.tweedekamer.nl

> cross-fetch - A light-weight module that brings fetch to Node.js
> <br> | https://github.com/lquixada/cross-fetch

> TypeDoc - Documentation generator for TypeScript projects.
> <br> | https://typedoc.org/