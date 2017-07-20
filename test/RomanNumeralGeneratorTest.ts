import { } from 'mocha';
import { expect } from 'chai';
import { RomanNumeralGenerator  } from '../src/implementation/RomanNumeralGenerator';
import TYPES from '../src/types/types';
import { container } from '../src/inversify.config';


describe('RomanNumeralGenerator', () => {
    var subject: RomanNumeralGenerator;
    beforeEach(() => {
        subject = container.get<RomanNumeralGenerator>(TYPES.IRomanNumeralGenerator);
    });
    describe('#notAllowedNegativeNumbers', () => {
        it('should not allow negative numbers', () => {
            expect(() => {subject.generate(-1)}).to.throw('Negative numbers not allowed');
        });
    });
    describe('#notAllowOver3999', () => {
        it('should not allow numbers over 3999', () => {
            expect(() => {subject.generate(4000)}).to.throw('Numbers over 3999 not allowed');
        });
    });
    describe('#shouldConvertToI', () => {
        it('should convert 1 to I', () => {
            var _result = subject.generate(1);
            expect(_result).to.eql('I');
        });
    });
    describe('#shouldConvertToV', () => {
        it('should convert 5 to V', () => {
            var _result = subject.generate(5);
            expect(_result).to.eql('V');
        });
    });
    describe('#shouldConvertToX', () => {
        it('should convert 10 to X', () => {
            var _result = subject.generate(10);
            expect(_result).to.eql('X');
        });
    });
    describe('#shouldConvertToXX', () => {
        it('should convert 20 to XX', () => {
            var _result = subject.generate(20);
            expect(_result).to.eql('XX');
        });
    });
    describe('#shouldConvertToMMMCMXCIX', () => {
        it('should convert 3999 to MMMCMXCIX', () => {
            var _result = subject.generate(3999);
            expect(_result).to.eql('MMMCMXCIX');
        });
    });
});