"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var types_1 = require("../src/types/types");
var inversify_config_1 = require("../src/inversify.config");
describe('RomanNumeralGenerator', function () {
    var subject;
    beforeEach(function () {
        subject = inversify_config_1.container.get(types_1.default.IRomanNumeralGenerator);
    });
    describe('#notAllowNegativeNumbers', function () {
        it('should not allow negative numbers', function () {
            chai_1.expect(function () { subject.generate(-1); }).to.throw('Negative numbers not allowed');
        });
    });
    describe('#notAllowOver3999', function () {
        it('should not allow numbers over 3999', function () {
            chai_1.expect(function () { subject.generate(4000); }).to.throw('Numbers over 3999 not allowed');
        });
    });
    describe('#shouldRetunEmptyStringFor0', function () {
        it('should return empty string for 0', function () {
            var _result = subject.generate(0);
            chai_1.expect(_result).to.eql('');
        });
    });
    describe('#shouldConvertToI', function () {
        it('should convert 1 to I', function () {
            var _result = subject.generate(1);
            chai_1.expect(_result).to.eql('I');
        });
    });
    describe('#shouldConvertToV', function () {
        it('should convert 5 to V', function () {
            var _result = subject.generate(5);
            chai_1.expect(_result).to.eql('V');
        });
    });
    describe('#shouldConvertToX', function () {
        it('should convert 10 to X', function () {
            var _result = subject.generate(10);
            chai_1.expect(_result).to.eql('X');
        });
    });
    describe('#shouldConvertToXX', function () {
        it('should convert 20 to XX', function () {
            var _result = subject.generate(20);
            chai_1.expect(_result).to.eql('XX');
        });
    });
    describe('#shouldConvertToMMXVII', function () {
        it('should convert 2017 to MMXVII', function () {
            var _result = subject.generate(2017);
            chai_1.expect(_result).to.eql('MMXVII');
        });
    });
    describe('#shouldConvertToMMMCMXCIX', function () {
        it('should convert 3999 to MMMCMXCIX', function () {
            var _result = subject.generate(3999);
            chai_1.expect(_result).to.eql('MMMCMXCIX');
        });
    });
});
