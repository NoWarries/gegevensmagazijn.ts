/**
 * RequestBuilderImpl
 * @category RequestBuilderImpl
 * @description Interface for the RequestBuilderImpl
 * @internal
 * @see {@link RequestBuilderImpl} - Default implementation
 */
export interface RequestBuilder {
  /**
   * The endpoint to make the request to
   * @internal
   * @hidden
   */
  _endpoint: string;
  /**
   * The entity to make the request for
   * @internal
   * @hidden
   */
  _entity: string;

  /**
   * The unique id of the entity
   * @internal
   * @hidden
   */
  _id?: string;

  /**
   * Custom query option
   * @internal
   * @hidden
   */
  _custom?: string;

  /**
   * The amount of results to return
   * @internal
   * @hidden
   */
  _top?: number;

  /**
   * The amount of results to skip
   * @internal
   * @hidden
   */
  _skip?: number;

  /**
   * Whether to count the amount of results
   * @internal
   * @hidden
   */
  _count?: boolean;

  /**
   * The attributes to select
   * @internal
   * @hidden
   */
  _select: string[];

  /**
   * The format to return the results in
   * @internal
   * @hidden
   */
  _format?: 'none' | 'minimal' | 'full';

  /**
   * The order to return the results in
   * @internal
   * @hidden
   */
  _orderby?: string[];

  /**
   * The filter to apply to the results
   * @internal
   * @hidden
   */
  _filter?: string[][];

  /**
   * The expansions to apply to the results
   * @internal
   * @hidden
   */
  _expand?: string[][];

  /**
   * Unique function to gather information on a specific entity instead of the entire collection
   *
   * @param id The unique id of the entity
   * @returns The RequestBuilderImpl
   * @throws If invalid query options are provided
   * @experimental
   *
   * @remarks
   * [!] Does not work with all other functions
   * Query options $filter, $orderby, $count, $skip, and $top can be applied only on collections.
   *
   * @example
   * new ODataRequest('Fractie')
   *   .findById('65129918-f256-4975-9da4-488da34d6695')
   *
   * @category Special functions
   */
  findById(id: string): RequestBuilder;

  /**
   * Expand the request to include information from other entities
   *
   * @param attribute The attribute to expand
   * @param func The function to apply to the attribute
   * @returns The RequestBuilderImpl
   *
   * @example
   * new ODataRequest('Fractie')
   *     .expand('FractieZetel')
   *     .expand('Stemming', '$select=Soort')
   *
   * @example
   * new ODataRequest('Fractie')
   *     .expand('FractieZetel')
   *     // Multiple functions can be applied to the same expansion
   *     // Using a semicolon (;) to separate them
   *     .expand('Stemming', "$top=1 ; $select=Soort")
   *
   * @category OData functions
   */
  expand(attribute: string, func?: string): RequestBuilder;

  /**
   * Limit the amount of results returned
   * @param top The amount of results to return (1..250)
   * @returns The RequestBuilderImpl
   *
   * @example
   * new ODataRequest('Fractie')
   *   .top(1)
   *
   * @example
   * new ODataRequest('Fractie')
   *  .top(250)
   *
   * @throws Error if $Top is already defined
   * @throws Error if $Top is less than or equal to 0
   * @throws Error if $Top is greater than 250
   *
   * @category OData functions
   */
  top(top: number): RequestBuilder;

  /**
   * Skip the first n results
   * @param skip The amount of results to skip (0..n)
   * @returns The RequestBuilderImpl
   *
   * @example
   * new ODataRequest('Fractie')
   *  .skip(1)
   *
   * @example
   * new ODataRequest('Fractie')
   *   .skip(250)
   *
   * @category OData functions
   */
  skip(skip: number): RequestBuilder;

  /**
   * Filter the results
   *
   * @param expression The expression to format the results with
   * @returns The RequestBuilderImpl
   *
   * @example
   * new ODataRequest('Fractie')
   *  .filter("Afkorting eq 'VVD'")
   *
   * @example
   * new ODataRequest('Fractie')
   *  .filter("AantalZetels gt 10")
   *  .filter("AantalZetels lt 20")
   *
   * @category OData functions
   */
  filter(expression: string): RequestBuilder;

  /**
   * Count the amount of results
   * @param count Whether to count the amount of results
   * @returns The RequestBuilderImpl
   *
   * @example
   * new ODataRequest('Fractie')
   *    .count(true)
   *
   *  @example
   *  new ODataRequest('Fractie')
   *    .count(false)
   *
   * @category OData functions
   */
  count(count: boolean): RequestBuilder;

  /**
   * Select a specific attribute to return
   * Will only show the attribute(s) selected for the entity
   *
   * @param attribute The attribute to select
   * @returns The RequestBuilderImpl
   *
   * @example
   * new ODataRequest('Fractie')
   *   // You can select multiple attributes
   *   .select('NaamNL')
   *   .select('NaamEN')
   *
   * @example
   * new ODataRequest('Fractie')
   *  .select('NaamNL')
   *
   * @category OData functions
   */
  select(attribute: string): RequestBuilder;

  /**
   * Select multiple attributes to return
   * Will only show the attribute(s) selected for the entity
   *
   * @param attributes The attributes to select
   * @returns The RequestBuilderImpl
   *
   * @example
   * new ODataRequest('Fractie')
   *  .selectMultiple(['NaamNL', 'NaamEN'])
   *  // You can also use the select function multiple times
   *  .selectMultiple(['DatumActief', 'DatumInactief'])
   *
   * @example
   * new ODataRequest('Fractie')
   *  .selectMultiple(['NaamNL', 'NaamEN'])
   *  // You can also use the selectMultiple function in combination with the select function
   *  .select('DatumActief')
   *
   * @category OData functions extensions
   */
  selectMultiple(attributes: string[]);

  /**
   * Select a list of attributes to return
   * Will overwrite any previous select functions
   *
   * @param attributes The attributes to select
   * @returns The RequestBuilderImpl
   *
   * @example
   * new ODataRequest('Fractie')
   *   .setSelect(['NaamNL', 'NaamEN'])
   *
   * @category OData functions extensions
   */
  setSelect(attributes: string[]): RequestBuilder;

  /**
   * The amount of metadata to return with the results
   * @param format The format to use
   * @returns The RequestBuilderImpl
   *
   * @example
   * new ODataRequest('Fractie')
   *  .format('none')
   *
   * @example
   * new ODataRequest('Fractie')
   *  .format('minimal')
   *
   * @example
   * new ODataRequest('Fractie')
   *  .format('full')
   *
   * @category OData functions
   */
  format(format: 'none' | 'minimal' | 'full'): RequestBuilder;

  /**
   * Order the results by a specific attribute
   *
   * @param field The attribute to order by
   * @param direction The direction to order by (asc or desc)
   * @returns The RequestBuilderImpl
   *
   * @example
   * new ODataRequest('Fractie')
   *   .orderby('NaamNL') // Direction defaults to asc
   *
   * @example
   * new ODataRequest('Fractie')
   *   .orderby('NaamNL', 'asc')
   *
   * @example
   * new ODataRequest('Fractie')
   *   .orderby('NaamNL', 'desc')
   *
   * @category OData functions
   */
  orderby(field: string, direction?: 'asc' | 'desc'): RequestBuilder;

  /**
   * Overwrite the default endpoint
   * @param endpoint The endpoint to use
   * @returns The RequestBuilderImpl
   *
   * @experimental
   *
   * @example
   * new ODataRequest('Fractie')
   *    .endpoint('https://proxy.tweedekamer.nl/OData/v4/2.0')
   *
   * @category Advanced/Development functions
   */
  endpoint(endpoint: string): RequestBuilder;

  /**
   * Use a custom query. Will overwrite all previously declared functions.
   * And will directly use the given query
   *
   * @param query The custom query to use
   * @returns The RequestBuilderImpl
   * @throws Error if the query does not start with a '$'
   *
   * @example
   * new ODataRequest('Fractie')
   *  .custom('$select=Afkorting')
   *  // https://gegevensmagazijn.tweedekamer.nl/OData/v4/2.0/Fractie?$select=Afkorting
   *
   *  @example
   *  new ODataRequest('Fractie')
   *    .custom('$select=Afkorting&$top=1')
   *  // https://gegevensmagazijn.tweedekamer.nl/OData/v4/2.0/Fractie?$select=Afkorting&$top=1
   *
   * @category OData functions extensions
   */
  custom(query: string): RequestBuilder;

  /**
   * Given the current state of the RequestBuilderImpl, build the request url according to functions provided
   * @returns The build request url
   *
   * @category Resolve functions
   *
   * @example
   * const construction = new ODataRequest('Fractie')
   *    .expand('FractieZetel')
   *    .top(1)
   *
   * // Log the request url (build)
   * console.log(construction.build());
   */
  build(): string;

  /**
   * Given the current state of the RequestBuilderImpl, build the request url according to functions provided
   * and then utilize cross-fetch to make the request
   *
   * @returns The response from the request
   * @see {@link https://www.npmjs.com/package/cross-fetch | cross-fetch} - Fetch API implementation
   *
   * @remarks Function flow: request -> build -> fetch
   *
   * @example
   * new ODataRequest('Fractie')
   *    .expand('FractieZetel')
   *    .expand('Stemming', '$select=Soort')
   *    .top(1)
   *    .request()
   *    // Log the data
   *    .then(data => console.log(data))
   *    .catch(err => console.warn(err))
   *
   * @example
   * const construction = new ODataRequest('Fractie')
   *     .expand('FractieZetel')
   *     .expand('Stemming', '$select=Soort')
   *     .top(1)
   *
   * construction.request().then((data) => {
   *    // Log the data
   *     console.log(data);
   * }).catch((error) => {
   *     console.warn(error);
   * });
   *
   * @category Resolve functions
   */
  request(): Promise<any>;
}
