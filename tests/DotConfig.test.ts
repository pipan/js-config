import 'ts-jest';
import { Application } from '@wildebeest/js-modules';
import { ConfigModule, DotConfig } from '../src/index';

let app: Application = new Application();
app.run([ConfigModule]);
let config: DotConfig = app.getContainer().getNamed('Config', 'dot');

test("set value", () => {
    config.set('test', 'test value');
    expect(config.get('test')).toBe("test value");
});

test("set object", () => {
    config.set('test', {
        a: "value",
        b: {
            c: "3rd"
        }
    });
    expect(config.get('test.a')).toBe("value");
    expect(config.get('test.b.c')).toBe("3rd");
    expect(config.all()).toMatchObject({
        test: {
            a: "value",
            b: {
                c: "3rd"
            }
        }
    });
});

test("get wrong value", () => {
    config.set('test', 'test value');
    expect(config.get('test_wrong', "def")).toBe("def");
});

test("get wrong value default", () => {
    config.set('test', 'test value');
    expect(config.get('test_wrong')).toBe(false);
});

test("get all values", () => {
    config.set('test', 'test value');
    expect(config.get('test_wrong', "def")).toBe("def");
});