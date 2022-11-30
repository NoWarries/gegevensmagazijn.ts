import {Gegevensmagazijn} from '../../app/Gegevensmagazijn';
export class Deserializer {

    public static get(Identifier: string): Promise<Deserializer> {
        return Gegevensmagazijn.self.select(this.toString(),
            Identifier,
          {
              format: 'minimal',
              expand: [
                  ['*'],
              ]
          })
            .then((data: Array<string|number|boolean>) => {
                const obj = new this();
                Object.entries(data).forEach(([key, value]) => {
                    if(key.toLowerCase().includes('odata')) {
                        if(key.includes('odata.associationLink')) {
                            obj[key.replace('@odata.associationLink', '')] = value;
                        }
                    } else {
                        obj[key] = value;
                    }
                });
                return obj;
        });
    }
}