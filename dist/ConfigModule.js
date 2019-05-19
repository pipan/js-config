"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DotConfig_1 = require("./DotConfig");
var ConfigService_1 = require("./ConfigService");
var ConfigModule = (function () {
    function ConfigModule() {
    }
    ConfigModule.prototype.getDependencies = function () {
        return [];
    };
    ConfigModule.prototype.register = function (container) {
        container.bind("Config").to(DotConfig_1.DotConfig).whenTargetNamed("dot");
        container.bind(ConfigService_1.ConfigService).toSelf().inSingletonScope();
    };
    ConfigModule.prototype.boot = function (container) { };
    return ConfigModule;
}());
exports.ConfigModule = ConfigModule;
//# sourceMappingURL=ConfigModule.js.map