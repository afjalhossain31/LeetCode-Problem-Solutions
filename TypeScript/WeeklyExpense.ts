function calculateWeeklyTotal(expenses: number[]): number {
    const total: number = expenses.reduce((sum: number, item: number) => sum + item, 0)
    return total
}
const expenses: number[] = [100, 200, 150, 300, 250];
const weeklyTotal: number = calculateWeeklyTotal(expenses);
console.log(`Weekly total expenses: $${weeklyTotal}`);
