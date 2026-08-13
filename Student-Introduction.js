function studentIntroduction(student) {
    if (
        typeof student !== "object" ||
        student === null ||
        Array.isArray(student) ||
        !("name" in student) ||
        !("age" in student) ||
        !("course" in student)
    ) {
        return "Invalid";
    }

    return `My name is ${student.name}. I am ${student.age} years old. I am learning ${student.course}.`;
}

console.log(studentIntroduction({ name: "Abdullah", age: 20, course: "JavaScript" }));
console.log(studentIntroduction({ name: "Ali", age: 22, course: "Python" }));