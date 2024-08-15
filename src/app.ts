const button = document.querySelector("button")!;

function callBack(message: string) {
  console.log("clicked" + message);
}

button.addEventListener("click", callBack.bind(null, "You're welcome"));

// let userInput: unknown;
// let userName: string;

// userInput = 5;
// userInput = "User";

// if (typeof userInput === "string") {
//   userName = userInput;
// }

// function generateError( message : string , num:number ){
//   throw {message , number:num};
// }

// // const result = generateError("エラーが発生しました" , 500);
// // console.log(result);
