import { Provider } from '../provider/Provider';
import { Settings } from '../settings/Settings';
import { fetch } from 'cross-fetch';
import { SettingsController } from '../settings/SettingsController';

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
   * @param {Settings} settings configurations
   */
  public selectAll(request: string, settings?: Settings): Promise<unknown> {
    const settingController: SettingsController = new SettingsController(
      settings
    );
    const queryString = settingController.buildQuery();
    const thisRequestURL = `${this.provider.url}${request}?${queryString}`;
    return fetch(`//${thisRequestURL}`).then((res) => {
      if (res.status === 400) {
        res.json().then((err) => {
          throw new Error(err.error.message);
        });
      } else if (!res.ok) {
        throw new Error(`Other error occurred with code : ${res.status}`);
      }
      return res.json();
    });
  }

  public select(
    request: string,
    identifier: string,
    settings?: Settings
  ): Promise<unknown> {
    const settingController: SettingsController = new SettingsController(
      settings
    );
    const queryString = settingController.buildQuery();
    const thisRequestURL = `${this.provider.url}${request}/${identifier}?${queryString}`;
    return fetch(`//${thisRequestURL}`).then((res) => {
      if (res.status === 400) {
        res.json().then((err) => {
          throw new Error(err.error.message);
        });
      } else if (!res.ok) {
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
