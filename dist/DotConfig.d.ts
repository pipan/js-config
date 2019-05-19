import { Config } from "./Config";
export declare class DotConfig implements Config {
    protected data: any;
    constructor();
    all(): any;
    get(name: string, defaultValue?: any): any;
    set(name: string, value: any): void;
    remove(name: string): void;
    protected hasValue(key: string): boolean;
    protected getLastParent(key: string, data: any): any;
    protected getOrCreateLastParent(key: string, data: any): any;
}
