export interface Config {
    all(): any;
    get(name: string, defaultValue: boolean): any;
    set(name: string, value: any): void;
    remove(name: string): void;
}
