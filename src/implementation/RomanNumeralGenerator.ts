import { injectable, inject } from "inversify";
import "reflect-metadata";
import { IRomanNumeralGenerator } from "../contract/IRomanNumeralGenerator";

@injectable()
class RomanNumeralGenerator implements IRomanNumeralGenerator {
    generate(int: number): string {
        if (int < 0) {
            throw new Error('Negative numbers not allowed');
        } else if (int > 3999) {
            throw new Error('Numbers over 3999 not allowed');
        } 
        return this.convertToRoman(int);
    }

    private convertToRoman(int: number) : string {
        if (int < 1) return ''; 
        if (int >= 1000) return "M" + this.convertToRoman(int - 1000);
        if (int >= 900) return "CM" + this.convertToRoman(int - 900);
        if (int >= 500) return "D" + this.convertToRoman(int - 500);
        if (int >= 400) return "CD" + this.convertToRoman(int - 400);
        if (int >= 100) return "C" + this.convertToRoman(int - 100);            
        if (int >= 90) return "XC" + this.convertToRoman(int - 90);
        if (int >= 50) return "L" + this.convertToRoman(int - 50);
        if (int >= 40) return "XL" + this.convertToRoman(int - 40);
        if (int >= 10) return "X" + this.convertToRoman(int - 10);
        if (int >= 9) return "IX" + this.convertToRoman(int - 9);
        if (int >= 5) return "V" + this.convertToRoman(int - 5);
        if (int >= 4) return "IV" + this.convertToRoman(int - 4);
        if (int >= 1) return "I" + this.convertToRoman(int - 1); 
        throw new Error('Ooer..');
    }
}
export { RomanNumeralGenerator }
