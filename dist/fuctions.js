"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("Result: " + num);
}
function addHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
addHandle(10, 20, (result) => {
    console.log(result);
    return true;
});
// let combineValues: Function;
// アロー関数で型宣言し、引数の型と戻り値の型を明示する
let combineValues;
combineValues = add;
// combineValues = printResult;
// combineValues = 5;
console.log(combineValues(8, 8));
printResult(add(5, 12));
