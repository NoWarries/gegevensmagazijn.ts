import { Provider } from './config/provider';
import { Query } from './controller/Query';
import { fetch } from 'cross-fetch';
import { processSettings } from './service/queryService';

export class Gegevensmagazijn {

  static self: Gegevensmagazijn;
  private _provider: Provider;

  constructor(provider: Provider) {
    this._provider = provider;
    Gegevensmagazijn.self = this;
  }

  /**
   * Given a request source and optionaly a set of settings, return the correct data from the OData API
   * @param {string} request the source you wish to request e.g. ["Fractie", "Stemming"]
   * @param {Query} settings configurations
   */
  public selectAll(request: string, settings?: Query): Promise<unknown> {
    const queryString = processSettings(settings).toString();
    const thisRequestURL = `${this.provider.url}${request}?${queryString}`;
    console.log(thisRequestURL)
    return fetch(`//${thisRequestURL}`).then((res) => {
      if (res.status === 400) {
        res.json().then((err => { throw new Error(err.error.message); }));
      } else if(!res.ok) {
        throw new Error(`Other error occurred with code : ${res.status}`);
      }
      return res.json();
    });
  }

  public select(request: string, identifier: string, settings?: Query): Promise<unknown> {
    const queryString = processSettings(settings).toString();
    const thisRequestURL = `${this.provider.url}${request}/${identifier}?${queryString}`;
    return fetch(`//${thisRequestURL}`).then((res) => {
      if (res.status === 400) {
        res.json().then((err => { throw new Error(err.error.message); }));
      } else if(!res.ok) {
        throw new Error(`Other error occurred with code : ${res.status}`);
      }
      return res.json();
    });
  }
  get provider(): Provider {
    return this._provider;
  }
  set provider(provider: Provider) {
    this._provider = provider;
  }
}