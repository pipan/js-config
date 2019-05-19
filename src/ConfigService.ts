import { injectable, inject, named } from "inversify";
import { Config } from "./Config";

@injectable()
export class ConfigService
{
    protected config: Config;

    constructor(@inject("Config") @named("dot") config: Config)
    {
        this.config = config;
    }

    load(data: any): void
    {
        for (let key in data){
            this.set(key, data[key]);
        }
    }

    get(name: string, defaultValue: boolean = false): any
    {
        this.config.get(name, defaultValue);
    }

    set(name: string, value: any): void
    {
        this.config.set(name, value);
    }
}