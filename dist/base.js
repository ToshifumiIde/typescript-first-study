"use strict";
function adding(n1, n2, showResult, phrase) {
    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
const number1 = 5;
const number2 = 2.8;
const printingResult = true;
const resultPhrase = "Phrase ";
adding(number1, number2, printingResult, resultPhrase);
