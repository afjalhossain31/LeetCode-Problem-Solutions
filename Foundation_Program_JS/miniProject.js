//mini project
let students = [
  { id: 101, name: "Nazrul", age: 20, department: "CSE" },
  { id: 102, name: "Sajal", age: 22, department: "EEE" },
];

function addStudent(name, age, dept) {
  let newId = students.length > 0 ? students[students.length - 1].id + 1 : 101;

  let newStudent = {
    id: newId,
    name: name,
    age: age,
    department: dept,
  };

  students.push(newStudent);
  console.log("Student added successfully");
}
addStudent("Jahidul Islam", 25, "AI");
function getAll() {
  for (const student of students) {
    console.log(student);
  }
}

// getAll();

function findStudent(id) {
  let foundstdnt = null;

  for (let student of students) {
    if (student.id == id) {
      foundstdnt = student;
      break;
    }
  }

  if (foundstdnt) {
    console.log("Found studnet: ", foundstdnt);
  } else {
    console.log("404 not found");
  }
}

findStudent(102);

function deleteStudent(id) {
  let targetStdnt = -1;

  for (let i = 0; i < students.length; i++) {
    if (students[i].id == id) {
      targetStdnt = i;
      break;
    }
  }
  if (targetStdnt != -1) {
    let deletedStd = students.splice(targetStdnt, 1);
    console.log(`deleted ${deletedStd[0].name} id: ${targetStdnt} deleted`);
  } else {
    console.log("404 not found");
  }
}

deleteStudent(101);
getAll();