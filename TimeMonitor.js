function averageResponseTime(times) {
    if (!Array.isArray(times)) {
        return "Invalid";
    }
    if (times.length === 0) {
        return "Invalid";
    }
    let total = 0;
    for (let i = 0; i < times.length; i++) {
        if (typeof times[i] !== "number") {
            return "Invalid";
        }

        total = total + times[i];
    }
    return total / times.length;
}

console.log(averageResponseTime([120, 200, 150, 130]));
console.log(averageResponseTime([averageResponseTime([100,100])]));
console.log(averageResponseTime("hello"));
console.log(averageResponseTime([100, "200", 300]));