import { Settings } from './Settings';

function genFilter(thisQuery: Settings): string {
  let useFilter = false;
  let filterString = '$filter=( ';

  if (thisQuery.filter !== null) {
    useFilter = true;
    thisQuery.filter.forEach((filterRule) => {
      filterString += `${filterRule} `;
    });
  }

  if (useFilter) {
    return `${filterString})&`.trim();
  }
  return '';
}

function genSelect(thisQuery: Settings): string {
  let useSelect = false;
  let selectString = '$select=';

  if (thisQuery.select !== null) {
    useSelect = true;
    thisQuery.select.forEach((selectAttribute) => {
      selectString += `${selectAttribute},`;
    });
  }

  if (useSelect) {
    return `${selectString.slice(0, -1)}&`.trim();
  }
  return '';
}

function genExpansion(thisQuery: Settings): string {
  let useExpand = false;
  let expandString = '$expand=';
  if (thisQuery.expand !== null) {
    useExpand = true;
    thisQuery.expand.forEach((actor) => {
      if (actor[1] !== null && actor[1] !== undefined) {
        expandString += `${actor[0]}`;
        expandString += `(${actor[1]}),`;
      } else {
        expandString += `${actor[0]},`;
      }
      expandString += '';
    });
  }

  if (useExpand) {
    return `${expandString.slice(0, -1)}&`.trim();
  }
  return '';
}

export class SettingsController {
  private readonly settings: Settings;

  constructor(settings: Settings) {
    const thisSettings = new Settings(); // setup query
    if (settings === undefined || settings === null) {
      settings = thisSettings;
    }

    thisSettings.top = settings['top'] || null;
    thisSettings.skip = settings['skip'] || null;
    thisSettings.count = settings['count'] || null;
    thisSettings.select = settings['select'] || null;
    thisSettings.order = settings['order'] || null;
    thisSettings.filter = settings['filter'] || null;
    thisSettings.expand = settings['expand'] || null;
    thisSettings.format = settings['format'] || null;
    thisSettings.custom = settings['custom'] || null;

    this.settings = thisSettings;
  }

  buildQuery(): string {
    let output = '';
    if (this.settings.custom !== null) {
      return this.settings.custom;
    }
    if (this.settings.top !== null) {
      output += `$top=${this.settings.top}&`;
    }
    if (this.settings.skip !== null) {
      output += `$skip=${this.settings.skip}&`;
    }
    if (this.settings.count !== null) {
      output += `$count=${this.settings.count}&`;
    }
    if (this.settings.order !== null) {
      output += `$orderby=${this.settings.order[0]} ${this.settings.order[1]}&`;
    }
    if (this.settings.format !== null) {
      output += `$format=application/json;odata.metadata=${this.settings.format}&`;
    }

    output += genFilter(this.settings);
    output += genSelect(this.settings);
    output += genExpansion(this.settings);

    if (output.charAt(output.length - 1) === '&') {
      output = output.slice(0, -1);
    }
    return output;
  }
}
