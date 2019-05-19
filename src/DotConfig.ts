import { Config } from "./Config";
import { injectable } from "inversify";

@injectable()
export class DotConfig implements Config
{
    protected data: any;

    constructor()
    {
        this.data = {};
    }

    all(): any
    {
        return this.data;
    }

    get(name: string, defaultValue: any = false): any
    {
        let keys: Array<string> = name.split(".");
        let lastKey = keys[keys.length - 1];
        let lastParent = this.getLastParent(name, this.data);
        if (lastParent === null || !lastParent[lastKey]) {
            return defaultValue;
        }
        return lastParent[lastKey];
    }

    set(name: string, value: any): void
    {
        let keys: Array<string> = name.split(".");
        let lastKey = keys[keys.length - 1];
        let lastParent = this.getOrCreateLastParent(name, this.data);
        lastParent[lastKey] = value;
    }

    remove(name: string): void
    {
        let keys: Array<string> = name.split(".");
        let lastKey = keys[keys.length - 1];
        let lastParent = this.getLastParent(name, this.data);
        if (lastParent === null || !lastParent[lastKey]) {
            return;
        }
        delete lastParent[lastKey];
    }

    protected hasValue(key: string): boolean
    {
        return this.get(key) !== false;
    }

    protected getLastParent(key: string, data: any): any
    {
        let keys: Array<string> = key.split(".");
        if (keys.length == 1) {
            return data;
        }
        let currentKey: string = keys.shift();
        if (!data[currentKey]) {
            return null;
        }
        return this.getLastParent(keys.join("."), data[currentKey]);
    }

    protected getOrCreateLastParent(key: string, data: any): any
    {
        let keys: Array<string> = key.split(".");
        if (keys.length == 1) {
            return data;
        }
        let currentKey: string = keys.shift();
        if (!data[currentKey]) {
            data[currentKey] = {};
        }
        this.getOrCreateLastParent(keys.join("."), data[currentKey]);
    }
}