"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var DotConfig = (function () {
    function DotConfig() {
        this.data = {};
    }
    DotConfig.prototype.all = function () {
        return this.data;
    };
    DotConfig.prototype.get = function (name, defaultValue) {
        if (defaultValue === void 0) { defaultValue = false; }
        var keys = name.split(".");
        var lastKey = keys[keys.length - 1];
        var lastParent = this.getLastParent(name, this.data);
        if (lastParent === null || !lastParent[lastKey]) {
            return defaultValue;
        }
        return lastParent[lastKey];
    };
    DotConfig.prototype.set = function (name, value) {
        var keys = name.split(".");
        var lastKey = keys[keys.length - 1];
        var lastParent = this.getOrCreateLastParent(name, this.data);
        lastParent[lastKey] = value;
    };
    DotConfig.prototype.remove = function (name) {
        var keys = name.split(".");
        var lastKey = keys[keys.length - 1];
        var lastParent = this.getLastParent(name, this.data);
        if (lastParent === null || !lastParent[lastKey]) {
            return;
        }
        delete lastParent[lastKey];
    };
    DotConfig.prototype.hasValue = function (key) {
        return this.get(key) !== false;
    };
    DotConfig.prototype.getLastParent = function (key, data) {
        var keys = key.split(".");
        if (keys.length == 1) {
            return data;
        }
        var currentKey = keys.shift();
        if (!data[currentKey]) {
            return null;
        }
        return this.getLastParent(keys.join("."), data[currentKey]);
    };
    DotConfig.prototype.getOrCreateLastParent = function (key, data) {
        var keys = key.split(".");
        if (keys.length == 1) {
            return data;
        }
        var currentKey = keys.shift();
        if (!data[currentKey]) {
            data[currentKey] = {};
        }
        this.getOrCreateLastParent(keys.join("."), data[currentKey]);
    };
    DotConfig = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], DotConfig);
    return DotConfig;
}());
exports.DotConfig = DotConfig;
//# sourceMappingURL=DotConfig.js.map