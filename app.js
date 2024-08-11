var userInput;
var userName;
userInput = 5;
userInput = "User";
if (typeof userInput === "string") {
    userName = userInput;
}
function generateError(message, num) {
    throw { message: message, number: num };
}
var result = generateError("エラーが発生しました", 500);
console.log(result);
