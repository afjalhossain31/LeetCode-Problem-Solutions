let student = {
  name: "Sajal",
  id: 102,
  marks: {
    bangla: 75,
    english: 82,
    math: 90,
  },
};

let totalMarks = 0;
let totalSbjct = 0;

for (const sbjct in student.marks) {
  totalMarks += student.marks[sbjct];
  totalSbjct++;
}

let avg = (totalMarks / totalSbjct).toFixed(2);

if (avg >= 80) {
  console.log("Passed with distinction. got ", avg, "%");
} else {
  console.log("Fail koreche porashunai focus dite hobe");
}

// task: koto gulo item kinechen and koto tk bill hoyeche shese BDT te dekhate hobe print kore

let cart = [
  { name: "Shirt", price: 1200, quantity: 2 },
  { name: "Pants", price: 1800, quantity: 1 },
  { name: "Socks", price: 150, quantity: 3 },
];

 