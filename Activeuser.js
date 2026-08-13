function filterActiveUsers(users) {
    if (!Array.isArray(users) || users.length === 0) {
        return "Invalid";
    }

    for (const user of users) {
        if (
            typeof user !== "object" ||
            user === null ||
            !("isActive" in user)
        ) {
            return "Invalid";
        }
    }

    return users.filter(user => user.isActive === true);
}

console.log(filterActiveUsers([{ name: "Abdullah", isActive: true }, { name: "Ali", isActive: false }, { name: "Ali", isActive: true }]));
