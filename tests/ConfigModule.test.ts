import 'ts-jest';
import { Application } from '@wildebeest/js-modules';
import { ConfigModule, ConfigService, DotConfig } from '../src/index';

let app: Application = new Application();
app.run([ConfigModule]);

test("register services", () => {
    expect(app.getContainer().get(ConfigService)).toBeInstanceOf(ConfigService);
    expect(app.getContainer().getNamed("Config", "dot")).toBeInstanceOf(DotConfig);
});