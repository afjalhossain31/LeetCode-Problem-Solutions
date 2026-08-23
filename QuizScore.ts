interface QuizSummary {
    total: number
    average: number
}
function getQuizSummary(scores: number[]): QuizSummary {
    if (scores.length === 0) {
        return {
            total: 0,
            average: 0
        }
    }
    const total: number = scores.reduce((sum: number, score: number) => sum + score, 0)
    const average: number = total / scores.length

    return {
        total,
        average
    }
}

const quizScores: number[] = [85, 90, 78, 92, 88];
const summary: QuizSummary = getQuizSummary(quizScores);
console.log(`Total Score: ${summary.total}`);
console.log(`Average Score: ${summary.average.toFixed(2)}`);

