import {Gegevensmagazijn} from '../Gegevensmagazijn';
export class Deserializer {

    constructor() {
        // empty constructor
    }

    public static get(Identifier: string): Promise<Deserializer> {
        return Gegevensmagazijn.self.select(this.toString(),
            Identifier,
            {
                format: 'none'
            })
            .then((data: Array<string|number|boolean>) => {
                const obj = new this();
                Object.entries(data).forEach(([key, value]) => {
                    obj[key] = value;
                });
                return obj;
        });
    }

}