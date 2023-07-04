import { RequestBuilder } from './RequestBuilder';
import fetch from 'cross-fetch';

/**
 * RequestBuilderImpl
 *
 * @category RequestBuilderImpl
 * @internal
 * @description Default implementation of the RequestBuilderImpl interface
 * @see {@link RequestBuilderImpl} - RequestBuilderImpl interface
 */
export class RequestBuilderImpl implements RequestBuilder {
  /**
   * Endpoint to make the request to
   * @default "https://gegevensmagazijn.tweedekamer.nl/OData/v4/2.0"
   */
  _endpoint: string = 'https://gegevensmagazijn.tweedekamer.nl/OData/v4/2.0';
  /**
   * Entity to make the request for
   */
  _entity: string;

  /**
   * Unique id of the entity
   */
  _id?: string;

  /**
   * Custom query option
   */
  _custom?: string;

  /**
   * Amount of results to return
   * @category ODataOptions
   */
  _top?: number;

  /**
   * Amount of results to skip
   * @category ODataOptions
   */
  _skip?: number;
  /**
   * Whether to count the amount of results
   * @category ODataOptions
   */
  _count?: boolean = false;
  /**
   * The order to sort the results by
   * @category ODataOptions
   */
  _orderby?: string[];
  /**
   * The attributes to select
   * @category ODataOptions
   */
  _expand?: string[][] = [];
  /**
   * The attributes to select
   * @category ODataOptions
   */
  _select: string[] = [];
  /**
   * The attributes to filter by
   * @category ODataOptions
   */
  _filter?: string[][] = [];
  /**
   * The format to return the results in
   * @category ODataOptions
   */
  _format?: 'none' | 'minimal' | 'full';

  /**
   * Creates a new RequestBuilderImpl
   * @param entity - The entity to make the request for
   *
   * @example
   * new ODataRequest('Fractie')
   */
  constructor(entity: string) {
    if (!entity) throw new Error('No entity provided');
    this._entity = entity;
    return this;
  }

  /**
   * @inheritDoc {@link RequestBuilder}
   * @category Special functions
   */
  findById(id: string): RequestBuilder {
    if (this._id) throw new Error('ID is already defined');
    if (
      this._filter.length > 0 ||
      this._orderby ||
      this._skip > 0 ||
      this._top > 0 ||
      this._count
    )
      throw new Error(
        'Query options $filter, $orderby, $count, $skip, and $top can be applied only on collections.'
      );
    this._id = id;
    return this;
  }

  /**
   * @inheritDoc {@link RequestBuilder}
   * @category OData functions
   */
  top(top: number): RequestBuilder {
    if (this._top) throw new Error('$Top is already defined');
    if (top <= 0) throw new Error('$Top cannot be less than or equal to 0');
    if (top > 250) throw new Error('$Top cannot be greater than 250');
    if (this._id)
      throw new Error(
        '$Top can only be used on collections not on single entities'
      );
    this._top = top;
    return this;
  }

  /**
   * @inheritDoc {@link RequestBuilder}
   * @category OData functions
   */
  skip(skip: number): RequestBuilder {
    if (this._skip) throw new Error('$Skip is already defined');
    if (skip < 0) throw new Error('$Skip cannot be less than 0');
    if (this._id)
      throw new Error(
        '$Skip can only be used on collections not on single entities'
      );
    this._skip = skip;
    return this;
  }

  /**
   * @inheritDoc {@link RequestBuilder}
   * @category OData functions
   */
  count(count: boolean): RequestBuilder {
    if (this._id)
      throw new Error(
        '$Count can only be used on collections not on single entities'
      );
    this._count = count;
    return this;
  }

  /**
   * @inheritDoc {@link RequestBuilder}
   * @category OData functions
   */
  orderby(field: string, direction: 'asc' | 'desc' = 'asc'): RequestBuilder {
    if (direction !== 'asc' && direction !== 'desc')
      throw new Error('Direction must be asc or desc');
    if (this._id)
      throw new Error(
        '$Orderby can only be used on collections not on single entities'
      );
    if (this._orderby) throw new Error('$Orderby is already defined');
    this._orderby = [field, direction];
    return this;
  }

  /**
   * @inheritDoc {@link RequestBuilder}
   * @category OData functions
   */
  expand(attribute: string, func?: string): RequestBuilder {
    if (func) this._expand.push([attribute, func]);
    else this._expand.push([attribute]);
    return this;
  }

  /** @inheritDoc {@link RequestBuilder} */
  selectMultiple(attributes: string[]) {
    attributes.forEach((attribute) => {
      this.select(attribute);
    });
    return this;
  }

  /** @inheritDoc {@link RequestBuilder} */
  setSelect(attributes: string[]): RequestBuilder {
    this._select = attributes;
    return this;
  }

  /**
   * @inheritDoc {@link RequestBuilder}
   * @category OData functions
   */
  select(attribute: string): RequestBuilder {
    this._select.push(attribute);
    return this;
  }

  /**
   * @inheritDoc {@link RequestBuilder}
   * @category OData functions
   */
  filter(expression: string): RequestBuilder {
    if (this._id)
      throw new Error(
        '$Filter can only be used on collections not on single entities'
      );
    this._filter.push([expression]);
    return this;
  }

  /**
   * @inheritDoc {@link RequestBuilder}
   * @category OData functions
   */
  format(format: 'none' | 'minimal' | 'full'): RequestBuilder {
    if (this._format) throw new Error('$Format is already defined');
    this._format = format;
    return this;
  }

  /**
   * @inheritDoc {@link RequestBuilder}
   * @category Advanced/Development functions
   */
  endpoint(endpoint: string): RequestBuilder {
    this._endpoint = endpoint;
    return this;
  }

  /**
   * @inheritDoc {@link RequestBuilder}
   */
  custom(query: string): RequestBuilder {
    if (!query.startsWith('$')) throw new Error('Query must start with $');
    this._custom = query;
    return this;
  }

  /**
   * @inheritDoc {@link RequestBuilder}
   * @category Resolve functions
   */
  build(): string {
    if (!this._entity) {
      throw new Error('No entity specified');
    }

    const options: string[] = [];

    let request = `${this._endpoint}/${this._entity}`;
    if (this._id) {
      request += `/${this._id}`;
    }

    if (this._custom) {
      request += `?${this._custom}`;
      return request;
    }

    if (this._top) {
      options.push(`$top=${this._top}`);
    }

    if (this._skip) {
      options.push(`$skip=${this._skip}`);
    }

    if (this._count) {
      options.push('$count=true');
    }

    if (this._orderby) {
      const [field, direction] = this._orderby;
      options.push(`$orderby=${field} ${direction}`);
    }

    if (this._expand.length > 0) {
      const expandOptions = this._expand.map(([attribute, func]) => {
        const option = func ? `${attribute}(${func})` : attribute;
        return option;
      });
      options.push(`$expand=${expandOptions.join(',')}`);
    }

    if (this._select.length > 0) {
      options.push(`$select=${this._select.join(',')}`);
    }

    if (this._filter.length > 0) {
      const filterOptions = this._filter.map(([expression]) => expression);
      options.push(`$filter=${filterOptions.join(' and ')}`);
    }

    if (this._format) {
      options.push(`$format=${this._format}`);
    }

    if (options.length > 0) {
      request += `?${options.join('&')}`;
    }

    return request;
  }

  /**
   * @inheritDoc {@link RequestBuilder}
   * @category Resolve functions
   */
  async request(): Promise<any> {
    return await fetch(this.build()).then((response) => {
      return response.json();
    });
  }
}
