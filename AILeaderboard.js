function generateLeaderboard(students) {
    if (!Array.isArray(students) || students.length === 0) {
        return "Invalid";
    }

    for (const student of students) {
        if (
            typeof student !== "object" ||
            student === null ||
            !("name" in student) ||
            !("score" in student) ||
            typeof student.score !== "number"
        ) {
            return "Invalid";
        }
    }

    const qualified = students.filter(student => student.score >= 70);
    const names = qualified.map(student => student.name.toUpperCase());

    return names.slice(0, 3);
}

console.log(generateLeaderboard([
    { name: "Afjal", score: 85 },
    { name: "Hasan", score: 90 },
    { name: "Arif", score: 75 }
]));