let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "User";

if (typeof userInput === "string") {
  userName = userInput;
}


function generateError( message : string , num:number ){
  throw {message , number:num};
}

const result = generateError("エラーが発生しました" , 500);
console.log(result);