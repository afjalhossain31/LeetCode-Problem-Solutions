function bonusScore(scores) {
    if (!Array.isArray(scores) || scores.length === 0) {
        return "Invalid";
    }

    for (const score of scores) {
        if (typeof score !== "number") {
            return "Invalid";
        }
    }

    const updatedScores = scores.map(score => score + 10);

    return updatedScores.reduce((total, score) => total + score, 0);
}

console.log(bonusScore([50, 60, 70]));
