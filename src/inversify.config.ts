import { Container } from "inversify";
import TYPES from './types/types';

import { IRomanNumeralGenerator } from './contract/IRomanNumeralGenerator';
import { RomanNumeralGenerator } from './implementation/RomanNumeralGenerator';

var container = new Container();
container.bind<IRomanNumeralGenerator>(TYPES.IRomanNumeralGenerator).to(RomanNumeralGenerator);
export { container }