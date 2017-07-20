"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var types_1 = require("./types/types");
var RomanNumeralGenerator_1 = require("./implementation/RomanNumeralGenerator");
var container = new inversify_1.Container();
exports.container = container;
container.bind(types_1.default.IRomanNumeralGenerator).to(RomanNumeralGenerator_1.RomanNumeralGenerator);
