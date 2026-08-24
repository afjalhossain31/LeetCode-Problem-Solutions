// nested data
let user = {
  name: "Sajal",
  age: 25,
  address: {
    city: "Dhaka",
    area: "Mirpur",
    zipcode: 6000,
  },
};

// console.log(user["address"]["zipcode"]);
// console.log(user.address.zipcode);

let entry = Object.entries(user);

// console.log(entry[0][1]);

let students = [
  {
    name: "Nazrul",
    id: 101,
  },
  {
    name: "Fahim",
    id: 102,
  },
  {
    name: "Abdullah",
    id: 103,
    address: {
      area: " Mirpur",
      thana: "Mirpur 1",
      lane: " Mirpur 2",
      option: [" Dhaka", "standard", "premium"],
    },
  },
];
students[2].address.option[1] = "premium";
console.log(students[2].address.option[1]);