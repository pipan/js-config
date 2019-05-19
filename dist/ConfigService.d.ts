import { Config } from "./Config";
export declare class ConfigService {
    protected config: Config;
    constructor(config: Config);
    load(data: any): void;
    get(name: string, defaultValue?: boolean): any;
    set(name: string, value: any): void;
}
