// object

let user = {
  name: "Sajal",
  age: 25,
  address: "Dhaka",
};

// console.log(user["name"]); //user[`${}`]
delete user.address;
user.address = "Dhaka";
user.address = {
  city: "Dhaka",
  area: "Mirpur",
  zipcode: 1216,
};
// console.log(user);

console.log(Object.keys(user));