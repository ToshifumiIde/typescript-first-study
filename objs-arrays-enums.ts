// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "yota",
//   age: 30,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "author"],
// };

// person.role.push("admin");
// // person.role[1] = 10;
// // person.role = [0,"admin" , "user"];

// let favoriteActivities: string[];
// favoriteActivities = ["Sports"];

// console.log(person.name);

// for (const hobby of person.hobbies) {
//   console.log(hobby.toUpperCase());
//   // console.log(hobby.map());
// }

enum Role {
  ADMIN = "ADMIN",
  READ_ONLY = "READ_ONLY",
  AUTHOR = "AUTHOR",
}

const person = {
  name: "yota",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map());
}

if (person.role === Role.ADMIN) {
  console.log("管理者ユーザー");
}
