import { Module } from '@wildebeest/js-modules';
import { Container } from 'inversify';
import { Config } from './Config';
import { DotConfig } from './DotConfig';
import { ConfigService } from './ConfigService';

export class ConfigModule implements Module
{
    getDependencies(): Array<any>
    {
        return [];
    }

    register(container: Container): void
    {
        container.bind<Config>("Config").to(DotConfig).whenTargetNamed("dot");
        container.bind<ConfigService>(ConfigService).toSelf().inSingletonScope();      
    }

    boot(container: Container): void { }
}