import { Injector } from "@angular/core";

/**
 * refs:
 * check on Sandro Zbinden coments:
 *   - https://www.joshmorony.com/automating-mocks-in-ionic-native-3-x/
 * check on Petr Marek answer:
 *   - https://stackoverflow.com/questions/33970645/how-to-extend-a-component-with-dependency-injection-in-angular-2
 */
export class MyInjector {

    static instance: Injector;
}
